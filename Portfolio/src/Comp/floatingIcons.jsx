import React from 'react';

const CircularTechStack = () => {
  const blobPath = (cx, cy, points, outerR, innerR) => {
    const pts = [];
    const step = Math.PI / points;

    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = i * step;

      pts.push({
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      });
    }

    const mid = (a, b) => ({
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2,
    });

    let d = `M ${
      mid(pts[pts.length - 1], pts[0]).x
    } ${mid(pts[pts.length - 1], pts[0]).y} `;

    for (let i = 0; i < pts.length; i++) {
      const next = pts[(i + 1) % pts.length];
      const m = mid(pts[i], next);

      d += `Q ${pts[i].x} ${pts[i].y} ${m.x} ${m.y} `;
    }

    return d + 'Z';
  };

  const blobD = blobPath(50, 50, 10, 42, 34);

  const stack = [
    {
      key: 'html',
      top: 79,
      left: 259,
      color: '#E44D26',
      glow: 'rgba(228,77,38,0.55)',
      icon: (
        <svg viewBox='0 0 24 24' width='34' height='34'>
          <path
            fill='white'
            d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z'
          />
        </svg>
      ),
    },

    {
      key: 'css',
      top: 169,
      left: 415,
      color: '#264DE4',
      glow: 'rgba(38,77,228,0.55)',
      icon: (
        <svg viewBox='0 0 24 24' width='34' height='34'>
          <path
            fill='white'
            d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.351l5.373-1.53L18.59 4.414z'
          />
        </svg>
      ),
    },

    {
      key: 'js',
      top: 349,
      left: 415,
      color: '#F0DB4F',
      glow: 'rgba(240,219,79,0.55)',
      icon: <span className='text-[17px] font-bold text-[#1a1a1a]'>JS</span>,
    },

    {
      key: 'react',
      top: 439,
      left: 259,
      color: '#20232A',
      glow: 'rgba(97,218,251,0.55)',
      icon: (
        <svg
          viewBox='0 0 24 24'
          width='34'
          height='34'
          fill='none'
          stroke='#61dafb'
          strokeWidth='1.4'
        >
          <circle cx='12' cy='12' r='2' fill='#61dafb' stroke='none' />
          <ellipse cx='12' cy='12' rx='9' ry='3.6' />
          <ellipse
            cx='12'
            cy='12'
            rx='9'
            ry='3.6'
            transform='rotate(60 12 12)'
          />
          <ellipse
            cx='12'
            cy='12'
            rx='9'
            ry='3.6'
            transform='rotate(120 12 12)'
          />
        </svg>
      ),
    },

    {
      key: 'tailwind',
      top: 349,
      left: 103,
      color: '#38BDF8',
      glow: 'rgba(56,189,248,0.55)',
      icon: (
        <svg
          viewBox='0 0 24 24'
          width='30'
          height='30'
          fill='none'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M4 14c1-3.5 3-5 6-5s4 1.5 5 3.5c1-3.5 3-5 6-5-1 3.5-3 5-6 5s-4-1.5-5-3.5c-1 3.5-3 5-6 5z' />
        </svg>
      ),
    },

    {
      key: 'framer',
      top: 169,
      left: 103,
      color: '#0a0a0a',
      glow: 'rgba(120,120,120,0.55)',
      icon: (
        <svg viewBox='0 0 24 24' width='28' height='28' fill='white'>
          <path d='M6 3h12v6h-6l6 6h-6v6l-6-6v-6z' />
        </svg>
      ),
    },
  ];

  return (
    <div className='relative flex h-[600px] w-[600px] items-center justify-center tech-orbit'>
      {/* Circular dashed ring */}
      <svg
        viewBox='0 0 600 600'
        width='600'
        height='600'
        className='absolute inset-0'
      >
        <circle
          cx='300'
          cy='300'
          r='180'
          fill='none'
          stroke='rgb(148 163 184 / 0.5)'
          strokeWidth='1.5'
          strokeDasharray='4 8'
        />
      </svg>

      {/* Tech stack */}
      {stack.map((item) => (
        <div
          key={item.key}
          className='absolute h-[82px] w-[82px]'
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          {/* Glow */}
          <div className='absolute -inset-2.5 rounded-full opacity-70 blur-[2px]' />

          {/* Blob */}
          <svg
            viewBox='0 0 100 100'
            width='82'
            height='82'
            className='absolute inset-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] '
          >
            <path fill={item.color} d={blobD} />
          </svg>

          {/* Icon */}
          <div className='absolute inset-0 flex items-center justify-center tech-icon'>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircularTechStack;
