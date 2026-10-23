import Image from "next/image";
import logo from "@/assets/marca/logo-ime.png";
import { site } from "@/content/site";

export function Rodape() {
  return (
    <footer className="no-escuro bg-noite pb-28 text-white md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-4">
          <span className="rounded-2xl bg-white p-2">
            <Image src={logo} alt="" width={56} height={44} className="h-11 w-auto" />
          </span>
          <p className="text-base">
            <strong className="font-display text-lg">{site.nome}</strong>
            <br />
            Educação infantil e ensino fundamental em {site.endereco.cidade} – PA
          </p>
        </div>
        <p className="text-base text-white/80">
          © {site.anoMatricula} {site.nome}
        </p>
      </div>
    </footer>
  );
}
