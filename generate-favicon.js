// generate-favicon.js
import opentype from "opentype.js";
import sharp from "sharp";
import fs from "fs";

const font = opentype.loadSync("./GeistPixel-Square.ttf");

const size = 32;
const text = "CC";
const fontSize = 22;

const path = font.getPath(text, 0, 0, fontSize);
const bb = path.getBoundingBox();

const tx = (size - (bb.x2 - bb.x1)) / 2 - bb.x1;
const ty = (size - (bb.y2 - bb.y1)) / 2 - bb.y1;

const pathData = font.getPath(text, tx, ty, fontSize).toPathData(2);

const svg = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}" fill="#ffffff" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`;

fs.writeFileSync("public/favicon.svg", svg);
console.log("favicon.svg written");
