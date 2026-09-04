const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const imagePath = path.join(process.cwd(), 'public', 'figma-assets', 'CarModelColors.png');
  const img = await Jimp.read(imagePath);
  console.log(`CarModelColors.png dimensions: ${img.bitmap.width}x${img.bitmap.height}`);

  // Total height divided by 4 variants
  const cardHeight = Math.round(img.bitmap.height / 4);
  const w = img.bitmap.width;

  const names = ['atlantis-gray', 'cosmos-black', 'aurora-white', 'shark-gray'];

  for (let i = 0; i < 4; i++) {
    const y = i * cardHeight;
    const cropped = img.clone().crop({ x: 0, y, w, h: cardHeight });
    const outName = `car-color-${names[i]}.png`;
    const outPath = path.join(process.cwd(), 'public', 'figma-assets', outName);
    await cropped.write(outPath);
    console.log(`Saved ${outName} at y=${y}, h=${cardHeight}`);
  }
}

main().catch(console.error);
