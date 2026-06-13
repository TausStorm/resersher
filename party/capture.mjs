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
// CARD 1 — NFB
// Real card layout: huge compass rose centered, certs on top of it
// Header tight at top, name+pnr centered, then certs immediately
// ============================================================
function buildNFBCard(name, personnummer) {
  // Compass rose — HUGE, centered on card, certs overlay it
  const cx = W * 0.50;
  const cy = H * 0.55;
  const R = 220; // much bigger radius
  const compassRose = `
    <g transform="translate(${cx}, ${cy})" opacity="0.10">
      <!-- Outer rings -->
      <circle cx="0" cy="0" r="${R}" fill="none" stroke="#333" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="${R-8}" fill="none" stroke="#333" stroke-width="0.7"/>
      <!-- N (tall narrow diamond) -->
      <polygon points="0,${-R+5} 10,-25 0,-60 -10,-25" fill="#333"/>
      <!-- S -->
      <polygon points="0,${R-5} 10,25 0,60 -10,25" fill="#333"/>
      <!-- W -->
      <polygon points="${-R+5},0 -25,-10 -60,0 -25,10" fill="#333"/>
      <!-- E -->
      <polygon points="${R-5},0 25,-10 60,0 25,10" fill="#333"/>
      <!-- NE -->
      <polygon points="150,-150 28,-14 42,-38 16,-16" fill="#333" opacity="0.55"/>
      <!-- NW -->
      <polygon points="-150,-150 -28,-14 -42,-38 -16,-16" fill="#333" opacity="0.55"/>
      <!-- SE -->
      <polygon points="150,150 28,14 42,38 16,16" fill="#333" opacity="0.55"/>
      <!-- SW -->
      <polygon points="-150,150 -28,14 -42,38 -16,16" fill="#333" opacity="0.55"/>
      <!-- NNE -->
      <polygon points="75,${-R+10} 8,-22 0,-32 -3,-20" fill="#333" opacity="0.3"/>
      <!-- NNW -->
      <polygon points="-75,${-R+10} -8,-22 0,-32 3,-20" fill="#333" opacity="0.3"/>
      <!-- ENE -->
      <polygon points="${R-10},-75 22,-8 32,0 20,3" fill="#333" opacity="0.3"/>
      <!-- ESE -->
      <polygon points="${R-10},75 22,8 32,0 20,-3" fill="#333" opacity="0.3"/>
      <!-- SSE -->
      <polygon points="75,${R-10} 8,22 0,32 -3,20" fill="#333" opacity="0.3"/>
      <!-- SSW -->
      <polygon points="-75,${R-10} -8,22 0,32 3,20" fill="#333" opacity="0.3"/>
      <!-- WNW -->
      <polygon points="${-R+10},-75 -22,-8 -32,0 -20,3" fill="#333" opacity="0.3"/>
      <!-- WSW -->
      <polygon points="${-R+10},75 -22,8 -32,0 -20,-3" fill="#333" opacity="0.3"/>
      <!-- Center -->
      <circle cx="0" cy="0" r="20" fill="none" stroke="#333" stroke-width="2"/>
      <circle cx="0" cy="0" r="7" fill="#333"/>
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

  // Tighter layout matching real card
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
    <linearGradient id="nfbBg" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#dcdcdc"/>
      <stop offset="30%" stop-color="#d2d2d2"/>
      <stop offset="60%" stop-color="#d8d8d8"/>
      <stop offset="100%" stop-color="#cccccc"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" rx="8" fill="url(#nfbBg)"/>

  ${compassRose}

  <!-- EU flag box — small, top-left corner -->
  <rect x="25" y="18" width="40" height="30" rx="2" fill="#003399"/>
  <circle cx="45" cy="33" r="10" fill="none" stroke="rgba(255,204,0,0.25)" stroke-width="0.8"/>
  <text x="45" y="38" text-anchor="middle" font-size="16" font-weight="800" font-family="Inter" fill="#fff">S</text>

  <!-- Org name right of flag -->
  <text x="75" y="33" font-size="16" font-weight="800" font-family="Inter" fill="#1a1a2e">Nämnden för båtlivsutbildning, NFB</text>
  <text x="75" y="48" font-size="11.5" font-weight="400" font-family="Inter" fill="#333">Intyg nautisk kompetens för fritidsbåtar</text>

  <!-- Name centered, tight below header -->
  <text x="${W/2}" y="120" text-anchor="middle" font-size="30" font-weight="700" font-family="Inter" fill="#1a1a2e">${name}</text>
  <text x="${W/2}" y="152" text-anchor="middle" font-size="22" font-weight="600" font-family="Inter" fill="#1a1a2e">${personnummer}</text>

  <!-- Certs directly on top of compass rose -->
  ${certs}

</svg>`;
}

