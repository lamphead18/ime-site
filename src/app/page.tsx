import { Aprendizado } from "@/components/Aprendizado";
import { BarraWhatsApp } from "@/components/BarraWhatsApp";
import { Contato } from "@/components/Contato";
import { Estrutura } from "@/components/Estrutura";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Inclusao } from "@/components/Inclusao";
import { Matricula } from "@/components/Matricula";
import { Perguntas } from "@/components/Perguntas";
import { Rodape } from "@/components/Rodape";
import { Turmas } from "@/components/Turmas";
import { perguntas, site } from "@/content/site";

// Dados estruturados: ajudam o Google a mostrar endereço, telefone e perguntas frequentes nos resultados.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Preschool", "ElementarySchool"],
      "@id": `${site.url}/#escola`,
      name: site.nome,
      alternateName: site.sigla,
      description: site.descricao,
      url: site.url,
      logo: `${site.url}/icon.png`,
      image: `${site.url}/opengraph-image.jpg`,
      telephone: site.telefones.map((t) => t.e164),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.endereco.rua,
        addressLocality: site.endereco.cidade,
        addressRegion: site.endereco.uf,
        addressCountry: site.endereco.pais,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: site.horario.entrada,
        closes: site.horario.saida,
      },
      sameAs: [site.instagram.url],
    },
    {
      "@type": "FAQPage",
      mainEntity: perguntas.map((p) => ({
        "@type": "Question",
        name: p.pergunta,
        acceptedAnswer: { "@type": "Answer", text: p.resposta },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-azul px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Turmas />
        <Inclusao />
        <Aprendizado />
        <Estrutura />
        <Matricula />
        <Perguntas />
        <Contato />
      </main>
      <Rodape />
      <BarraWhatsApp />
    </>
  );
}
