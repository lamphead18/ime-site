import { useId } from "react";

// Faixa de triângulos laranja e azul, a mesma dos folders impressos da escola.
// Puramente decorativa: escondida de leitores de tela.
export function Bandeirola({ className = "", invertida = false }: { className?: string; invertida?: boolean }) {
  const id = useId();
  return (
    <svg
      className={`block h-4 w-full md:h-5 ${invertida ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={id} width="88" height="20" patternUnits="userSpaceOnUse">
          <polygon points="0,0 36,0 18,20" fill="var(--color-laranja)" />
          <polygon points="44,0 80,0 62,20" fill="var(--color-azul)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
