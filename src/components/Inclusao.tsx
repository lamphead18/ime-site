import Image from "next/image";
import fotoFoco from "@/assets/fotos/pega-crocodilo.jpg";
import { inclusao, mensagens, whatsapp } from "@/content/site";
import { Botao } from "./Botao";
import { WhatsAppIcon } from "./icons";
import { INFINITO_PATH, SimboloFundo, type Simbolo } from "./SimboloFundo";

// Troque para "quebra-cabeca" se a escola preferir o símbolo dos folders.
const SIMBOLO: Simbolo = "infinito";

export function Inclusao() {
  return (
    <section
      id="inclusao"
      aria-labelledby="titulo-inclusao"
      className="no-escuro relative isolate overflow-hidden bg-noite py-20 text-white md:py-32"
    >
      <SimboloFundo simbolo={SIMBOLO} />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        <div>
          <svg viewBox="8 30 84 40" className="h-14 w-auto md:h-20" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="grad-infinito" x1="0" x2="1">
                <stop offset="0" stopColor="var(--color-azul-claro)" />
                <stop offset="1" stopColor="var(--color-laranja)" />
              </linearGradient>
            </defs>
            <path
              d={INFINITO_PATH}
              pathLength={1}
              fill="none"
              stroke="url(#grad-infinito)"
              strokeWidth={5}
              strokeLinecap="round"
              className="desenhar-infinito"
            />
          </svg>

          <h2 id="titulo-inclusao" className="mt-6 text-4xl font-extrabold md:text-6xl">
            Experiência com crianças neurodivergentes
          </h2>
          <p className="mt-6 max-w-xl text-xl text-white/90">
            Autismo (TEA), TDAH, TDA e outras formas de aprender têm lugar aqui. Seu filho estuda em turma regular, com
            professores que já conhecem esse caminho e uma escola que conversa com a família.
          </p>

          <ul className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {inclusao.map((item) => (
              <li key={item.titulo} className="border-l-4 border-laranja pl-4">
                <h3 className="font-display text-2xl font-bold">{item.titulo}</h3>
                <p className="mt-1 text-base text-white/85">{item.texto}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Botao href={whatsapp(mensagens.inclusao)} externo variante="laranja" icone={<WhatsAppIcon className="size-5" />}>
              Conversar sobre meu filho
            </Botao>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={fotoFoco}
            alt="Duas crianças concentradas em um jogo de pescaria com varetas sobre a mesa"
            className="aspect-square w-full rounded-[2.5rem] rounded-tl-[7rem] object-cover sm:aspect-[4/5]"
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 448px, 100vw"
            placeholder="blur"
          />
          <figcaption className="mt-4 text-base text-white/80">
            Jogos de encaixe e coordenação fazem parte da rotina de todas as turmas.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
