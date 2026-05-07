"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  company: z.string().min(2, "Informe a empresa."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().min(8, "Informe um telefone/WhatsApp."),
  message: z.string().min(10, "Conte brevemente seu contexto (mín. 10 caracteres)."),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "sending" }
    | { type: "success"; detail?: string }
    | { type: "error"; detail?: string }
  >({ type: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onTouched",
  });

  const placeholders = useMemo(
    () => ({
      // Você só precisa substituir depois (Service/Template/User do EmailJS).
      // Caso prefira Resend/Server-side, dá para migrar sem mexer na UI.
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
    }),
    []
  );

  const onSubmit = async (values: FormValues) => {
    setStatus({ type: "sending" });

    try {
      // Template (EmailJS) deve mapear estes campos:
      // name, company, email, phone, message
      await emailjs.send(
        placeholders.serviceId,
        placeholders.templateId,
        values,
        placeholders.publicKey
      );

      // Se o EmailJS estiver corretamente configurado, esse sucesso valida o envio.
      setStatus({
        type: "success",
        detail: "Recebemos sua mensagem. Em breve, entraremos em contato.",
      });

      reset();
    } catch (error) {
      setStatus({
        type: "error",
        detail:
          "Não foi possível enviar agora. Verifique os dados e tente novamente, ou use o WhatsApp.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-1">
          <label className="text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand/80">
            Seu nome
          </label>
          <input
            {...register("name")}
            placeholder="Nome completo"
            className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-nevas-cream placeholder:text-nevas-sand/40 outline-none ring-offset-0 focus:border-nevas-sand/25"
          />
          {errors.name ? (
            <p className="text-xs text-red-200">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand/80">
            Empresa
          </label>
          <input
            {...register("company")}
            placeholder="Nome da empresa"
            className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-nevas-cream placeholder:text-nevas-sand/40 outline-none ring-offset-0 focus:border-nevas-sand/25"
          />
          {errors.company ? (
            <p className="text-xs text-red-200">{errors.company.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-1">
          <label className="text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand/80">
            E-mail
          </label>
          <input
            {...register("email")}
            placeholder="voce@empresa.com"
            className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-nevas-cream placeholder:text-nevas-sand/40 outline-none ring-offset-0 focus:border-nevas-sand/25"
          />
          {errors.email ? (
            <p className="text-xs text-red-200">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand/80">
            Telefone / WhatsApp
          </label>
          <input
            {...register("phone")}
            placeholder="+55 (11) 9XXXX-XXXX"
            className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-nevas-cream placeholder:text-nevas-sand/40 outline-none ring-offset-0 focus:border-nevas-sand/25"
          />
          {errors.phone ? (
            <p className="text-xs text-red-200">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-1">
        <label className="text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand/80">
          Sua mensagem
        </label>
        <textarea
          {...register("message")}
          placeholder="Descreva seu cenário, estágio e o que você precisa estruturar para crescer com sustentabilidade."
          rows={5}
          className="min-h-[140px] resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-nevas-cream placeholder:text-nevas-sand/40 outline-none ring-offset-0 focus:border-nevas-sand/25"
        />
        {errors.message ? (
          <p className="text-xs text-red-200">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.type === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-2xl bg-nevas-sand/15 px-6 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-cream ring-1 ring-white/10 hover:bg-nevas-sand/20 disabled:opacity-60"
        >
          {status.type === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>

        <div className="text-xs leading-relaxed text-nevas-sand/70">
          Destino do contato:{" "}
          <span className="text-nevas-cream/90">helberneva@gmail.com</span>
        </div>
      </div>

      {status.type === "success" ? (
        <div className="rounded-2xl border border-green-300/25 bg-green-300/10 px-4 py-3 text-sm text-green-100">
          {status.detail}
        </div>
      ) : null}

      {status.type === "error" ? (
        <div className="rounded-2xl border border-red-300/25 bg-red-300/10 px-4 py-3 text-sm text-red-100">
          {status.detail}
        </div>
      ) : null}
    </form>
  );
}
