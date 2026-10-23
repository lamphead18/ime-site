import { mensagens, whatsapp } from "@/content/site";
import { WhatsAppIcon } from "./icons";

// No celular, o contato fica sempre a um toque de distância.
export function BarraWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-noite/10 bg-white p-3 md:hidden">
      <a
        href={whatsapp(mensagens.matricula)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-azul px-6 py-3 text-base font-bold text-white"
      >
        <WhatsAppIcon className="size-5" />
        Falar com a escola no WhatsApp
        <span className="sr-only">(abre em nova aba)</span>
      </a>
    </div>
  );
}
