import { Jimp } from 'jimp';
import path from 'path';

async function main() {
  const imagePath = path.join(process.cwd(), 'public', 'figma-assets', 'Features1.png');
  const img = await Jimp.read(imagePath);
  
  // Total dimensions: 5712 x 5873
  // Top variant frame is approximately the first 20% of height (y = 0 to 1170)
  // Inside the top variant:
  // Title "Highlighted Exterior Features." is at the top left
  // Below title (y around 350 to 900) are 6 cards arranged horizontally.
  // Let's crop the 6 image rectangles!
  // Image width ~ 780px, height ~ 500px, gap ~ 100px
  
  const startY = 320;
  const cardWidth = 860;
  const cardHeight = 560;
  const gapX = 72;
  const startX = 64;

  for (let i = 0; i < 6; i++) {
    const x = Math.round(startX + i * (cardWidth + gapX));
    const cardImg = img.clone().crop({ x: x, y: startY, w: cardWidth, h: cardHeight });
    const outPath = path.join(process.cwd(), 'public', 'figma-assets', `features1-card${i + 1}.png`);
    await cardImg.write(outPath);
    console.log(`Saved features1-card${i + 1}.png at x=${x}, y=${startY}, w=${cardWidth}, h=${cardHeight}`);
  }
}

main().catch(console.error);
