import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokensData from '../../styles/tokens-data.json';

const meta: Meta = {
  title: 'Design Tokens/Foundational Tokens',
  parameters: {
    docs: {
      description: {
        component: '### Foundational Design Tokens\n\nBorder Radii, Gap/Spacing scales, Padding scales, Opacity, and Max-Width tokens extracted from foundational-tokens.json.'
      }
    }
  }
};

export default meta;

export const BorderRadius: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#0F172A' }}>Border Radius Scale</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
        {Object.entries(tokensData.borderRadius as Record<string, { cssName: string; value: string; raw: number }>).map(([key, data]) => (
          <div key={key} style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                borderRadius: `var(${data.cssName})`
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A' }}>{key}</div>
              <div style={{ color: '#64748B', fontSize: '12px' }}>{data.value}</div>
              <div style={{ color: '#0284C7', fontFamily: 'monospace', fontSize: '10px' }}>{data.cssName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export const SpacingAndGap: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#0F172A' }}>Gap & Spacing Scale</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
        {Object.entries(tokensData.gap as Record<string, { cssName: string; value: string; raw: number }>).map(([key, data]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '90px', fontSize: '12px', fontWeight: 600, color: '#0F172A' }}>{key}</div>
            <div style={{ width: '60px', fontSize: '12px', color: '#64748B', fontFamily: 'monospace' }}>{data.value}</div>
            <div style={{ flex: 1, height: '24px', display: 'flex', alignItems: 'center' }}>
              <div style={{ height: '16px', width: `var(${data.cssName})`, background: '#0284C7', borderRadius: '4px' }} />
            </div>
            <div style={{ width: '130px', fontSize: '10px', color: '#64748B', fontFamily: 'monospace' }}>{data.cssName}</div>
          </div>
        ))}
      </div>
    </div>
  )
};

export const PaddingScale: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#0F172A' }}>Padding Scale</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {Object.entries(tokensData.padding as Record<string, { cssName: string; value: string; raw: number }>).map(([key, data]) => (
          <div key={key} style={{ background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontWeight: 600, fontSize: '13px', color: '#0F172A' }}>{key} ({data.value})</div>
            <div style={{ background: '#EFF6FF', border: '1px dashed #3B82F6', padding: `var(${data.cssName})`, borderRadius: '6px' }}>
              <div style={{ background: '#3B82F6', color: '#FFF', fontSize: '11px', textAlign: 'center', padding: '6px', borderRadius: '4px' }}>
                Content Box
              </div>
            </div>
            <div style={{ color: '#0284C7', fontFamily: 'monospace', fontSize: '10px' }}>{data.cssName}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
