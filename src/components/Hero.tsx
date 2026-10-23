import Image from "next/image";
import fotoHero from "@/assets/fotos/professora-mesa.jpg";
import { mapaUrl, mensagens, site, whatsapp } from "@/content/site";
import { Botao } from "./Botao";
import { ClockIcon, PinIcon, WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-hero" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-20 md:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <p className="inline-block -rotate-2 rounded-md bg-laranja px-3 py-1 font-display text-lg font-bold text-noite">
            Matrículas abertas {site.anoMatricula}
          </p>
          <h1 id="titulo-hero" className="mt-6 text-[2.6rem] font-extrabold text-azul sm:text-5xl lg:text-[4.1rem]">
            Escola infantil em Ananindeua que acolhe cada jeito de aprender
          </h1>
          <p className="mt-6 max-w-[34rem] text-xl">
            Do Maternal ao 2º ano do ensino fundamental, com inglês em todas as turmas, educação ambiental e experiência
            com crianças com TEA, TDAH e TDA.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Botao href={whatsapp(mensagens.matricula)} externo icone={<WhatsAppIcon className="size-5" />}>
              Quero matricular meu filho
            </Botao>
            <Botao href={whatsapp(mensagens.visita)} externo variante="contorno">
              Agendar uma visita
            </Botao>
          </div>

          <ul className="mt-10 space-y-2 text-base">
            <li className="flex items-center gap-2.5">
              <ClockIcon className="size-5 shrink-0 text-laranja-texto" />
              Turno da manhã, das {site.horario.texto}
            </li>
            <li className="flex items-center gap-2.5">
              <PinIcon className="size-5 shrink-0 text-laranja-texto" />
              <a href={mapaUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                {site.endereco.rua}, {site.endereco.cidade} – {site.endereco.uf}
                <span className="sr-only"> (abre o mapa em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* bloco azul deslocado atrás da foto, eco das faixas do logo */}
          <div className="absolute -right-3 -bottom-3 h-full w-full rounded-[2rem] bg-azul md:-right-6 md:-bottom-6" aria-hidden="true" />
          <div className="absolute -top-3 -left-3 h-20 w-20 rounded-2xl bg-laranja md:-top-7 md:-left-7 md:h-24 md:w-24" aria-hidden="true" />
          <Image
            src={fotoHero}
            alt="Professora sentada à mesa com sete crianças uniformizadas em uma sala de aula clara"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover"
            sizes="(min-width: 1024px) 540px, (min-width: 640px) 576px, 100vw"
            placeholder="blur"
            preload
          />
        </div>
      </div>
    </section>
  );
}
