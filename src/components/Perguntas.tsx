import { perguntas } from "@/content/site";

// <details> nativo: funciona sem JavaScript, com teclado e leitores de tela.
export function Perguntas() {
  return (
    <section id="duvidas" aria-labelledby="titulo-duvidas" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 id="titulo-duvidas" className="text-4xl font-extrabold md:text-5xl">
          Dúvidas das famílias
        </h2>
        <div className="mt-10 divide-y divide-noite/15 border-y border-noite/15">
          {perguntas.map((p) => (
            <details key={p.pergunta} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-xl font-bold [&::-webkit-details-marker]:hidden">
                <h3 className="font-sans text-xl leading-snug">{p.pergunta}</h3>
                <span
                  className="relative size-6 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-6 before:-translate-y-1/2 before:bg-azul after:absolute after:top-0 after:left-1/2 after:h-6 after:w-0.5 after:-translate-x-1/2 after:bg-azul after:transition-transform group-open:after:scale-y-0"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-[62ch] pb-6 text-lg">{p.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
