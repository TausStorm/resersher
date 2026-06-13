import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, 'fonts');

// Card dimensions: 3.375in x 2.125in at 300dpi
const W = 1013;
const H = 638;
const SCALE = 3;

function buildCompassRose() {
  return `
    <g transform="translate(${W/2}, ${H/2 - 10})" opacity="0.08">
      <circle cx="0" cy="0" r="135" fill="none" stroke="#000" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="128" fill="none" stroke="#000" stroke-width="0.75"/>
      <polygon points="0,-130 12,-15 0,-40 -12,-15" fill="#000"/>
      <polygon points="0,130 12,15 0,40 -12,15" fill="#000"/>
      <polygon points="-130,0 -15,-12 -40,0 -15,12" fill="#000"/>
      <polygon points="130,0 15,-12 40,0 15,12" fill="#000"/>
      <polygon points="90,-90 25,-12 38,-28 17,-14" fill="#000" opacity="0.6"/>
      <polygon points="-90,-90 -25,-12 -28,-28 -14,-14" fill="#000" opacity="0.6"/>
      <polygon points="90,90 25,12 38,28 17,14" fill="#000" opacity="0.6"/>
      <polygon points="-90,90 -25,12 -28,28 -14,14" fill="#000" opacity="0.6"/>
      <circle cx="0" cy="0" r="18" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="0" cy="0" r="7" fill="#000"/>
      <text x="0" y="-112" text-anchor="middle" font-size="14" font-weight="bold" font-family="Inter" fill="#000">N</text>
      <text x="0" y="125" text-anchor="middle" font-size="14" font-weight="bold" font-family="Inter" fill="#000">S</text>
      <text x="120" y="5" text-anchor="middle" font-size="14" font-weight="bold" font-family="Inter" fill="#000">O</text>
      <text x="-120" y="5" text-anchor="middle" font-size="14" font-weight="bold" font-family="Inter" fill="#000">V</text>
    </g>`;
}

function buildLicenseSVG(name, personnummer) {
  const leftCerts = [
    ['Festintyg', '2026-06-13'],
    ['Drinkmixning', '2026-06-13'],
    ['Festskepparintyg', '2026-06-13'],
    ['Danspraktik', '***'],
    ['Grillmästarbevis', '***'],
    ['Karaokeintyg', '***'],
    ['Badpraktik', '***'],
  ];

  const rightCerts = [
    ['Vibeintyg', '***'],
    ['Skålintyg högfart', '***'],
    ['Limbo Nivå 1', '***'],
    ['Limbo Nivå 2', '***'],
    ['Limbo Nivå 3', '***'],
    ['SBC', '***'],
    ['LBC', '***'],
  ];

  const startY = 280;
  const lineH = 22;
  const leftX = 30;
  const rightX = W / 2 + 20;
  const leftDateX = W / 2 - 15;
  const rightDateX = W - 30;

  let certRows = '';
  for (let i = 0; i < leftCerts.length; i++) {
    const y = startY + i * lineH;
    const [ln, ld] = leftCerts[i];
    const [rn, rd] = rightCerts[i];

    certRows += `
      <text x="${leftX}" y="${y}" font-size="12.5" font-weight="700" font-family="Inter" fill="#1a1a2e">${ln}</text>
      <text x="${leftDateX}" y="${y}" font-size="12.5" font-weight="500" font-family="Inter" fill="#333" text-anchor="end">${ld}</text>
      <text x="${rightX}" y="${y}" font-size="12.5" font-weight="700" font-family="Inter" fill="#1a1a2e">${rn}</text>
      <text x="${rightDateX}" y="${y}" font-size="12.5" font-weight="500" font-family="Inter" fill="#333" text-anchor="end">${rd}</text>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0%" stop-color="#e8e8e8"/>
      <stop offset="30%" stop-color="#d8d8d8"/>
      <stop offset="60%" stop-color="#e0e0e0"/>
      <stop offset="100%" stop-color="#d4d4d4"/>
    </linearGradient>
    <clipPath id="roundCard">
      <rect x="0" y="0" width="${W}" height="${H}" rx="12"/>
    </clipPath>
  </defs>

  <!-- Card bg -->
  <rect width="${W}" height="${H}" rx="12" fill="url(#bg)"/>

  <!-- Subtle diagonals -->
  <g clip-path="url(#roundCard)" opacity="0.02">
    ${Array.from({length: 50}, (_, i) => `<line x1="${i*30}" y1="0" x2="${i*30-300}" y2="${H}" stroke="#000" stroke-width="0.8"/>`).join('')}
  </g>

  <!-- Compass rose -->
  ${buildCompassRose()}

  <!-- EU flag box -->
  <rect x="22" y="18" width="42" height="32" rx="2" fill="#003399"/>
  <circle cx="43" cy="34" r="11" fill="none" stroke="rgba(255,204,0,0.35)" stroke-width="1.5"/>
  <text x="43" y="40" text-anchor="middle" font-size="18" font-weight="800" font-family="Inter" fill="white">S</text>

  <!-- Header -->
  <text x="74" y="36" font-size="16.5" font-weight="800" font-family="Inter" fill="#1a1a2e" letter-spacing="0.2">Nämnden för festbåtsutbildning, NFF</text>
  <text x="74" y="52" font-size="12" font-weight="400" font-family="Inter" fill="#555">Intyg nautisk partykompetens för festbåtar</text>

  <!-- Name section -->
  <text x="30" y="105" font-size="28" font-weight="700" font-family="Inter" fill="#1a1a2e">${name}</text>
  <text x="30" y="135" font-size="22" font-weight="600" font-family="Inter" fill="#333">${personnummer}</text>

  <!-- Cert table -->
  <line x1="${W/2 + 8}" y1="260" x2="${W/2 + 8}" y2="${H - 20}" stroke="#c0c0c0" stroke-width="0.5"/>
  ${certRows}

</svg>`;
}

async function renderCard(svg, baseName) {
  const resvg = new Resvg(svg, {
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
  });

  const pngData = resvg.render();
  const pngBuf = pngData.asPng();

  const pngPath = path.join(__dirname, `${baseName}.png`);
  fs.writeFileSync(pngPath, pngBuf);
  console.log(`  ${pngPath}`);

  const jpgPath = path.join(__dirname, `${baseName}.jpg`);
  await sharp(pngBuf).jpeg({ quality: 95 }).toFile(jpgPath);
  console.log(`  ${jpgPath}`);
}

async function main() {
  const svg = buildLicenseSVG('Carl Michel Rayes', '19740617-4099');
  console.log('Rendering card 1...');
  await renderCard(svg, 'carl-michel-rayes-license-1');
  console.log('Rendering card 2...');
  await renderCard(svg, 'carl-michel-rayes-license-2');
  console.log('\nDone! 2 x PNG + 2 x JPEG in party/');
}

main().catch(console.error);
