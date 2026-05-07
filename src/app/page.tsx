import Navbar from "./components/Navbar";
import Section from "./components/Section";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-nevas-deep text-nevas-cream">
      <Navbar />
      <WhatsAppFloat phoneE164="+5511942514700" />

      {/* HERO */}
      <div
        id="inicio"
        className="relative pt-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px 500px at 15% 10%, rgba(200,191,168,0.35), rgba(14,22,11,0) 60%), radial-gradient(650px 430px at 90% 0%, rgba(46,59,30,0.55), rgba(14,22,11,0) 55%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <Section className="block">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Reveal>
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 justify-center lg:justify-start">
                      <span className="h-8 w-8 rounded-full bg-nevas-primary/30 ring-1 ring-white/10" />
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                        Consultoria B2B • Estruturação • Gestão • Crescimento
                      </span>
                    </div>

                    <h1 className="text-[40px] leading-[1.05] font-light tracking-tight text-nevas-cream sm:text-[54px]">
                      A corporação que a sua empresa precisava.
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-nevas-sand">
                      Da operação à gestão estratégica — estruturamos,
                      profissionalizamos e alavancamos o seu negócio com uma equipe
                      completa dedicada ao seu crescimento.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href="#contato"
                        className="inline-flex h-12 items-center justify-center rounded-2xl bg-nevas-primary px-7 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-cream ring-1 ring-white/15"
                      >
                        Falar com um Especialista
                      </a>

                      <a
                        href="#solucoes"
                        className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/18 bg-nevas-cream/5 px-7 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand"
                      >
                        Ver Soluções
                      </a>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 pt-2">
                      {[
                        {
                          k: "Equipe multidisciplinar",
                          v: "Mais de 20 profissionais",
                        },
                        {
                          k: "Atuação integrada",
                          v: "Operação + Gestão",
                        },
                        {
                          k: "Foco em crescimento",
                          v: "Sustentável e executável",
                        },
                      ].map((item) => (
                        <div key={item.k} className="min-w-0">
                          <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                            {item.k}
                          </div>
                          <div className="pt-2 text-sm font-semibold text-nevas-cream">
                            {item.v}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="relative">
                {/* sem blur para não “tapar” o texto */}
                <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-nevas-primary/30" />
                <div className="absolute bottom-0 -right-14 h-64 w-64 rounded-full bg-nevas-sand/15" />

                <div className="relative rounded-[28px] border border-white/18 bg-nevas-cream/7 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                        Neva’s Corp
                      </div>
                        <div className="pt-2 text-2xl font-light text-nevas-cream">
                          Estruturação corporativa com execução
                        </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      "Diagnóstico completo",
                      "Plano de ação priorizado",
                      "Implementação junto ao time",
                      "Acompanhamento e governança",
                    ].map((t) => (
                      <div key={t} className="flex items-center gap-3">
                        <span className="h-7 w-7 rounded-xl bg-nevas-primary/25 ring-1 ring-white/10" />
                        <span className="text-sm font-semibold text-nevas-sand">{t}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-nevas-sand p-4 border border-white/20">
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-deep">
                      Entrega orientada por resultados
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-nevas-deep">
                      Sem fórmulas genéricas. Sem “guru”. Execução com governança
                      para transformar desafios em crescimento real.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* SOBRE */}
      <div className="bg-nevas-deep border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Section>
            <div
              id="sobre"
              className="grid gap-10 lg:grid-cols-2 lg:items-start"
            >
              <div className="space-y-4 text-center lg:text-left">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                  Sobre a Neva’s Corp
                </div>
                <h2 className="text-[30px] leading-tight font-light text-nevas-cream sm:text-[34px]">
                  Assessoria corporativa completa — ponta a ponta.
                </h2>
                <p className="text-base leading-relaxed text-nevas-sand">
                  A Neva&apos;s Corp é uma assessoria corporativa completa. Atuamos
                  de forma integrada dentro da empresa do cliente — da área
                  operacional à gestão executiva — com o objetivo de identificar
                  gargalos, estruturar processos e criar as condições para um
                  crescimento sólido e sustentável.
                </p>
                <p className="text-base leading-relaxed text-nevas-sand">
                  Não vendemos teoria. Temos mais de 20 profissionais especializados
                  que entram na sua empresa e fazem acontecer.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Equipe multidisciplinar",
                    desc: "Mais de 20 profissionais especializados.",
                  },
                  {
                    title: "Atuação integrada",
                    desc: "Operação, gestão, cultura, financeiro e RH.",
                  },
                  {
                    title: "Crescimento real",
                    desc: "Faturamento, cultura organizacional e estabilidade.",
                  },
                  {
                    title: "Direto ao ponto",
                    desc: "Abordagem prática, sem metodologias genéricas.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/18 bg-nevas-cream/7 p-5 cursor-default select-none"
                  >
                    <div className="text-xs font-semibold tracking-[0.16em] uppercase text-nevas-sand">
                      {c.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-nevas-cream">
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* SOLUÇÕES */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Section>
          <div id="solucoes" className="space-y-4">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
              Soluções
            </div>
            <h2 className="text-[34px] leading-tight font-light text-nevas-cream">
              Estruturação e gestão com foco em resultados.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-nevas-sand">
              Um pacote integrado para organizar a operação, profissionalizar a
              gestão e sustentar o crescimento com governança.
            </p>
          </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
            {[
              "Diagnóstico Empresarial Completo",
              "Estruturação de Processos Operacionais",
              "Gestão Financeira e Planejamento Estratégico",
              "Cultura Organizacional e Gestão de Pessoas",
              "Reestruturação de Empresas em Crescimento",
              "Implementação de Indicadores e Governança",
              "Assessoria Executiva Contínua",
            ].map((s) => (
              <div
                key={s}
                className="rounded-2xl border border-white/18 bg-nevas-cream/7 p-5 cursor-default select-none"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-2xl bg-nevas-primary/35 ring-1 ring-white/15" />
                  <div>
                    <div className="text-sm font-semibold text-nevas-cream">
                      {s}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-nevas-sand">
                      {s.includes("Diagnóstico")
                        ? "Mapeamos gargalos, riscos e oportunidades com profundidade para orientar decisões."
                        : s.includes("Processos")
                          ? "Organizamos execução e padronizamos rotinas para reduzir desperdícios e elevar consistência."
                          : s.includes("Financeira")
                            ? "Conectamos desempenho financeiro a decisões estratégicas, com clareza e previsibilidade."
                            : s.includes("Cultura")
                              ? "Alinhamos comportamento, liderança e gestão de pessoas para sustentar disciplina e evolução."
                              : s.includes("Reestruturação")
                                ? "Ajudamos a empresa a atravessar fases de crescimento com estabilidade estrutural."
                                : s.includes("Indicadores")
                                  ? "Implementamos governança prática com indicadores que suportam acompanhamento e ajustes."
                                  : "Acompanhamos continuamente para manter o ritmo, a evolução e a coerência do plano."}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* COMO FUNCIONA */}
      <div className="bg-nevas-deep border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Section>
            <div id="como-funciona" className="space-y-4">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
              Como funciona
            </div>
            <h2 className="text-[30px] leading-tight font-light text-nevas-cream sm:text-[34px]">
              Diagnóstico → Plano → Implementação → Acompanhamento.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-nevas-sand">
              Uma sequência objetiva para transformar desafios em execução,
              com governança e consistência.
            </p>
            </div>

            <div className="mt-10 grid gap-3 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Diagnóstico",
                  d: "Entendemos a fundo o momento e os desafios da empresa.",
                },
                {
                  n: "02",
                  t: "Plano de Ação",
                  d: "Mapeamos prioridades e montamos a estratégia personalizada.",
                },
                {
                  n: "03",
                  t: "Implementação",
                  d: "Nossa equipe atua junto com a sua empresa na execução.",
                },
                {
                  n: "04",
                  t: "Acompanhamento",
                  d: "Monitoramos resultados e ajustamos continuamente.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border border-white/18 bg-nevas-cream/7 p-5 cursor-default select-none"
                >
                  <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                    {step.n}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-nevas-cream">
                    {step.t}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-nevas-sand">
                    {step.d}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* CASES */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Section>
          <div id="cases" className="space-y-4">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
              Cases
            </div>
            <h2 className="text-[30px] leading-tight font-light text-nevas-cream sm:text-[34px]">
              Evidências em breve.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-nevas-sand">
              Você poderá adicionar depoimentos, números e histórias de projetos aqui.
              Por enquanto, preparamos uma estrutura elegante e pronta para receber seus resultados.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              {
                lead: "Depoimento 01",
                name: "Mariana S.",
                role: "Diretora Administrativa",
                company: "Grupo Industrial (SP)",
                quote:
                  "A Neva’s Corp organizou nossa operação com governança prática. O plano ficou claro, as decisões passaram a ter ritmo e indicadores consistentes — com crescimento sustentável.",
                result: "Ciclo de decisão mais rápido • +Previsibilidade",
              },
              {
                lead: "Depoimento 02",
                name: "Ricardo M.",
                role: "CEO",
                company: "Empresa de Serviços (Brasil)",
                quote:
                  "A assessoria integrou gestão e operação sem discurso genérico. Em poucos ciclos, ajustamos processos, alinhamos pessoas e criamos estabilidade estrutural para escalar com segurança.",
                result: "Processos padronizados • Menos retrabalho",
              },
              {
                lead: "Depoimento 03",
                name: "Aline P.",
                role: "Head de Operações",
                company: "Negócio em Expansão (SP)",
                quote:
                  "O diagnóstico foi preciso e o plano de ação priorizado nos permitiu executar com foco. Acompanhamento contínuo fez a diferença na cultura e na governança do dia a dia.",
                result: "Execução com cadência • Cultura alinhada",
              },
            ].map((t) => (
              <div
                key={t.lead}
                className="rounded-2xl border border-white/18 bg-nevas-cream/7 p-5 cursor-default select-none"
              >
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                  {t.lead}
                </div>

                <div className="mt-3 text-sm font-semibold text-nevas-cream">
                  {t.name} • {t.role}
                </div>

                <div className="mt-1 text-xs text-nevas-sand">
                  {t.company}
                </div>

                <div className="mt-3 text-sm leading-relaxed text-nevas-cream/90">
                  “{t.quote}”
                </div>

                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-nevas-sand">
                  {t.result}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ + CONTATO */}
      <div className="bg-nevas-deep border-y border-white/10" id="contato">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                  Contato
                </div>
                <h2 className="text-[30px] leading-tight font-light text-nevas-cream sm:text-[34px]">
                  Fale com um Especialista.
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-nevas-sand">
                  Envie sua mensagem e retornaremos com uma orientação objetiva.
                  Se preferir, utilize o WhatsApp flutuante.
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                  FAQ
                </div>
                <div className="mt-4">
                  <FAQ />
                </div>
              </div>

              <div className="rounded-2xl border border-white/18 bg-nevas-cream/7 p-5 cursor-default select-none">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand">
                  Atendimento
                </div>
                <div className="mt-2 text-sm leading-relaxed text-nevas-cream">
                  São Paulo – SP | Atendimento nacional
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/18 bg-nevas-cream/7 p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ */}
      <footer className="bg-nevas-cream/10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-nevas-primary/35 ring-1 ring-white/15 flex items-center justify-center">
                <span className="text-nevas-sand font-semibold">NC</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-nevas-cream">
                  Neva&apos;s Corp
                </div>
                <div className="text-xs text-nevas-sand">
                  A corporação que a sua empresa precisava.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand">
              <a href="#inicio" className="transition-colors hover:text-nevas-cream">
                Início
              </a>
              <a href="#sobre" className="transition-colors hover:text-nevas-cream">
                Sobre
              </a>
              <a href="#solucoes" className="transition-colors hover:text-nevas-cream">
                Soluções
              </a>
              <a href="#como-funciona" className="transition-colors hover:text-nevas-cream">
                Como funciona
              </a>
              <a href="#cases" className="transition-colors hover:text-nevas-cream">
                Cases
              </a>
              <a href="#contato" className="transition-colors hover:text-nevas-cream">
                Contato
              </a>
            </div>
          </div>

          <div className="mt-8 text-xs text-nevas-sand">
            © 2025 Neva&apos;s Corp. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

