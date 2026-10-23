# Site do Instituto Mundo da Educação (IME)

Landing page de matrículas. Next.js 16 (App Router, páginas pré-renderizadas) + React 19 + Tailwind CSS 4.

## Comandos

```bash
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run assets   # regenera fotos/logos otimizados a partir de /assets
```

## Onde mexer

- `src/content/site.ts`: todos os dados da escola (textos, telefones, valores, FAQ). Itens marcados com `VALIDAR` precisam de confirmação.
- `scripts/prepare-assets.mjs`: lista `FOTOS` com as fotos usadas no site. Troque o arquivo de origem e rode `npm run assets`.
- `src/components/Inclusao.tsx`: constante `SIMBOLO` alterna o fundo entre `"infinito"` e `"quebra-cabeca"`.

A pasta `/assets` guarda os originais e não é publicada.
