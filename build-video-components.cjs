const fs = require('fs');
const path = require('path');

const videos = [
  { name: 'Video1', title: 'BYD SEAL - Dynamic Performance & Aerodynamics', duration: '02:45', model: 'BYD SEAL' },
  { name: 'Video2', title: 'BYD ATTO 3 - Born Dynamic Electric SUV Showcase', duration: '01:58', model: 'BYD ATTO 3' },
  { name: 'Video3', title: 'BYD SEALION 7 - Intelligent SUV Coupe Teaser', duration: '03:12', model: 'BYD SEALION 7' },
  { name: 'Video4', title: 'BYD TANG - 7-Seat Luxury AWD Performance Test', duration: '02:30', model: 'BYD TANG' },
];

const srcDir = path.join(process.cwd(), 'src', 'components');

videos.forEach(({ name, title, duration, model }) => {
  const compDir = path.join(srcDir, name);
  if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

  const tsx = `import React, { useState } from 'react';
import './${name}.css';

export interface ${name}Props {
  title?: string;
  duration?: string;
  modelBadge?: string;
  thumbnail?: string;
}

export const ${name}: React.FC<${name}Props> = ({
  title = '${title}',
  duration = '${duration}',
  modelBadge = '${model}',
  thumbnail = '/figma-assets/${name}.png',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={\`byd-video-card-container \${isPlaying ? 'is-playing' : ''}\`} data-layer-name="${name}">
      <div className="byd-video-preview-wrapper" onClick={togglePlay}>
        <img src={thumbnail} alt={title} className="byd-video-thumbnail" />
        <div className="byd-video-overlay" />

        <span className="byd-video-model-badge">{modelBadge}</span>
        <span className="byd-video-duration-pill">{duration}</span>

        <button className="byd-video-play-btn" aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <span className="pause-icon">&#10074;&#10074;</span>
          ) : (
            <span className="play-icon">&#9654;</span>
          )}
        </button>

        {isPlaying && (
          <div className="byd-video-playing-indicator">
            <span className="pulse-dot" /> NOW PLAYING
          </div>
        )}

        <div className="byd-video-progress-bar">
          <div className="byd-video-progress-fill" style={{ width: \`\${progress}%\` }} />
        </div>
      </div>

      <div className="byd-video-details">
        <h4 className="byd-video-title">{title}</h4>
        <div className="byd-video-actions-row">
          <button className="byd-video-action-btn" onClick={togglePlay}>
            {isPlaying ? 'PAUSE VIDEO' : 'WATCH PREVIEW'}
          </button>
          <button className="byd-video-share-btn" title="Share Video">
            &#10140;
          </button>
        </div>
      </div>
    </div>
  );
};
`;

  const css = `.byd-video-card-container {
  width: 100%;
  max-width: 540px;
  background-color: #0A0A0A;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #262626;
  font-family: var(--byd-font-primary, 'Instrument Sans', sans-serif);
  color: #FFFFFF;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: border-color 0.25s ease, transform 0.25s ease;
  box-sizing: border-box;
}

.byd-video-card-container:hover {
  border-color: var(--byd-brand-primary, #D80B1A);
  transform: translateY(-4px);
}

.byd-video-preview-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #171717;
  cursor: pointer;
  overflow: hidden;
}

.byd-video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.byd-video-preview-wrapper:hover .byd-video-thumbnail {
  transform: scale(1.05);
}

.byd-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
  transition: background 0.3s ease;
}

.byd-video-preview-wrapper:hover .byd-video-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%);
}

.byd-video-model-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(216, 11, 26, 0.9);
  color: #FFFFFF;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
  z-index: 3;
}

.byd-video-duration-pill {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
  z-index: 3;
}

.byd-video-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--byd-brand-primary, #D80B1A);
  color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(216, 11, 26, 0.6);
  transition: transform 0.2s ease, background-color 0.2s ease;
  z-index: 4;
}

.byd-video-preview-wrapper:hover .byd-video-play-btn {
  transform: translate(-50%, -50%) scale(1.15);
  background-color: var(--byd-brand-primary-hover, #B0091A);
  box-shadow: 0 0 30px rgba(216, 11, 26, 0.8);
}

.play-icon {
  font-size: 20px;
  margin-left: 3px;
}

.pause-icon {
  font-size: 18px;
}

.byd-video-playing-indicator {
  position: absolute;
  bottom: 24px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: #10B981;
  letter-spacing: 0.08em;
  z-index: 3;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #10B981;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.byd-video-progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 4;
}

.byd-video-progress-fill {
  height: 100%;
  background-color: var(--byd-brand-primary, #D80B1A);
  transition: width 0.3s ease;
}

.byd-video-details {
  padding: 20px;
}

.byd-video-title {
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.byd-video-actions-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.byd-video-action-btn {
  background: transparent;
  color: var(--byd-brand-primary, #D80B1A);
  border: 1.5px solid var(--byd-brand-primary, #D80B1A);
  padding: 8px 18px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.byd-video-action-btn:hover {
  background-color: var(--byd-brand-primary, #D80B1A);
  color: #FFFFFF;
}

.byd-video-share-btn {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.byd-video-share-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
`;

  const story = `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'BYD Figma Components/${name}',
  component: ${name},
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {};
`;

  fs.writeFileSync(path.join(compDir, `${name}.tsx`), tsx, 'utf8');
  fs.writeFileSync(path.join(compDir, `${name}.css`), css, 'utf8');
  fs.writeFileSync(path.join(compDir, `${name}.stories.tsx`), story, 'utf8');
  console.log(`Generated Video component for ${name}`);
});
