import Image from "next/image";
import mascote from "@/assets/marca/mascote.png";
import { mensagens, site, valores, whatsapp } from "@/content/site";
import { Bandeirola } from "./Bandeirola";
import { Botao } from "./Botao";
import { WhatsAppIcon } from "./icons";

const passos = [
  { titulo: "Chame no WhatsApp", texto: "Tire suas dúvidas e conte um pouco sobre seu filho." },
  { titulo: "Visite a escola", texto: "Conheça as salas, a quadra e a área da brincadeira." },
  { titulo: "Faça a matrícula", texto: "Na secretaria, onde você também recebe a lista de material." },
];

export function Matricula() {
  return (
    <section id="matricula" aria-labelledby="titulo-matricula" className="relative bg-laranja/15">
      <Bandeirola />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h2 id="titulo-matricula" className="text-4xl font-extrabold md:text-5xl">
            Matrículas {site.anoMatricula} em três passos
          </h2>

          <ol className="mt-10 space-y-6">
            {passos.map((p, i) => (
              <li key={p.titulo} className="flex gap-5">
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-azul font-display text-2xl font-extrabold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{p.titulo}</h3>
                  <p className="text-lg">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5">
              <dt className="text-base">Matrícula</dt>
              <dd className="font-display text-3xl font-extrabold text-azul">{valores.matricula}</dd>
              <dd className="text-base">Já conta como a primeira mensalidade</dd>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <dt className="text-base">Irmãos na escola</dt>
              <dd className="font-display text-3xl font-extrabold text-azul">{valores.irmaos}</dd>
              <dd className="text-base">Por mês, para cada aluno da mesma família</dd>
            </div>
          </dl>

          <div className="mt-10">
            <Botao href={whatsapp(mensagens.matricula)} externo icone={<WhatsAppIcon className="size-5" />}>
              Começar a matrícula
            </Botao>
          </div>
        </div>

        <Image
          src={mascote}
          alt="Mascote do IME, um livro sorridente de uniforme azul segurando um lápis"
          className="mx-auto w-64 md:w-80"
          sizes="320px"
        />
      </div>
    </section>
  );
}
