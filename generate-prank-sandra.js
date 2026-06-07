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
  'Det h\u00e4r brevet borde jag aldrig skicka. Men n\u00e4r jag blundar ser jag bara dig.',
  'Sedan den kv\u00e4llen har ingenting k\u00e4nts riktigt. Jag g\u00e5r omkring som i dimma. Ditt skratt. Dina \u00f6gon. Hur allt f\u00f6rsvann runt oss n\u00e4r vi var ensamma.',
  'Ingen har n\u00e5gonsin f\u00e5tt mig att k\u00e4nna s\u00e5. Den v\u00e4rmen, hur n\u00e4ra vi var, hur du h\u00f6ll mig som om inget annat spelade n\u00e5gon roll. Jag tappade andan. Jag tror inte jag har f\u00e5tt tillbaka den \u00e4n.',
  'Du l\u00e4mnade n\u00e5got kvar i mig som jag inte kan sl\u00e4ppa.',
  'Din doft p\u00e5 min kudde. K\u00e4nslan av din hud mot min. Orden du viskade som ingen annan f\u00e5r h\u00f6ra. Jag spelar upp det om och om igen.',
  'Jag kr\u00e4ver ingenting. Men l\u00f6gnen att det bara var en kv\u00e4ll \u2014 den k\u00f6per jag inte.',
  'Jag v\u00e4ntar p\u00e5 dig.'
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
