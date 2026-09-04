const { Jimp } = require('jimp');
const path = require('path');

async function cropFile(fileName, outputPrefix, numCards) {
  const imagePath = path.join(process.cwd(), 'public', 'figma-assets', fileName);
  try {
    const img = await Jimp.read(imagePath);
    console.log(`${fileName}: ${img.bitmap.width}x${img.bitmap.height}`);
    
    // Top row cropping
    const startY = Math.round(img.bitmap.height * 0.05);
    const cardHeight = Math.round(img.bitmap.height * 0.45);
    const cardWidth = Math.round((img.bitmap.width - 120) / numCards);

    for (let i = 0; i < numCards; i++) {
      const x = Math.round(40 + i * cardWidth);
      const cropped = img.clone().crop({ x, y: startY, w: cardWidth, h: cardHeight });
      const outName = `${outputPrefix}-card${i + 1}.png`;
      await cropped.write(path.join(process.cwd(), 'public', 'figma-assets', outName));
      console.log(`  Saved ${outName}`);
    }
  } catch(e) {
    console.error(`Error processing ${fileName}:`, e.message);
  }
}

async function main() {
  await cropFile('Features2.png', 'features2', 6);
  await cropFile('Features3.png', 'features3', 4);
  await cropFile('Features4.png', 'features4', 4);
  await cropFile('Features5.png', 'features5', 4);
}

main();
