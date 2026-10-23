"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/marca/logo-ime.png";
import { mensagens, site, whatsapp } from "@/content/site";
import { Bandeirola } from "./Bandeirola";
import { Botao } from "./Botao";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

const links = [
  { href: "#turmas", texto: "Turmas" },
  { href: "#inclusao", texto: "Inclusão" },
  { href: "#aprendizado", texto: "O que aprendem" },
  { href: "#estrutura", texto: "Estrutura" },
  { href: "#matricula", texto: "Matrícula" },
  { href: "#contato", texto: "Contato" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!aberto) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <header className="sticky top-0 z-40 border-b border-noite/10 bg-white">
      <Bandeirola className="h-2.5!" />
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#inicio" className="flex shrink-0 items-center gap-3">
          <Image src={logo} alt="" width={56} height={44} className="h-11 w-auto" preload />
          <span className="font-display text-lg leading-none font-bold">
            <span className="sr-only">{site.sigla}, </span>
            Instituto Mundo
            <br />
            da Educação
          </span>
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3 py-2 text-base font-bold hover:bg-ceu">
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Botao
            href={whatsapp(mensagens.matricula)}
            externo
            variante="azul"
            icone={<WhatsAppIcon className="size-5" />}
            className="max-sm:hidden"
          >
            Falar no WhatsApp
          </Botao>
          <button
            ref={botaoRef}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full hover:bg-ceu lg:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Seções da página"
        hidden={!aberto}
        className="border-t border-noite/10 bg-white lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAberto(false)}
                className="block rounded-lg px-3 py-3 text-lg font-bold hover:bg-ceu"
              >
                {l.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
