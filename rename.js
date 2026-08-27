import fs from 'fs';
import path from 'path';

const map = {
  'Component1': 'HeroCarousel',
  'Component2': 'CarouselSlots1',
  'Component3': 'HomeModel1',
  'Component4': 'HomeModel2',
  'Component5': 'HomeModel3',
  'Component6': 'HomeModel4',
  'Component7': 'HomeModel5',
  'Component8': 'HomeModel6',
  'Component9': 'NavModel1',
  'Component10': 'NavModel2',
  'Component11': 'NavModel3',
  'Component12': 'NavModel4',
  'Component13': 'Features1',
  'Component14': 'Features2',
  'Component15': 'Features3',
  'Component16': 'Features4',
  'Component17': 'Features5',
  'Component18': 'SlidingRoofAnimation',
  'Component19': 'Video1',
  'Component20': 'Video2',
  'Component21': 'Video3',
  'Component22': 'Video4',
  'Component23': 'UltraCarousel',
  'Component24': 'CarouselSlots2',
  'Component25': 'CarModelColors',
  'Frame5474': 'ModelVariant1',
  'Frame5475': 'ModelVariant2',
  'Frame5476': 'ModelVariant3'
};

const srcDir = path.join(process.cwd(), 'src', 'components');

for (const [oldName, newName] of Object.entries(map)) {
  const oldPath = path.join(srcDir, oldName);
  const newPath = path.join(srcDir, newName);

  if (fs.existsSync(oldPath)) {
    // 1. Rename folder
    fs.renameSync(oldPath, newPath);

    // 2. Rename and update files
    const exts = ['.tsx', '.css', '.stories.tsx'];
    for (const ext of exts) {
      const oldFile = path.join(newPath, `${oldName}${ext}`);
      const newFile = path.join(newPath, `${newName}${ext}`);
      
      if (fs.existsSync(oldFile)) {
        fs.renameSync(oldFile, newFile);
        
        // 3. Replace content
        let content = fs.readFileSync(newFile, 'utf8');
        // Replace all instances of the old name with the new name
        const regex = new RegExp(oldName, 'g');
        content = content.replace(regex, newName);
        
        // Fix up storybook titles if needed (optional formatting, but regex handles it)
        fs.writeFileSync(newFile, content, 'utf8');
      }
    }
    console.log(`Renamed ${oldName} to ${newName}`);
  }
}

// 4. Update src/index.ts
const indexFile = path.join(process.cwd(), 'src', 'index.ts');
if (fs.existsSync(indexFile)) {
  let indexContent = fs.readFileSync(indexFile, 'utf8');
  for (const [oldName, newName] of Object.entries(map)) {
    const regex = new RegExp(oldName, 'g');
    indexContent = indexContent.replace(regex, newName);
  }
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated src/index.ts');
}

console.log('Done!');
