import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variante = "azul" | "laranja" | "contorno" | "contorno-claro";

const estilos: Record<Variante, string> = {
  azul: "bg-azul text-white hover:bg-azul-escuro",
  laranja: "bg-laranja text-noite hover:bg-laranja-claro",
  contorno: "border-2 border-azul text-azul hover:bg-ceu",
  "contorno-claro": "border-2 border-white/80 text-white hover:bg-white/10",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variante?: Variante;
  icone?: ReactNode;
  externo?: boolean;
};

export function Botao({ variante = "azul", icone, externo, className = "", children, ...props }: Props) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-base font-bold transition-colors duration-150 ${estilos[variante]} ${className}`}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icone}
      <span>{children}</span>
      {externo && <span className="sr-only">(abre em nova aba)</span>}
    </a>
  );
}
