const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const imagePath = path.join(process.cwd(), 'public', 'figma-assets', 'Features1.png');
  const img = await Jimp.read(imagePath);
  console.log(`Features1.png dimensions: ${img.bitmap.width}x${img.bitmap.height}`);
}

main().catch(console.error);
