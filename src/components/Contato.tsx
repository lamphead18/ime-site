import { mapaEmbed, mapaUrl, mensagens, site, whatsapp } from "@/content/site";
import { Botao } from "./Botao";
import { ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./icons";

export function Contato() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="bg-ceu py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <h2 id="titulo-contato" className="text-4xl font-extrabold md:text-5xl">
            Fale com a gente
          </h2>
          <address className="mt-8 space-y-6 text-lg not-italic">
            <p className="flex gap-3">
              <PinIcon className="mt-1 size-6 shrink-0 text-azul" />
              <span>
                {site.endereco.rua}
                <br />
                {site.endereco.cidade} – Pará
                <br />
                <a href={mapaUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-azul underline underline-offset-4">
                  Ver rotas no mapa<span className="sr-only"> (abre em nova aba)</span>
                </a>
              </span>
            </p>
            <p className="flex gap-3">
              <ClockIcon className="mt-1 size-6 shrink-0 text-azul" />
              <span>Atendimento e aulas das {site.horario.texto}, de segunda a sexta</span>
            </p>
            <div className="flex gap-3">
              <WhatsAppIcon className="mt-1 size-6 shrink-0 text-azul" />
              <ul>
                {site.telefones.map((t) => (
                  <li key={t.e164}>
                    <a href={`https://wa.me/${t.e164.replace("+", "")}`} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                      {t.exibir}
                      <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex gap-3">
              <InstagramIcon className="mt-1 size-6 shrink-0 text-azul" />
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                {site.instagram.usuario}
                <span className="sr-only"> no Instagram (abre em nova aba)</span>
              </a>
            </p>
          </address>
          <div className="mt-10">
            <Botao href={whatsapp(mensagens.visita)} externo icone={<WhatsAppIcon className="size-5" />}>
              Agendar uma visita
            </Botao>
          </div>
        </div>

        <iframe
          src={mapaEmbed}
          title={`Mapa com a localização do ${site.nome}`}
          className="aspect-[4/3] w-full rounded-3xl border-0 bg-white lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
