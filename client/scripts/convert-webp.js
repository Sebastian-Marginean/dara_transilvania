// Simple script to create WebP 1x/2x from BackgroundIMG.png using sharp
// Usage: node scripts/convert-webp.js

const sharp = require("sharp");
const path = require("path");

const input = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "BackgroundIMG.png"
);
const out1 = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "BackgroundIMG@1x.webp"
);
const out2 = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "BackgroundIMG@2x.webp"
);

(async () => {
  try {
    // 2x: resize to width 2560 if original is larger
    await sharp(input)
      .resize({ width: 2560 })
      .webp({ quality: 82 })
      .toFile(out2);
    console.log("Created", out2);

    // 1x: resize to width 1280
    await sharp(input)
      .resize({ width: 1280 })
      .webp({ quality: 78 })
      .toFile(out1);
    console.log("Created", out1);
  } catch (err) {
    console.error("Error generating webp images:", err);
    process.exit(1);
  }
})();
