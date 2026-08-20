/**
 * Deployment helper for Vercel & Storybook Static
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Running pre-deployment build check for Storybook...');

try {
  console.log('1. Type checking...');
  execSync('npm run type-check', { stdio: 'inherit' });

  console.log('2. Building static Storybook...');
  execSync('npm run build-storybook', { stdio: 'inherit' });

  const outputDir = path.join(__dirname, '../storybook-static');
  if (fs.existsSync(outputDir) && fs.existsSync(path.join(outputDir, 'index.html'))) {
    console.log('✅ Storybook static build verified successfully in storybook-static/');
    console.log('🎉 Ready for Vercel deployment!');
  } else {
    console.error('❌ Build directory or index.html missing!');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Build check failed:', error.message);
  process.exit(1);
}
