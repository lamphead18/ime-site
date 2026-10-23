import Image, { type StaticImageData } from "next/image";
import fotoAgua from "@/assets/fotos/dia-da-agua.jpg";
import fotoMaes from "@/assets/fotos/dia-das-maes.jpg";
import fotoBrinquedos from "@/assets/fotos/brinquedos.jpg";
import fotoFormatura from "@/assets/fotos/formatura.jpg";
import fotoQuadra from "@/assets/fotos/quadra.jpg";
import fotoSala from "@/assets/fotos/sala-vazia.jpg";
import { estrutura, eventos } from "@/content/site";
import { CheckIcon } from "./icons";

type Foto = { src: StaticImageData; alt: string; legenda: string };

const espacos: Foto[] = [
  { src: fotoSala, alt: "Sala de aula climatizada com carteiras azuis e paredes decoradas", legenda: "Sala climatizada" },
  { src: fotoBrinquedos, alt: "Escorregadores coloridos na área coberta da escola", legenda: "Área da brincadeira" },
  { src: fotoQuadra, alt: "Quadra esportiva com piso pintado e tabela de basquete", legenda: "Quadra esportiva" },
];

const datas: Foto[] = [
  { src: fotoAgua, alt: "Criança carimbando a mão azul em um cartaz do Dia Mundial da Água", legenda: "Dia Mundial da Água" },
  { src: fotoMaes, alt: "Mãe e filha no painel decorado com balões do Dia das Mães", legenda: "Dia das Mães" },
  { src: fotoFormatura, alt: "Palco decorado da formatura com letras ABC gigantes", legenda: "Formatura do ABC" },
];

export function Estrutura() {
  return (
    <section id="estrutura" aria-labelledby="titulo-estrutura" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="titulo-estrutura" className="text-4xl font-extrabold md:text-5xl">
              Venha conhecer nossa escola
            </h2>
            <p className="mt-5 text-lg">Um espaço pensado para a rotina de crianças pequenas, seguro e acolhedor.</p>
            <ul className="mt-8 space-y-3 text-lg">
              {estrutura.map((e) => (
                <li key={e} className="flex gap-3">
                  <CheckIcon className="mt-1 size-5 shrink-0 text-azul" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {espacos.map((f, i) => (
              <li key={f.legenda} className={i === 0 ? "col-span-2" : ""}>
                <figure>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    className={`w-full rounded-3xl object-cover ${i === 0 ? "aspect-[16/9]" : "aspect-square"}`}
                    sizes={i === 0 ? "(min-width: 1024px) 660px, 100vw" : "(min-width: 1024px) 320px, 50vw"}
                    placeholder="blur"
                  />
                  <figcaption className="mt-2 text-base font-bold">{f.legenda}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-extrabold md:text-4xl">Datas que a turma espera o ano todo</h3>
          <p className="mt-4 max-w-2xl text-lg">
            {eventos.slice(0, -1).join(", ")} e {eventos.at(-1)}: momentos que aproximam a família da escola.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {datas.map((f) => (
              <li key={f.legenda}>
                <figure>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    className="aspect-[4/3] w-full rounded-3xl object-cover sm:aspect-[4/5]"
                    sizes="(min-width: 1152px) 360px, (min-width: 640px) 33vw, 100vw"
                    placeholder="blur"
                  />
                  <figcaption className="mt-3 font-display text-xl font-bold">{f.legenda}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
