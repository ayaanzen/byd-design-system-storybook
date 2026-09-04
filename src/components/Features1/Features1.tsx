import React from 'react';
import './Features1.css';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Features1Props {
  title?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: '1',
    title: 'Double-U Floating LED Headlights',
    description: 'Streamline & Slender LED lens headlight design delivering striking aesthetic & enhanced visibility.',
    image: '/figma-assets/features1-card1.png',
  },
  {
    id: '2',
    title: 'Glistening "Ripple" Lamp',
    description: 'Based on the ripple of an ocean wave. Linear lighting gradually thins, giving a sense of endless expansion.',
    image: '/figma-assets/features1-card2.png',
  },
  {
    id: '3',
    title: 'Boundless LED Tail Light',
    description: 'The extremely narrow linear light strip connects the water drop dot matrix lights in series, creating a wonderful visual sense of the sea and sky.',
    image: '/figma-assets/features1-card3.png',
  },
  {
    id: '4',
    title: '19" Precision Blade Wheel Hub',
    description: 'Designed with large-area sealing, increasing aerodynamic efficiency.',
    image: '/figma-assets/features1-card4.png',
  },
  {
    id: '5',
    title: 'Waterdrop-Shaped Side Mirrors',
    description: 'Drawing inspiration from the ocean, the waterdrop-shaped side mirrors designed for enhanced visibility.',
    image: '/figma-assets/features1-card5.png',
  },
  {
    id: '6',
    title: 'Electronic Hidden Flush Door Handle',
    description: 'Electronically retractable door handles make doors streamlined and wind resistant. Keyless entry and start, extending when unlocked.',
    image: '/figma-assets/features1-card6.png',
  },
];

export const Features1: React.FC<Features1Props> = ({
  title = 'Highlighted Exterior Features.',
  features = defaultFeatures,
}) => {
  return (
    <section className="byd-features1-section" data-layer-name="Features 1">
      <div className="byd-features1-header">
        <h2 className="byd-features1-title">{title}</h2>
        <button className="byd-features1-arrow" aria-label="Next">
          &rarr;
        </button>
      </div>

      <div className="byd-features1-grid">
        {features.map((item) => (
          <div key={item.id} className="byd-features1-card">
            <div className="byd-features1-img-wrapper">
              <img src={item.image} alt={item.title} className="byd-features1-img" />
            </div>
            <h3 className="byd-features1-card-title">{item.title}</h3>
            <p className="byd-features1-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