// ============================================================
// CARD 2 — Transportstyrelsen
// Real card: white bg, bold blue waves bottom 30%, logo top-right
// ============================================================
function buildTSCard(name, personnummer) {
  // Prominent blue waves — matching the real card's bold swooshes
  const waves = `
    <g clip-path="url(#tsClip)">
      <!-- Lightest wave, highest -->
      <path d="M-20,480 Q80,450 180,475 Q280,500 380,470 Q480,440 580,465 Q680,490 780,460 Q880,430 980,458 L1013,450 L1013,638 L0,638 Z" fill="#c5ddf0" opacity="0.6"/>
      <!-- Mid wave -->
      <path d="M-20,510 Q100,475 220,505 Q340,535 440,500 Q540,465 660,500 Q780,535 880,505 Q960,480 1013,495 L1013,638 L0,638 Z" fill="#9cc5e3" opacity="0.55"/>
      <!-- Prominent wave -->
      <path d="M-20,545 Q120,510 260,542 Q400,574 520,535 Q640,496 760,535 Q880,574 1013,545 L1013,638 L0,638 Z" fill="#6faed4" opacity="0.6"/>
      <!-- Bold darker wave -->
      <path d="M-20,575 Q100,550 230,578 Q360,606 480,568 Q600,530 730,570 Q860,610 1013,580 L1013,638 L0,638 Z" fill="#4d95c4" opacity="0.65"/>
      <!-- Darkest front wave -->
      <path d="M-20,600 Q130,580 270,605 Q410,630 530,598 Q650,566 780,600 Q910,634 1013,610 L1013,638 L0,638 Z" fill="#3a7fb0" opacity="0.55"/>
    </g>`;

  // Transportstyrelsen logo — angular overlapping arrow shapes
  // The real logo: large blue right-pointing arrow + overlapping smaller arrows
  const logoX = 710;
  const logoY = 35;
  const logo = `
    <g transform="translate(${logoX}, ${logoY})">
      <!-- Main large arrow -->
      <polygon points="0,5 0,85 70,45" fill="#003d7a"/>
      <!-- Medium overlapping arrow -->
      <polygon points="30,15 30,75 85,45" fill="#0060aa"/>
      <!-- Small front arrow -->
      <polygon points="60,25 60,65 100,45" fill="#003d7a" opacity="0.75"/>
      <!-- Text -->
      <text x="50" y="108" text-anchor="middle" font-size="17" font-weight="700" font-family="Inter" fill="#555" letter-spacing="2.5">TRANSPORT</text>
      <text x="50" y="128" text-anchor="middle" font-size="17" font-weight="700" font-family="Inter" fill="#555" letter-spacing="2.5">STYRELSEN</text>
    </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <clipPath id="tsClip"><rect width="${W}" height="${H}" rx="8"/></clipPath>
  </defs>

  <!-- White bg -->
  <rect width="${W}" height="${H}" rx="8" fill="#f0f0f0"/>

  ${waves}

  <!-- Title — large bold -->
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
