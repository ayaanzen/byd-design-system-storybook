import { Jimp } from 'jimp';
import path from 'path';

async function main() {
  const imagePath = path.join(process.cwd(), 'public', 'figma-assets', 'Features1.png');
  const img = await Jimp.read(imagePath);
  console.log(`Features1.png dimensions: ${img.width}x${img.height}`);
}

main().catch(console.error);
