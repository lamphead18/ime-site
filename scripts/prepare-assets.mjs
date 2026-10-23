// Gera versões web das fotos e logos a partir da pasta /assets (originais intactos).
// Uso: npm run assets
// Para trocar uma foto, edite FOTOS abaixo e rode o comando de novo.
import sharp from "sharp";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets");
const OUT_FOTOS = path.join(ROOT, "src/assets/fotos");
const OUT_MARCA = path.join(ROOT, "src/assets/marca");
const OUT_APP = path.join(ROOT, "src/app");

// slug -> arquivo original. O slug é o nome usado nos imports em src/content.
const FOTOS = {
  "professora-mesa": "WhatsApp Image 2026-07-21 at 19.30.39.jpeg",
  "roda-oracao": "WhatsApp Image 2026-07-21 at 19.30.40 (2).jpeg",
  "pega-crocodilo": "pega crocodilo.jpg.jpeg",
  "quebra-cabeca": "quebra cabeça.jpg.jpeg",
  "horta": "WhatsApp Image 2026-07-21 at 20.02.33.jpeg",
  "horta-turma": "WhatsApp Image 2026-07-21 at 20.02.36 (4).jpeg",
  "sala-escrita": "IMG-20250909-WA0089.jpg.jpeg",
  "sala-vazia": "IMG-20250909-WA0063.jpg.jpeg",
  "brinquedos": "IMG-20250909-WA0095.jpg.jpeg",
  "quadra": "IMG-20250520-WA0060.jpg.jpeg",
  "mural-abc": "IMG-20250520-WA0065.jpg.jpeg",
  "dia-da-agua": "20250321_091713.jpg.jpeg",
  "dia-das-maes": "IMG-20250511-WA0026.jpg.jpeg",
  "formatura": "_S1_6310.jpg.jpeg",
};

const MAX = 1600;

async function fotos() {
  await rm(OUT_FOTOS, { recursive: true, force: true });
  await mkdir(OUT_FOTOS, { recursive: true });
  for (const [slug, file] of Object.entries(FOTOS)) {
    await sharp(path.join(SRC, file))
      .rotate()
      .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(path.join(OUT_FOTOS, `${slug}.jpg`));
    console.log("foto", slug);
  }
}

// Recorta o conteúdo do logo e troca o fundo branco por transparência.
async function logoTransparente(file, out, size) {
  const trimmed = await sharp(path.join(SRC, file))
    .trim({ background: "#ffffff", threshold: 30 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { data, info } = trimmed;
  for (let i = 0; i < data.length; i += 4) {
    const min = Math.min(data[i], data[i + 1], data[i + 2]);
    // suaviza a borda: quase branco vira transparente de forma gradual
    if (min > 215) data[i + 3] = Math.round(((255 - min) / 40) * 255);
  }
  await sharp(data, { raw: info })
    .resize({ width: size, height: size, fit: "inside" })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out);
  console.log("logo", path.basename(out));
}

async function marca() {
  await mkdir(OUT_MARCA, { recursive: true });
  await logoTransparente("Logo IME - GPT.png", path.join(OUT_MARCA, "logo-ime.png"), 480);
  await sharp(path.join(SRC, "Mascote_do_IME-removebg-preview.png"))
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(OUT_MARCA, "mascote.png"));

  // Ícones do navegador (Next lê icon.png e apple-icon.png de src/app)
  const circle = Buffer.from(
    '<svg width="512" height="512"><circle cx="256" cy="256" r="256" fill="#fff"/></svg>',
  );
  const mark = await sharp(path.join(OUT_MARCA, "logo-ime.png"))
    .resize(400, 400, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const icon = await sharp(circle).composite([{ input: mark, gravity: "center" }]).png().toBuffer();
  await sharp(icon).resize(512, 512).png({ palette: true }).toFile(path.join(OUT_APP, "icon.png"));
  await sharp(icon).resize(180, 180).flatten({ background: "#ffffff" }).toFile(path.join(OUT_APP, "apple-icon.png"));

  // Imagem de compartilhamento (WhatsApp, Facebook, Google)
  await sharp(path.join(SRC, FOTOS["professora-mesa"]))
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT_APP, "opengraph-image.jpg"));
  console.log("ícones e og-image");
}

await fotos();
await marca();
