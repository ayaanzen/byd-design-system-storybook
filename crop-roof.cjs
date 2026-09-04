const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const imagePath = path.join(process.cwd(), 'public', 'figma-assets', 'SlidingRoofAnimation.png');
  const img = await Jimp.read(imagePath);
  console.log(`SlidingRoofAnimation.png dimensions: ${img.bitmap.width}x${img.bitmap.height}`);
  
  // Crop roof open (top frame) and roof closed (bottom frame)
  const h = Math.round(img.bitmap.height / 2);
  const w = img.bitmap.width;

  const openRoof = img.clone().crop({ x: 0, y: 0, w: w, h: h - 20 });
  const closedRoof = img.clone().crop({ x: 0, y: h, w: w, h: h - 20 });

  await openRoof.write(path.join(process.cwd(), 'public', 'figma-assets', 'roof-open.png'));
  await closedRoof.write(path.join(process.cwd(), 'public', 'figma-assets', 'roof-closed.png'));

  console.log('Saved roof-open.png and roof-closed.png!');
}

main().catch(console.error);
