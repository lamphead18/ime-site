import Image from "next/image";
import fotoHorta from "@/assets/fotos/horta.jpg";
import fotoSala from "@/assets/fotos/sala-escrita.jpg";
import { disciplinas, programas } from "@/content/site";

const marcadores = ["bg-azul", "bg-laranja", "bg-noite"];

export function Aprendizado() {
  return (
    <section id="aprendizado" aria-labelledby="titulo-aprendizado" className="bg-ceu py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="titulo-aprendizado" className="text-4xl font-extrabold md:text-5xl">
              Aprender brincando, com teoria e prática
            </h2>
            <p className="mt-5 text-lg">
              Nossa proposta pedagógica segue a BNCC e valoriza a criatividade das crianças por meio do ensino lúdico.
              Formamos cidadãos preparados para a vida.
            </p>
            <h3 className="mt-8 text-xl font-bold">Disciplinas do currículo</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-lg">
              {disciplinas.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="size-2 rotate-45 bg-laranja" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-[1.4fr_1fr] gap-4">
            <Image
              src={fotoSala}
              alt="Alunos uniformizados escrevendo nos cadernos em sala de aula decorada com a frase Bem-vindo"
              className="aspect-[3/4] h-full w-full rounded-3xl object-cover"
              sizes="(min-width: 1024px) 340px, 58vw"
              placeholder="blur"
            />
            <Image
              src={fotoHorta}
              alt="Professora e crianças observando a horta da escola"
              className="aspect-[3/5] w-full self-end rounded-3xl object-cover"
              sizes="(min-width: 1024px) 240px, 40vw"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
          {programas.map((p, i) => (
            <article key={p.titulo} className="rounded-3xl bg-white p-7">
              <span className={`block h-1.5 w-12 rounded-full ${marcadores[i]}`} aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold">{p.titulo}</h3>
              <p className="mt-2 text-base">{p.texto}</p>
              <ul className="mt-5 space-y-1.5 border-t border-noite/10 pt-5 text-base">
                {p.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
