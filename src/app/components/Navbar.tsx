"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo(() => NAV, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="rounded-2xl border border-white/10 bg-[#1a2410]/50 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl ring-1 ring-nevas-sand/25 overflow-hidden bg-nevas-primary/20">
                {/* Logo (monograma) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Neva's Corp"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight">

                <div className="text-sm font-semibold tracking-wide text-nevas-sand">
                  Neva&apos;s Corp
                </div>
                <div className="text-[11px] text-nevas-sand/70">
                  Assessoria corporativa
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="text-xs font-semibold tracking-[0.18em] uppercase text-nevas-sand/80 hover:text-nevas-sand transition-colors"
                >
                  {it.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contato"
                className="hidden rounded-full bg-nevas-primary px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-cream md:inline-flex"
              >
                Falar com um Especialista
              </a>

              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                aria-label="Abrir menu"
                onClick={() => setOpen((v) => !v)}
              >
                <span className="h-5 w-5 rounded bg-nevas-sand/70" />
              </button>
            </div>
          </div>

          {open ? (
            <div className="px-4 pb-4 md:hidden">
              <div className="grid gap-3">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-sand/90"
                  >
                    {it.label}
                  </Link>
                ))}
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-nevas-primary px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-nevas-cream"
                >
                  Falar com um Especialista
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
