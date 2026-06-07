const { jsPDF } = require('jspdf');
const fs = require('fs');

const doc = new jsPDF({ unit: 'mm', format: 'a4' });
const W = 210;
const marginL = 35;
const marginR = 35;
const maxW = W - marginL - marginR;

const textColor = [26, 26, 26];
const heartColor = [192, 57, 43];

function printParagraph(doc, text, x, y, fontSize, fontStyle, lineHeight, maxWidth) {
  doc.setFontSize(fontSize);
  doc.setFont('times', fontStyle);
  doc.setTextColor(...textColor);
  const lines = doc.splitTextToSize(text, maxWidth);
  for (const line of lines) {
    doc.text(line, x, y);
    y += fontSize * lineHeight * 0.352778;
  }
  return y;
}

function drawHeart(doc, cx, cy, size) {
  doc.setFillColor(...heartColor);
  doc.setDrawColor(...heartColor);
  const s = size;
  const x = cx;
  const y = cy;
  const r = s * 0.32;
  doc.circle(x - r * 0.95, y - r * 0.2, r, 'F');
  doc.circle(x + r * 0.95, y - r * 0.2, r, 'F');
  doc.triangle(
    x - s * 0.62, y,
    x + s * 0.62, y,
    x, y + s * 0.72,
    'F'
  );
  doc.rect(x - r * 0.95, y - r * 0.2, r * 1.9, r * 0.4, 'F');
}

let y = 62;

// Greeting
doc.setFont('times', 'italic');
doc.setFontSize(15);
doc.setTextColor(...textColor);
doc.text('Sandra,', marginL, y);
y += 14;

const paragraphs = [
  'Jag vet att jag kanske inte borde skriva det h\u00e4r. Men jag kan inte l\u00e5ta bli.',
  'Jag har inte kunnat sluta t\u00e4nka p\u00e5 den d\u00e4r kv\u00e4llen sedan du \u00e5kte hem. Allt \u2014 samtalet som bara fl\u00f6t, hur du tittade p\u00e5 mig n\u00e4r du trodde jag inte m\u00e4rkte det, och sen allt som h\u00e4nde efter\u00e5t.',
  'Jag har aldrig k\u00e4nt n\u00e5got liknande. Den n\u00e4rheten, intensiteten, hur naturligt allt bara var mellan oss. Du fick mig att gl\u00f6mma tid, plats, allt. Det enda som existerade var du och jag.',
  'Den natten f\u00f6r\u00e4ndrade n\u00e5got i mig. Du v\u00e4ckte n\u00e5got jag inte visste fanns kvar.',
  'Dina h\u00e4nder. Din r\u00f6st. S\u00e4ttet du andades mitt namn i m\u00f6rkret. Jag b\u00e4r det med mig varje dag.',
  'Jag f\u00f6rv\u00e4ntar mig inget. Men om du n\u00e5gonsin \u00e4r tillbaka i stan \u2014 du vet var du hittar mig.',
  'Du saknas.'
];

for (const para of paragraphs) {
  y = printParagraph(doc, para, marginL, y, 12.5, 'normal', 1.9, maxW);
  y += 5;
}

// Signature
y += 8;
doc.setFont('times', 'bolditalic');
doc.setFontSize(22);
doc.setTextColor(...textColor);
const sigText = 'Din v\u00e4n fr\u00e5n v\u00e5rden';
doc.text(sigText, marginL, y);

// Heart after signature
const sigWidth = doc.getTextWidth(sigText);
drawHeart(doc, marginL + sigWidth + 7, y - 3.5, 5);

// Save
const output = doc.output('arraybuffer');
fs.writeFileSync('/vercel/sandbox/repo/prank-letter-sandra.pdf', Buffer.from(output));
console.log('PDF created: prank-letter-sandra.pdf');
