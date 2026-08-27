const fs = require('fs');
const path = require('path');
const srcDir = path.join(process.cwd(), 'src', 'components');

const dirs = fs.readdirSync(srcDir);
dirs.forEach(dir => {
  const storyFile = path.join(srcDir, dir, dir + '.stories.tsx');
  if (fs.existsSync(storyFile)) {
    let content = fs.readFileSync(storyFile, 'utf8');
    // Replace 'Figma Library/Component X' with 'Figma Library/DirName'
    content = content.replace(/title: 'Figma Library\/.*'/, 	itle: 'Figma Library/ + dir + ');
    fs.writeFileSync(storyFile, content, 'utf8');
  }
});
console.log('Updated story titles');
