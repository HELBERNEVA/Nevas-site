"use client";

type WhatsAppFloatProps = {
  phoneE164: string;
  label?: string;
};

export default function WhatsAppFloat({
  phoneE164,
  label = "Falar com um Especialista",
}: WhatsAppFloatProps) {
  const href = `https://wa.me/${phoneE164.replace("+", "")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2 rounded-2xl bg-nevas-primary px-4 text-xs font-semibold uppercase tracking-[0.14em] text-nevas-cream shadow-[0_20px_60px_rgba(26,36,16,0.35)] ring-1 ring-white/10"
    >
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48A11.86 11.86 0 0 0 12 1.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.19.6 4.31 1.74 6.18L1 23l3.44-.73A11.46 11.46 0 0 0 12 22.5c6.35 0 11.5-5.15 11.5-11.5 0-3.2-1.32-6.1-2.98-7.52Z"
            stroke="rgba(245,240,232,0.9)"
            strokeWidth="1.5"
          />
          <path
            d="M9.2 7.9c.25-.6.5-.6.8-.6h.6c.2 0 .45 0 .65.45l.85 2.05c.2.5.15.65 0 .9-.1.15-.25.35-.35.5-.2.25-.4.45-.2.85.2.4.85 1.4 1.8 2.25 1.25 1.1 2.35 1.45 2.75 1.6.35.1.55.05.75-.15.25-.3.85-1 1.05-1.35.25-.4.5-.35.85-.25l2.1 1c.45.2.6.3.55.55-.05.25-.25 1.55-1 2.2-.75.65-1.5.6-2 .5-.5-.1-2.05-.6-3.9-2.05-2.1-1.65-3.4-3.7-3.8-4.45-.4-.75-.7-1.6-.65-2.4.05-.8.45-1.35.55-1.55Z"
            fill="rgba(245,240,232,0.9)"
          />
        </svg>
      </span>
      {label}
    </a>
  );
}
