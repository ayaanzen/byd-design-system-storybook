import React, { useState } from 'react';
import './HeroCarousel.css';

export interface SlideItem {
  id: string;
  badge: string;
  headline: string;
  subheadline: string;
  tagline: string;
  image: string;
}

export interface HeroCarouselProps {
  slides?: SlideItem[];
}

const defaultSlides: SlideItem[] = [
  {
    id: '1',
    badge: 'NEW RELEASE',
    headline: 'BUILD YOUR DREAMS',
    subheadline: 'Experience Next-Gen e-Mobility with BYD EV Technology.',
    tagline: 'BYD Electric Vehicle Lineup',
    image: '/figma-assets/HeroCarousel.png',
  },
  {
    id: '2',
    badge: 'PERFORMANCE SEDAN',
    headline: 'BYD SEAL',
    subheadline: 'Dynamic and Intelligent Electric Sport Sedan.',
    tagline: '580km Range | 0-100 km/h in 3.8s',
    image: '/figma-assets/HeroCarousel.png',
  },
  {
    id: '3',
    badge: 'LUXURY MPV',
    headline: 'BYD DENZA D9',
    subheadline: 'The Premium All-Electric Executive MPV.',
    tagline: 'First Class VIP Seating & AWD',
    image: '/figma-assets/HeroCarousel.png',
  },
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides = defaultSlides,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="byd-hero-carousel-container" data-layer-name="Hero carousel">
      <div className="byd-hero-slide-wrapper">
        <img src={active.image} alt={active.headline} className="byd-hero-bg-img" />
        <div className="byd-hero-overlay" />
        
        <div className="byd-hero-content-box">
          <span className="byd-hero-badge">{active.badge}</span>
          <h1 className="byd-hero-headline">{active.headline}</h1>
          <p className="byd-hero-subheadline">{active.subheadline}</p>
          <div className="byd-hero-tagline">{active.tagline}</div>

          <div className="byd-hero-actions">
            <button className="byd-hero-cta-btn">EXPLORE NOW</button>
            <button className="byd-hero-secondary-btn">BOOK TEST DRIVE</button>
          </div>
        </div>

        <button className="byd-hero-nav-prev" onClick={prevSlide} aria-label="Previous Slide">
          &lsaquo;
        </button>
        <button className="byd-hero-nav-next" onClick={nextSlide} aria-label="Next Slide">
          &rsaquo;
        </button>

        <div className="byd-hero-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`byd-hero-dot ${idx === currentSlide ? 'is-active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
