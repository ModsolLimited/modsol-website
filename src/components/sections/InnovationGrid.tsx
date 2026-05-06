'use client'
import { useMemo } from 'react'

export default function InnovationGrid() {
  const opacities = useMemo(() =>
    Array.from({ length: 36 }, () => Math.random() * 0.7 + 0.15)
  , [])

  return (
    <>
      <style>{`
        .innovation-grid {
          display: grid;
          grid-template-columns: repeat(6, 52px);
          grid-template-rows: repeat(6, 52px);
          gap: 3px;
        }
        .innovation-block {
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          cursor: crosshair;
          border-top: 2px solid rgba(255,255,255,0.12);
          border-left: 2px solid rgba(255,255,255,0.12);
          border-right: 2px solid rgba(0,0,0,0.3);
          border-bottom: 2px solid rgba(0,0,0,0.3);
          background: #C6FF02;
        }
        .innovation-block:hover {
          transform: scale(1.18) !important;
          opacity: 1 !important;
          box-shadow: 0 0 20px rgba(198,255,2,0.6);
          z-index: 10;
          position: relative;
        }
      `}</style>
      <div className="innovation-grid">
        {opacities.map((op, i) => (
          <div
            key={i}
            className="innovation-block"
            style={{ opacity: op }}
          />
        ))}
      </div>
    </>
  )
}
