"use client";

import { useMemo, useState } from "react";

const FAQS = [
  {
    q: "O que vocês fazem na prática?",
    a: "A Neva's Corp atua junto ao cliente para estruturar processos, fortalecer a gestão e criar as condições para crescimento sustentável — com execução, não teoria.",
  },
  {
    q: "Vocês atendem empresas em qualquer estágio?",
    a: "Sim. Estruturamos empresas do zero ao crescimento escalável, respeitando o contexto atual do negócio e as prioridades do setor.",
  },
  {
    q: "Como é iniciado o trabalho?",
    a: "Começamos com um diagnóstico detalhado para entender gargalos, riscos e oportunidades. Em seguida, definimos um plano de ação priorizado e executável.",
  },
  {
    q: "Quais áreas entram no escopo?",
    a: "A atuação é integrada: operação, gestão executiva, cultura organizacional, financeiro e RH — sempre alinhado aos objetivos do cliente.",
  },
  {
    q: "Quanto tempo leva para perceber resultados?",
    a: "Os ganhos iniciais dependem do contexto. Normalmente, os primeiros passos geram clareza e organização rapidamente; a consolidação evolui conforme implementação e acompanhamento.",
  },
  {
    q: "Como vocês garantem consistência e governança?",
    a: "Implementamos indicadores e rotinas de governança que conectam execução, metas e acompanhamento contínuo, mantendo o controle sobre evolução e ajustes necessários.",
  },
  {
    q: "Vocês trabalham com confidencialidade?",
    a: "Sim. Tratamos informações do cliente com discrição e adotamos práticas para garantir segurança e integridade durante o projeto.",
  },
  {
    q: "Atendem somente São Paulo?",
    a: "Atendemos São Paulo – SP com foco e execução regional, mas realizamos atendimento nacional com entendimento do mercado brasileiro.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = useMemo(() => FAQS, []);

  return (
    <div className="grid gap-3">
      {faqs.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
              className="w-full px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-nevas-cream">
                  {item.q}
                </div>
                <div
                  className={[
                    "h-9 w-9 rounded-xl border border-white/10 grid place-items-center transition-transform",
                    isOpen ? "rotate-45" : "rotate-0",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <span className="text-nevas-sand/80 text-lg">+</span>
                </div>
              </div>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-nevas-sand/80">
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
