import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Color Palette',
  parameters: {
    docs: {
      description: {
        component: '### BYD Official Brand & Design System Tokens\n\nFeaturing the signature BYD Brand Color Palette: **BYD Red (#EC1C24)**, **Pure White (#FFFFFF)**, and **Onyx/Carbon Black (#000000 / #0A0A0A)**, alongside Neutral and Foundation scales.'
      }
    }
  }
};

export default meta;

export const BYDBrandColors: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', background: '#F8FAFC', borderRadius: '16px' }}>
      <div>
        <div style={{ display: 'inline-block', background: '#EC1C24', color: '#FFF', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '9999px', letterSpacing: '0.08em', marginBottom: '8px' }}>
          OFFICIAL BRAND SYSTEM
        </div>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.02em' }}>
          BYD Brand Colors (Red • White • Black)
        </h1>
        <p style={{ margin: 0, color: '#525252', fontSize: '15px' }}>
          Primary brand identity tokens defining the BYD Seal & Ocean series design language.
        </p>
      </div>

      {/* Core Brand Trilogy */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {/* BYD Red */}
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E5E5', overflow: 'hidden', boxShadow: '0 4px 12px rgba(236,28,36,0.1)' }}>
          <div style={{ height: '110px', background: 'var(--byd-brand-primary, #EC1C24)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 800, fontSize: '20px', letterSpacing: '0.05em' }}>
            #EC1C24
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#0A0A0A' }}>BYD Signature Red</div>
            <div style={{ fontSize: '13px', color: '#525252', marginTop: '4px' }}>Primary brand & interaction color</div>
            <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#EC1C24', marginTop: '8px', fontWeight: 600 }}>--byd-brand-primary</div>
          </div>
        </div>

        {/* BYD Pure Black */}
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E5E5', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ height: '110px', background: 'var(--byd-brand-black, #000000)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 800, fontSize: '20px', letterSpacing: '0.05em' }}>
            #000000
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#0A0A0A' }}>BYD Carbon Black</div>
            <div style={{ fontSize: '13px', color: '#525252', marginTop: '4px' }}>Surface inverse, luxury trim & typography</div>
            <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#0A0A0A', marginTop: '8px', fontWeight: 600 }}>--byd-brand-black</div>
          </div>
        </div>

        {/* BYD Pure White */}
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E5E5', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <div style={{ height: '110px', background: 'var(--byd-brand-white, #FFFFFF)', borderBottom: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A0A0A', fontWeight: 800, fontSize: '20px', letterSpacing: '0.05em' }}>
            #FFFFFF
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#0A0A0A' }}>BYD Pure White</div>
            <div style={{ fontSize: '13px', color: '#525252', marginTop: '4px' }}>Clean background surface & inverted text</div>
            <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#737373', marginTop: '8px', fontWeight: 600 }}>--byd-brand-white</div>
          </div>
        </div>
      </div>

      {/* Red Shades */}
      <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E5E5E5' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700, color: '#0A0A0A' }}>BYD Red Functional Scale</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
          {[
            { name: 'Red 50', hex: '#FEF2F2', css: '--uedp-red-50', text: '#0A0A0A' },
            { name: 'Red 100', hex: '#FEE2E2', css: '--uedp-red-100', text: '#0A0A0A' },
            { name: 'Red 300', hex: '#FCA5A5', css: '--uedp-red-300', text: '#0A0A0A' },
            { name: 'Red 500 (Primary)', hex: '#EC1C24', css: '--byd-brand-primary', text: '#FFFFFF' },
            { name: 'Red 700 (Hover)', hex: '#C4151C', css: '--byd-brand-primary-hover', text: '#FFFFFF' },
            { name: 'Red 900 (Pressed)', hex: '#8C0711', css: '--byd-brand-primary-pressed', text: '#FFFFFF' },
          ].map(item => (
            <div key={item.name} style={{ border: '1px solid #E5E5E5', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '54px', backgroundColor: item.hex, color: item.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700 }}>
                {item.hex}
              </div>
              <div style={{ padding: '8px 10px', fontSize: '11px' }}>
                <div style={{ fontWeight: 600, color: '#0A0A0A' }}>{item.name}</div>
                <div style={{ color: '#737373', fontFamily: 'monospace', fontSize: '10px' }}>{item.css}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Scale */}
      <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid #E5E5E5' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700, color: '#0A0A0A' }}>BYD Neutral & Onyx Scale</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '10px' }}>
          {[
            { n: '50', h: '#FAFAFA', t: '#0A0A0A' },
            { n: '100', h: '#F5F5F5', t: '#0A0A0A' },
            { n: '200', h: '#E5E5E5', t: '#0A0A0A' },
            { n: '300', h: '#D4D4D4', t: '#0A0A0A' },
            { n: '400', h: '#A3A3A3', t: '#0A0A0A' },
            { n: '500', h: '#737373', t: '#FFF' },
            { n: '600', h: '#525252', t: '#FFF' },
            { n: '700', h: '#404040', t: '#FFF' },
            { n: '800', h: '#262626', t: '#FFF' },
            { n: '900', h: '#171717', t: '#FFF' },
            { n: '950', h: '#0A0A0A', t: '#FFF' },
          ].map(item => (
            <div key={item.n} style={{ border: '1px solid #E5E5E5', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '44px', backgroundColor: item.h, color: item.t, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700 }}>
                {item.n}
              </div>
              <div style={{ padding: '6px 8px', fontSize: '10px', textAlign: 'center', color: '#525252', fontFamily: 'monospace' }}>
                {item.h}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
