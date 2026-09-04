import fs from 'fs';
import path from 'path';
import https from 'https';

const FIGMA_PAT = process.env.FIGMA_PAT || '';
const FILE_KEY = 'GPM1AVm4t0WCgKPZpHmajc';

const componentNodes = {
  'HeroCarousel': '13:328',
  'CarouselSlots1': '13:456',
  'HomeModel1': '13:500',
  'HomeModel2': '13:541',
  'HomeModel3': '13:509',
  'HomeModel4': '13:517',
  'HomeModel5': '13:525',
  'HomeModel6': '13:533',
  'NavModel1': '13:550',
  'NavModel2': '13:558',
  'NavModel3': '13:566',
  'NavModel4': '13:574',
  'Features1': '13:583',
  'Features2': '13:660',
  'Features3': '13:732',
  'Features4': '13:773',
  'Features5': '13:814',
  'SlidingRoofAnimation': '13:855',
  'Video1': '13:902',
  'Video2': '13:906',
  'Video3': '13:910',
  'Video4': '13:914',
  'UltraCarousel': '13:919',
  'CarouselSlots2': '13:981',
  'CarModelColors': '13:1018',
  'InputComponent': '46:726',
  'ButtonComponent': '46:791',
  'ModelVariant1': '46:822',
  'ModelVariant2': '46:835',
  'ModelVariant3': '46:848'
};

const outputDir = path.join(process.cwd(), 'public', 'figma-assets');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'X-Figma-Token': FIGMA_PAT } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          reject(new Error("Failed parsing JSON: " + data.substring(0, 200)));
        }
      });
    });
    req.on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const entries = Object.entries(componentNodes);
  const chunkSize = 3; // small chunks of 3 to avoid Figma API timeouts
  const manifest = {};

  for (let i = 0; i < entries.length; i += chunkSize) {
    const chunk = entries.slice(i, i + chunkSize);
    const names = chunk.map(c => c[0]);
    const ids = chunk.map(c => c[1]).join(',');
    console.log(`[Batch ${Math.floor(i/chunkSize) + 1}/${Math.ceil(entries.length/chunkSize)}] Requesting ${names.join(', ')}...`);
    
    try {
      const apiUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`;
      const response = await fetchJson(apiUrl);
      
      if (response.images) {
        for (const [name, id] of chunk) {
          const imgUrl = response.images[id];
          if (imgUrl) {
            const fileName = `${name}.png`;
            const dest = path.join(outputDir, fileName);
            await downloadFile(imgUrl, dest);
            manifest[name] = `/figma-assets/${fileName}`;
            console.log(`  ✓ Downloaded ${name}`);
          } else {
            console.warn(`  ✗ No image URL for ${name}`);
          }
        }
      } else {
        console.error(`Failed batch:`, response);
      }
    } catch(err) {
      console.error(`Error in batch ${names.join(', ')}:`, err.message);
    }

    await sleep(1500); // 1.5s delay between batches
  }

  fs.writeFileSync(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('🎉 ALL DONE! Manifest saved to public/figma-assets/manifest.json');
}

main().catch(console.error);
