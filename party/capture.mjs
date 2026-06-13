import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, 'fonts');

const W = 1013;
const H = 638;
const SCALE = 3;

const resvgOpts = {
  fitTo: { mode: 'width', value: W * SCALE },
  font: {
    fontFiles: [
      path.join(fontsDir, 'Inter-Regular.ttf'),
      path.join(fontsDir, 'Inter-Medium.ttf'),
      path.join(fontsDir, 'Inter-SemiBold.ttf'),
      path.join(fontsDir, 'Inter-Bold.ttf'),
      path.join(fontsDir, 'Inter-ExtraBold.ttf'),
    ],
    loadSystemFonts: false,
    defaultFontFamily: 'Inter',
  },
};

// Generate noise texture as tiny SVG rects for plastic card feel
function plasticTexture(opacity = 0.03) {
  let rects = '';
  // Sparse random-ish dots for subtle grain
  for (let i = 0; i < 600; i++) {
    const x = (i * 137 + 29) % W;
    const y = (i * 97 + 13) % H;
    const s = 1 + (i % 3);
    const o = 0.02 + (i % 5) * 0.008;
    rects += `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="#000" opacity="${o}"/>`;
  }
  return `<g opacity="${opacity}">${rects}</g>`;
}

// ============================================================
// CARD 1 — NFB
// Real card: white/silver background, NOT grey
// ============================================================
function buildNFBCard(name, personnummer) {
  const cx = W * 0.50;
  const cy = H * 0.55;
  const R = 220;
  const compassRose = `
    <g transform="translate(${cx}, ${cy})" opacity="0.10">
      <circle cx="0" cy="0" r="${R}" fill="none" stroke="#555" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="${R-8}" fill="none" stroke="#555" stroke-width="0.7"/>
      <polygon points="0,${-R+5} 10,-25 0,-60 -10,-25" fill="#555"/>
      <polygon points="0,${R-5} 10,25 0,60 -10,25" fill="#555"/>
      <polygon points="${-R+5},0 -25,-10 -60,0 -25,10" fill="#555"/>
      <polygon points="${R-5},0 25,-10 60,0 25,10" fill="#555"/>
      <polygon points="150,-150 28,-14 42,-38 16,-16" fill="#555" opacity="0.55"/>
      <polygon points="-150,-150 -28,-14 -42,-38 -16,-16" fill="#555" opacity="0.55"/>
      <polygon points="150,150 28,14 42,38 16,16" fill="#555" opacity="0.55"/>
      <polygon points="-150,150 -28,14 -42,38 -16,16" fill="#555" opacity="0.55"/>
      <polygon points="75,${-R+10} 8,-22 0,-32 -3,-20" fill="#555" opacity="0.3"/>
      <polygon points="-75,${-R+10} -8,-22 0,-32 3,-20" fill="#555" opacity="0.3"/>
      <polygon points="${R-10},-75 22,-8 32,0 20,3" fill="#555" opacity="0.3"/>
      <polygon points="${R-10},75 22,8 32,0 20,-3" fill="#555" opacity="0.3"/>
      <polygon points="75,${R-10} 8,22 0,32 -3,20" fill="#555" opacity="0.3"/>
      <polygon points="-75,${R-10} -8,22 0,32 3,20" fill="#555" opacity="0.3"/>
      <polygon points="${-R+10},-75 -22,-8 -32,0 -20,3" fill="#555" opacity="0.3"/>
      <polygon points="${-R+10},75 -22,8 -32,0 -20,-3" fill="#555" opacity="0.3"/>
      <circle cx="0" cy="0" r="20" fill="none" stroke="#555" stroke-width="2"/>
      <circle cx="0" cy="0" r="7" fill="#555"/>
    </g>`;

  const leftCerts = [
    ['Förarintyg', '2015-02-01'],
    ['Båtpraktik Dag', '2017-05-15'],
    ['Kustskepparintyg', '2017-05-31'],
    ['Båtpraktik Mörker', '***'],
    ['Båtmekanikerintyg', '***'],
    ['Utsjöskepparintyg', '***'],
    ['Kanalintyg', '***'],
  ];
  const rightCerts = [
    ['Radarintyg', '***'],
    ['Manöverintyg högfart', '***'],
    ['Seglarintyg 1', '2019-06-15'],
    ['Seglarintyg 2', '***'],
    ['Seglarintyg 3', '***'],
    ['SRC', '2020-10-30'],
    ['LRC', '***'],
  ];

  const certStartY = 310;
  const certLineH = 34;
  const lNameX = 32;
  const lDateX = 295;
  const rNameX = 440;
  const rDateX = 985;

  let certs = '';
  for (let i = 0; i < leftCerts.length; i++) {
    const y = certStartY + i * certLineH;
    certs += `
      <text x="${lNameX}" y="${y}" font-size="15" font-weight="700" font-family="Inter" fill="#1a1a2e">${leftCerts[i][0]}</text>
      <text x="${lDateX}" y="${y}" font-size="15" font-weight="400" font-family="Inter" fill="#1a1a2e" text-anchor="end">${leftCerts[i][1]}</text>
      <text x="${rNameX}" y="${y}" font-size="15" font-weight="700" font-family="Inter" fill="#1a1a2e">${rightCerts[i][0]}</text>
      <text x="${rDateX}" y="${y}" font-size="15" font-weight="400" font-family="Inter" fill="#1a1a2e" text-anchor="end">${rightCerts[i][1]}</text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="nfbBg" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0%" stop-color="#efefef"/>
      <stop offset="25%" stop-color="#e8e8e8"/>
      <stop offset="50%" stop-color="#ededed"/>
      <stop offset="75%" stop-color="#e6e6e6"/>
      <stop offset="100%" stop-color="#eaeaea"/>
    </linearGradient>
    <clipPath id="nfbClip"><rect width="${W}" height="${H}" rx="8"/></clipPath>
  </defs>

  <!-- Light white/silver background -->
  <rect width="${W}" height="${H}" rx="8" fill="url(#nfbBg)"/>

  <!-- Plastic texture grain -->
  <g clip-path="url(#nfbClip)">
    ${plasticTexture(0.04)}
  </g>

  ${compassRose}

  <!-- EU flag box -->
  <rect x="25" y="18" width="40" height="30" rx="2" fill="#003399"/>
  <circle cx="45" cy="33" r="10" fill="none" stroke="rgba(255,204,0,0.25)" stroke-width="0.8"/>
  <text x="45" y="38" text-anchor="middle" font-size="16" font-weight="800" font-family="Inter" fill="#fff">S</text>

  <!-- Org name -->
  <text x="75" y="33" font-size="16" font-weight="800" font-family="Inter" fill="#1a1a2e">Nämnden för båtlivsutbildning, NFB</text>
  <text x="75" y="48" font-size="11.5" font-weight="400" font-family="Inter" fill="#333">Intyg nautisk kompetens för fritidsbåtar</text>

  <!-- Name centered -->
  <text x="${W/2}" y="120" text-anchor="middle" font-size="30" font-weight="700" font-family="Inter" fill="#1a1a2e">${name}</text>
  <text x="${W/2}" y="152" text-anchor="middle" font-size="22" font-weight="600" font-family="Inter" fill="#1a1a2e">${personnummer}</text>

  ${certs}

</svg>`;
}

// ============================================================
// CARD 2 — Transportstyrelsen
// Real card: PURE WHITE bg, bright/clean blue waves
// ============================================================
function buildTSCard(name, personnummer) {
  // Brighter, cleaner blue waves — the real card has vivid light blue swooshes
  const waves = `
    <g clip-path="url(#tsClip)">
      <!-- Faintest high wave -->
      <path d="M-20,470 Q100,440 220,468 Q340,496 460,458 Q580,420 700,460 Q820,500 940,468 L1013,455 L1013,638 L0,638 Z" fill="#d4eaf7" opacity="0.7"/>
      <!-- Light blue mid -->
      <path d="M-20,505 Q90,470 210,502 Q330,534 450,495 Q570,456 690,498 Q810,540 930,505 L1013,490 L1013,638 L0,638 Z" fill="#a8d4ef" opacity="0.7"/>
      <!-- Medium blue -->
      <path d="M-20,535 Q120,505 260,538 Q400,571 520,530 Q640,489 760,532 Q880,575 1013,540 L1013,638 L0,638 Z" fill="#7bbde2" opacity="0.75"/>
      <!-- Deeper blue -->
      <path d="M-20,565 Q100,540 240,570 Q380,600 500,558 Q620,516 750,560 Q880,604 1013,572 L1013,638 L0,638 Z" fill="#5aa5d4" opacity="0.8"/>
      <!-- Boldest front wave -->
      <path d="M-20,590 Q130,570 280,598 Q430,626 560,590 Q690,554 830,594 Q950,626 1013,605 L1013,638 L0,638 Z" fill="#4090c0" opacity="0.85"/>
    </g>`;

  const logoX = 710;
  const logoY = 35;
  const logo = `
    <g transform="translate(${logoX}, ${logoY})">
      <polygon points="0,5 0,85 70,45" fill="#003d7a"/>
      <polygon points="30,15 30,75 85,45" fill="#0060aa"/>
      <polygon points="60,25 60,65 100,45" fill="#003d7a" opacity="0.75"/>
      <text x="50" y="108" text-anchor="middle" font-size="17" font-weight="700" font-family="Inter" fill="#555" letter-spacing="2.5">TRANSPORT</text>
      <text x="50" y="128" text-anchor="middle" font-size="17" font-weight="700" font-family="Inter" fill="#555" letter-spacing="2.5">STYRELSEN</text>
    </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <clipPath id="tsClip"><rect width="${W}" height="${H}" rx="8"/></clipPath>
  </defs>

  <!-- Pure white background -->
  <rect width="${W}" height="${H}" rx="8" fill="#fafafa"/>

  <!-- Subtle plastic texture -->
  <g clip-path="url(#tsClip)">
    ${plasticTexture(0.02)}
  </g>

  ${waves}

  <!-- Title -->
  <text x="35" y="58" font-size="30" font-weight="800" font-family="Inter" fill="#1a1a2e">Förarbevis för vattenskoter</text>

  ${logo}

  <!-- Namn -->
  <text x="35" y="130" font-size="14" font-weight="400" font-family="Inter" fill="#555">Namn</text>
  <text x="35" y="160" font-size="26" font-weight="500" font-family="Inter" fill="#1a1a2e">${name}</text>

  <!-- Personnummer -->
  <text x="35" y="215" font-size="14" font-weight="400" font-family="Inter" fill="#555">Personnummer</text>
  <text x="35" y="248" font-size="26" font-weight="700" font-family="Inter" fill="#1a1a2e">${personnummer}</text>

  <!-- Kort utfärdat -->
  <text x="35" y="305" font-size="14" font-weight="400" font-family="Inter" fill="#555">Kort utfärdat</text>
  <text x="35" y="338" font-size="26" font-weight="700" font-family="Inter" fill="#1a1a2e">2025-06-09</text>

</svg>`;
}

async function renderCard(svg, baseName) {
  const resvg = new Resvg(svg, resvgOpts);
  const pngBuf = resvg.render().asPng();
  fs.writeFileSync(path.join(__dirname, `${baseName}.png`), pngBuf);
  await sharp(pngBuf).jpeg({ quality: 95 }).toFile(path.join(__dirname, `${baseName}.jpg`));
  console.log(`  ${baseName} — png + jpg`);
}

async function main() {
  const name = 'Carl Michel Rayes';
  const pnr = '19740617-4099';

  console.log('Card 1 — NFB...');
  await renderCard(buildNFBCard(name, pnr), 'carl-michel-rayes-license-1');

  console.log('Card 2 — Transportstyrelsen...');
  await renderCard(buildTSCard(name, pnr), 'carl-michel-rayes-license-2');

  console.log('\nDone!');
}

main().catch(console.error);
