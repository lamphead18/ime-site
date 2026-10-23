import type { CSSProperties } from "react";
import { turmas } from "@/content/site";

// As turmas são uma progressão, então aparecem como degraus que sobem da esquerda para a direita.
const tons = ["bg-ceu", "bg-[#d6e2fa]", "bg-[#bccff5]", "bg-azul", "bg-azul-escuro"];

export function Turmas() {
  return (
    <section id="turmas" aria-labelledby="titulo-turmas" className="bg-white pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 id="titulo-turmas" className="text-4xl font-extrabold md:text-5xl">
            Turmas do Maternal ao 2º ano
          </h2>
          <p className="mt-5 text-lg">
            Crianças de 2 a 8 anos, da educação infantil aos primeiros anos do ensino fundamental, com proposta
            pedagógica baseada na BNCC e aulas no turno da manhã.
          </p>
        </div>

        <ol className="mt-14 flex flex-col gap-3 md:grid md:grid-cols-5 md:items-end md:gap-3">
          {turmas.map((t, i) => {
            const escuro = i >= 3;
            return (
              <li
                key={t.nome}
                style={{ "--degrau": `${9 + i * 3.25}rem`, "--largura": `${62 + i * 9.5}%` } as CSSProperties}
                className={`flex w-[var(--largura)] flex-col justify-end rounded-2xl p-5 md:h-[var(--degrau)] md:w-auto ${tons[i]} ${
                  escuro ? "text-white" : "text-noite"
                }`}
              >
                <span className={`text-sm font-bold ${escuro ? "text-white/85" : "text-azul"}`}>{t.etapa}</span>
                <span className="mt-1 font-display text-2xl leading-tight font-extrabold md:text-3xl">{t.nome}</span>
                <span className="text-base">{t.idade}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
