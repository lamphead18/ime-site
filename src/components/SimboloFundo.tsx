// Padrão de fundo da seção de inclusão.
// "infinito": símbolo da neurodiversidade, preferido por boa parte da comunidade autista.
// "quebra-cabeca": peça do laço de conscientização que a escola usa nos folders.
export type Simbolo = "infinito" | "quebra-cabeca";

export const INFINITO_PATH =
  "M50 50 C62 36, 88 36, 88 50 C88 64, 62 64, 50 50 C38 36, 12 36, 12 50 C12 64, 38 64, 50 50 Z";

const PECA_PATH =
  "M0 0 h15 a5 5 0 1 1 10 0 h15 v15 a5 5 0 1 1 0 10 v15 h-15 a5 5 0 1 0 -10 0 h-15 v-15 a5 5 0 1 0 0 -10 Z";

export function SimboloFundo({ simbolo = "infinito" }: { simbolo?: Simbolo }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        {simbolo === "infinito" ? (
          <pattern id="fundo-simbolo" width="180" height="120" patternUnits="userSpaceOnUse">
            <g fill="none" strokeWidth="2.5" strokeLinejoin="round">
              <path d={INFINITO_PATH} stroke="var(--color-azul-claro)" opacity="0.22" />
              <path
                d={INFINITO_PATH}
                stroke="var(--color-laranja)"
                opacity="0.2"
                transform="translate(90 60) rotate(-18 50 50) scale(0.7)"
              />
            </g>
          </pattern>
        ) : (
          <pattern id="fundo-simbolo" width="140" height="140" patternUnits="userSpaceOnUse">
            <g fill="none" strokeWidth="2" strokeLinejoin="round">
              <path d={PECA_PATH} stroke="var(--color-azul-claro)" opacity="0.22" transform="translate(20 25)" />
              <path
                d={PECA_PATH}
                stroke="var(--color-laranja)"
                opacity="0.2"
                transform="translate(95 85) rotate(20 20 20) scale(0.75)"
              />
            </g>
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill="url(#fundo-simbolo)" />
    </svg>
  );
}
