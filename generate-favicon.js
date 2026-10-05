// generate-favicon.js
import sharp from "sharp";
import fs from "fs";

const OUT = "public";
const BACKGROUND = "#1c1c1c"; // carbon black
const FOREGROUND = "#fafaff"; // ghost white

// "CC" set in GeistPixel-Square at 22px, centered in a 32x32 box
// (bounding box 1.62..30.38 x 8.06..23.94, i.e. centered on 16,16).
const GLYPH =
  "M4.13 22.27L3.30 22.27L3.30 20.60L2.46 20.60L2.46 18.93L1.62 18.93L1.62 13.07L2.46 13.07L2.46 11.40L3.30 11.40L3.30 9.73L4.13 9.73L4.13 8.89L5.80 8.89L5.80 8.06L10.82 8.06L10.82 8.89L13.33 8.89L13.33 9.73L14.16 9.73L14.16 11.40L15 11.40L15 13.91L13.33 13.91L13.33 11.40L12.49 11.40L12.49 10.57L11.66 10.57L11.66 9.73L5.80 9.73L5.80 10.57L4.97 10.57L4.97 11.40L4.13 11.40L4.13 13.07L3.30 13.07L3.30 18.93L4.13 18.93L4.13 20.60L4.97 20.60L4.97 21.43L5.80 21.43L5.80 22.27L11.66 22.27L11.66 21.43L12.49 21.43L12.49 20.60L13.33 20.60L13.33 18.09L15 18.09L15 20.60L14.16 20.60L14.16 22.27L13.33 22.27L13.33 23.11L10.82 23.11L10.82 23.94L5.80 23.94L5.80 23.11L4.13 23.11L4.13 22.27Z M19.51 22.27L18.67 22.27L18.67 20.60L17.84 20.60L17.84 18.93L17 18.93L17 13.07L17.84 13.07L17.84 11.40L18.67 11.40L18.67 9.73L19.51 9.73L19.51 8.89L21.18 8.89L21.18 8.06L26.20 8.06L26.20 8.89L28.70 8.89L28.70 9.73L29.54 9.73L29.54 11.40L30.38 11.40L30.38 13.91L28.70 13.91L28.70 11.40L27.87 11.40L27.87 10.57L27.03 10.57L27.03 9.73L21.18 9.73L21.18 10.57L20.34 10.57L20.34 11.40L19.51 11.40L19.51 13.07L18.67 13.07L18.67 18.93L19.51 18.93L19.51 20.60L20.34 20.60L20.34 21.43L21.18 21.43L21.18 22.27L27.03 22.27L27.03 21.43L27.87 21.43L27.87 20.60L28.70 20.60L28.70 18.09L30.38 18.09L30.38 20.60L29.54 20.60L29.54 22.27L28.70 22.27L28.70 23.11L26.20 23.11L26.20 23.94L21.18 23.94L21.18 23.11L19.51 23.11L19.51 22.27Z";

// Large icons: the real glyph on a carbon tile.
// radius: tile corner radius in 32-unit space (0 = full bleed)
// scale:  glyph scale around the tile center
// weight: extra stroke so the thin pixel strokes hold up on a home screen
const icon = ({ size, radius, scale, weight = 0.4 }) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="${radius}" fill="${BACKGROUND}"/>
  <path transform="translate(16 16) scale(${scale}) translate(-16 -16)" d="${GLYPH}" fill="${FOREGROUND}" stroke="${FOREGROUND}" stroke-width="${weight}"/>
</svg>
`;

// Tab icons: the glyph's strokes are well under a pixel at 16px and the two
// letters smear together, so tabs get a "CC" redrawn on a 16x16 pixel grid.
// It stays crisp at every integer multiple (16, 32, 48).
const pixelC = (x) =>
  `M${x + 1} 4h3v1h1v1h-1v-1h-3zM${x} 5h1v6h-1zM${x + 1} 11h3v-1h1v-1h-1v1h-3z`;

const tabIcon = (size) => {
  const dims = size ? ` width="${size}" height="${size}"` : "";
  return `<svg${dims} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="16" rx="3.5" fill="${BACKGROUND}"/>
  <path d="${pixelC(2)}${pixelC(9)}" fill="${FOREGROUND}" shape-rendering="crispEdges"/>
</svg>
`;
};

const png = (svg) =>
  sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();

// ICO container with PNG-encoded entries
const ico = (images) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size % 256, 0);
    entry.writeUInt8(size % 256, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
};

const write = (name, data) => {
  fs.writeFileSync(`${OUT}/${name}`, data);
  console.log(`${name} written`);
};

// Browser tabs
write("favicon.svg", tabIcon());
write(
  "favicon.ico",
  ico(
    await Promise.all(
      [16, 32, 48].map(async (size) => ({
        size,
        data: await png(tabIcon(size)),
      })),
    ),
  ),
);

// iOS home screen: opaque and full bleed, the OS applies its own mask
write(
  "apple-touch-icon.png",
  await sharp(Buffer.from(icon({ size: 180, radius: 0, scale: 0.7 })))
    .flatten({ background: BACKGROUND })
    .png({ compressionLevel: 9 })
    .toBuffer(),
);

// Android / PWA
write("icon-192.png", await png(icon({ size: 192, radius: 7, scale: 0.72 })));
write("icon-512.png", await png(icon({ size: 512, radius: 7, scale: 0.72 })));
// Maskable: full bleed with the glyph inside the central 80% safe zone
write(
  "icon-maskable-512.png",
  await png(icon({ size: 512, radius: 0, scale: 0.58 })),
);

write(
  "site.webmanifest",
  JSON.stringify(
    {
      name: "Corey Casmedes",
      short_name: "Corey",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
        {
          src: "/icon-maskable-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      theme_color: BACKGROUND,
      background_color: BACKGROUND,
      display: "standalone",
    },
    null,
    2,
  ) + "\n",
);
