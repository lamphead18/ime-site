"use client";

import { useState } from "react";
import { etapas, idadesAtendidas, mensagemVaga, whatsapp } from "@/content/site";
import { Botao } from "./Botao";
import { WhatsAppIcon } from "./icons";

const faixas = ["bg-laranja", "bg-azul"];

// O conteúdo é renderizado no servidor (SEO); o seletor de idade só realça a turma correspondente.
export function Turmas() {
  const [idade, setIdade] = useState<number | null>(null);
  const indicada = etapas.flatMap((e) => e.turmas).find((t) => idade !== null && t.idades.includes(idade));

  return (
    <section id="turmas" aria-labelledby="titulo-turmas" className="bg-white pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-2xl">
            <h2 id="titulo-turmas" className="text-4xl font-extrabold md:text-5xl">
              Turmas do Maternal ao 2º ano
            </h2>
            <p className="mt-5 text-lg">
              Crianças de 2 a 8 anos, da educação infantil aos primeiros anos do ensino fundamental, com proposta
              pedagógica baseada na BNCC e aulas no turno da manhã.
            </p>
          </div>

          <fieldset>
            <legend className="font-display text-xl font-bold">Qual a turma do meu filho?</legend>
            <p className="text-base">Toque na idade da criança.</p>
            <div className="mt-3 grid grid-cols-7 gap-1.5 sm:flex sm:gap-2">
              {idadesAtendidas.map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={idade === n}
                  onClick={() => setIdade(idade === n ? null : n)}
                  className="h-12 w-full rounded-full border-2 border-azul font-display text-xl font-bold text-azul transition-colors duration-150 hover:bg-ceu aria-pressed:bg-azul aria-pressed:text-white sm:w-12"
                >
                  {n}
                  <span className="sr-only"> anos</span>
                </button>
              ))}
            </div>

            {/* Mudança causada pelo toque do usuário: não conta como CLS, então não reservamos espaço */}
            <div aria-live="polite">
              {indicada && (
                <div className="mt-4 flex flex-col items-start gap-3">
                  <p className="text-lg">
                    Com {idade} anos, a turma é o <strong>{indicada.nome}</strong>.
                  </p>
                  <Botao
                    href={whatsapp(mensagemVaga(indicada.nome))}
                    externo
                    variante="laranja"
                    icone={<WhatsAppIcon className="size-5" />}
                  >
                    Perguntar sobre vagas no {indicada.nome}
                  </Botao>
                </div>
              )}
            </div>
          </fieldset>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[3fr_2fr]">
          {etapas.map((etapa, i) => (
            <div key={etapa.nome} className="overflow-hidden rounded-3xl bg-ceu">
              <div className={`h-2 ${faixas[i]}`} aria-hidden="true" />
              <h3 className="px-6 pt-5 pb-1 font-sans text-lg font-bold">{etapa.nome}</h3>
              <div className="p-2">
                <ul className={`grid gap-2 ${etapa.turmas.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {etapa.turmas.map((t) => {
                    const ativa = indicada?.nome === t.nome;
                    return (
                      <li
                        key={t.nome}
                        className={`rounded-2xl p-4 transition-colors duration-150 ${
                          ativa ? "bg-white ring-3 ring-azul" : ""
                        }`}
                      >
                        <p className="text-base font-bold text-laranja-texto">{t.idade}</p>
                        <p className="font-display text-3xl leading-tight font-extrabold text-azul">{t.nome}</p>
                        <p className="mt-2 text-base">{t.foco}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
