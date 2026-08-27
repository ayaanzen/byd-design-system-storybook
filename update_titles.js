const fs = require('fs');
const path = require('path');
const srcDir = path.join(process.cwd(), 'src', 'components');
fs.readdirSync(srcDir).forEach(dir => {
  const storyFile = path.join(srcDir, dir, dir + '.stories.tsx');
  if (fs.existsSync(storyFile)) {
    let content = fs.readFileSync(storyFile, 'utf8');
    content = content.replace(/title: 'Figma Library.*',/g, 'title: \\'Figma Library/' + dir + '\\',');
    fs.writeFileSync(storyFile, content, 'utf8');
  }
});
console.log('Fixed titles');
