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

// ============================================================
// CARD 1 — NFB (Nämnden för båtlivsutbildning) — real text
// ============================================================
function buildNFBCard(name, personnummer) {
  const cx = W * 0.52;
  const cy = H * 0.58;
  const compassRose = `
    <g transform="translate(${cx}, ${cy})" opacity="0.07">
      <circle cx="0" cy="0" r="165" fill="none" stroke="#222" stroke-width="1.2"/>
      <circle cx="0" cy="0" r="158" fill="none" stroke="#222" stroke-width="0.6"/>
      <polygon points="0,-155 8,-20 0,-50 -8,-20" fill="#222"/>
      <polygon points="0,155 8,20 0,50 -8,20" fill="#222"/>
      <polygon points="-155,0 -20,-8 -50,0 -20,8" fill="#222"/>
      <polygon points="155,0 20,-8 50,0 20,8" fill="#222"/>
      <polygon points="110,-110 22,-10 35,-30 12,-12" fill="#222" opacity="0.5"/>
      <polygon points="-110,-110 -22,-10 -35,-30 -12,-12" fill="#222" opacity="0.5"/>
      <polygon points="110,110 22,10 35,30 12,12" fill="#222" opacity="0.5"/>
      <polygon points="-110,110 -22,10 -35,30 -12,12" fill="#222" opacity="0.5"/>
      <polygon points="55,-145 6,-18 0,-25 -2,-16" fill="#222" opacity="0.25"/>
      <polygon points="-55,-145 -6,-18 0,-25 2,-16" fill="#222" opacity="0.25"/>
      <polygon points="145,-55 18,-6 25,0 16,2" fill="#222" opacity="0.25"/>
      <polygon points="145,55 18,6 25,0 16,-2" fill="#222" opacity="0.25"/>
      <polygon points="55,145 6,18 0,25 -2,16" fill="#222" opacity="0.25"/>
      <polygon points="-55,145 -6,18 0,25 2,16" fill="#222" opacity="0.25"/>
      <polygon points="-145,-55 -18,-6 -25,0 -16,2" fill="#222" opacity="0.25"/>
      <polygon points="-145,55 -18,6 -25,0 -16,-2" fill="#222" opacity="0.25"/>
      <circle cx="0" cy="0" r="16" fill="none" stroke="#222" stroke-width="1.8"/>
      <circle cx="0" cy="0" r="6" fill="#222"/>
    </g>`;

  // Real NFB certification names from the actual card
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

  const certStartY = 365;
  const certLineH = 37;
  const lNameX = 38;
  const lDateX = 330;
  const rNameX = 480;
  const rDateX = 975;

  let certs = '';
  for (let i = 0; i < leftCerts.length; i++) {
    const y = certStartY + i * certLineH;
    certs += `
      <text x="${lNameX}" y="${y}" font-size="15.5" font-weight="700" font-family="Inter" fill="#1a1a2e">${leftCerts[i][0]}</text>
      <text x="${lDateX}" y="${y}" font-size="15.5" font-weight="400" font-family="Inter" fill="#222" text-anchor="end">${leftCerts[i][1]}</text>
      <text x="${rNameX}" y="${y}" font-size="15.5" font-weight="700" font-family="Inter" fill="#1a1a2e">${rightCerts[i][0]}</text>
      <text x="${rDateX}" y="${y}" font-size="15.5" font-weight="400" font-family="Inter" fill="#222" text-anchor="end">${rightCerts[i][1]}</text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="nfbBg" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#e2e2e2"/>
      <stop offset="40%" stop-color="#d5d5d5"/>
      <stop offset="70%" stop-color="#dcdcdc"/>
      <stop offset="100%" stop-color="#d0d0d0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" rx="10" fill="url(#nfbBg)"/>

  ${compassRose}

  <!-- EU flag box -->
  <rect x="32" y="25" width="48" height="36" rx="2" fill="#003399"/>
  <circle cx="56" cy="43" r="12" fill="none" stroke="rgba(255,204,0,0.3)" stroke-width="1"/>
  <text x="56" y="49" text-anchor="middle" font-size="20" font-weight="800" font-family="Inter" fill="#fff">S</text>

  <!-- Real org name -->
  <text x="92" y="40" font-size="17.5" font-weight="800" font-family="Inter" fill="#1a1a2e">Nämnden för båtlivsutbildning, NFB</text>
  <text x="92" y="58" font-size="12.5" font-weight="400" font-family="Inter" fill="#444">Intyg nautisk kompetens för fritidsbåtar</text>

  <!-- Name centered -->
  <text x="${W/2}" y="150" text-anchor="middle" font-size="32" font-weight="700" font-family="Inter" fill="#1a1a2e">${name}</text>
  <text x="${W/2}" y="188" text-anchor="middle" font-size="24" font-weight="600" font-family="Inter" fill="#222">${personnummer}</text>

  ${certs}

</svg>`;
}

// ============================================================
// CARD 2 — Transportstyrelsen — real text
// ============================================================
function buildTSCard(name, personnummer) {
  const waves = `
    <g opacity="0.35">
      <path d="M0,520 Q100,480 200,510 T400,490 T600,520 T800,495 T1013,530 L1013,638 L0,638 Z" fill="#5ba3d9" opacity="0.4"/>
      <path d="M0,545 Q120,510 250,540 T500,515 T750,545 T1013,520 L1013,638 L0,638 Z" fill="#4a90c9" opacity="0.5"/>
      <path d="M0,570 Q150,540 300,565 T600,545 T900,575 T1013,555 L1013,638 L0,638 Z" fill="#3a7ab5" opacity="0.45"/>
      <path d="M0,595 Q130,575 260,590 T520,570 T780,600 T1013,580 L1013,638 L0,638 Z" fill="#2d6aa0" opacity="0.35"/>
    </g>`;

  // Transportstyrelsen logo — blue geometric arrow/diamond shapes
  const logoX = 700;
  const logoY = 50;
  const logo = `
    <g transform="translate(${logoX}, ${logoY})">
      <polygon points="0,0 60,40 0,80" fill="#003d7a"/>
      <polygon points="20,10 80,40 20,70" fill="#0058a8"/>
      <polygon points="70,25 110,40 70,55" fill="#003d7a" opacity="0.8"/>
      <text x="55" y="110" text-anchor="middle" font-size="19" font-weight="700" font-family="Inter" fill="#555" letter-spacing="2">TRANSPORT</text>
      <text x="55" y="132" text-anchor="middle" font-size="19" font-weight="700" font-family="Inter" fill="#555" letter-spacing="2">STYRELSEN</text>
    </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <clipPath id="tsClip"><rect width="${W}" height="${H}" rx="10"/></clipPath>
  </defs>

  <rect width="${W}" height="${H}" rx="10" fill="#f2f2f2"/>

  <g clip-path="url(#tsClip)">${waves}</g>

  <!-- Real title -->
  <text x="40" y="60" font-size="28" font-weight="800" font-family="Inter" fill="#1a1a2e">Förarbevis för vattenskoter</text>

  ${logo}

  <!-- Namn -->
  <text x="40" y="155" font-size="15" font-weight="400" font-family="Inter" fill="#555">Namn</text>
  <text x="40" y="185" font-size="24" font-weight="600" font-family="Inter" fill="#1a1a2e">${name}</text>

  <!-- Personnummer -->
  <text x="40" y="240" font-size="15" font-weight="400" font-family="Inter" fill="#555">Personnummer</text>
  <text x="40" y="275" font-size="24" font-weight="700" font-family="Inter" fill="#1a1a2e">${personnummer}</text>

  <!-- Kort utfärdat -->
  <text x="40" y="335" font-size="15" font-weight="400" font-family="Inter" fill="#555">Kort utfärdat</text>
  <text x="40" y="370" font-size="24" font-weight="700" font-family="Inter" fill="#1a1a2e">2025-06-09</text>

</svg>`;
}

async function renderCard(svg, baseName) {
  const resvg = new Resvg(svg, resvgOpts);
  const pngBuf = resvg.render().asPng();

  const pngPath = path.join(__dirname, `${baseName}.png`);
  fs.writeFileSync(pngPath, pngBuf);
  console.log(`  ${pngPath}`);

  const jpgPath = path.join(__dirname, `${baseName}.jpg`);
  await sharp(pngBuf).jpeg({ quality: 95 }).toFile(jpgPath);
  console.log(`  ${jpgPath}`);
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
