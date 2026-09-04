import React from 'react';
import './Features2.css';

export interface FeatureItem2 {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Features2Props {
  title?: string;
  features?: FeatureItem2[];
}

const defaultFeatures: FeatureItem2[] = [
  {
    id: '1',
    title: 'Luxurious Cabin Seating',
    description: 'Ergonomically crafted premium leather seats with integrated heating and ventilation.',
    image: '/figma-assets/features2-card1.png',
  },
  {
    id: '2',
    title: 'Rotating Touchscreen Console',
    description: '15.6-inch adaptive intelligent rotating touchscreen with seamless DiLink ecosystem.',
    image: '/figma-assets/features2-card2.png',
  },
  {
    id: '3',
    title: 'Ergonomic Center Console',
    description: 'Electronic gear selector inspired by crystal cut craftsmanship with dual wireless charging.',
    image: '/figma-assets/features2-card3.png',
  },
  {
    id: '4',
    title: 'Multi-Color Ambient Lighting',
    description: 'Dynamic rhythm-driven interior light strips featuring 128 customizable color spectrums.',
    image: '/figma-assets/features2-card4.png',
  },
  {
    id: '5',
    title: 'Dynaudio Hi-Fi Sound System',
    description: '12 custom acoustic speakers creating concert-grade 3D soundstage immersion.',
    image: '/figma-assets/features2-card5.png',
  },
  {
    id: '6',
    title: 'Panoramic Glass Sunroof',
    description: 'Ultra-large thermal insulating glass roof providing open cockpit views with power shade.',
    image: '/figma-assets/features2-card6.png',
  },
];

export const Features2: React.FC<Features2Props> = ({
  title = 'Highlighted Interior Features.',
  features = defaultFeatures,
}) => {
  return (
    <section className="byd-features2-section" data-layer-name="Features 2">
      <div className="byd-features2-header">
        <h2 className="byd-features2-title">{title}</h2>
        <button className="byd-features2-arrow" aria-label="Next">
          &rarr;
        </button>
      </div>

      <div className="byd-features2-grid">
        {features.map((item) => (
          <div key={item.id} className="byd-features2-card">
            <div className="byd-features2-img-wrapper">
              <img src={item.image} alt={item.title} className="byd-features2-img" />
            </div>
            <h3 className="byd-features2-card-title">{item.title}</h3>
            <p className="byd-features2-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
