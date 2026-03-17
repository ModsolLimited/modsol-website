'use client'

import { useEffect, useRef } from 'react'

const ROWS = [
  [{ text: 'BUILD.', yellow: true }, { text: 'DEMOUNTABLE.', yellow: false }],
  [{ text: 'DIFFERENT.', yellow: false }, { text: 'SCALABLE.', yellow: false }],
  [{ text: 'SUSTAINABLE.', yellow: false }, { text: 'BOLD.', yellow: true }],
]

export default function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const calculate = () => {
      const container = containerRef.current
      if (!container) return
      const availableWidth = container.offsetWidth * 0.82

      ROWS.forEach((_, ri) => {
        const row = rowRefs.current[ri]
        if (!row) return
        const spans = row.querySelectorAll('span')
        if (spans.length < 2) return

        let low = 10
        let high = 400
        let best = 10

        while (low <= high) {
          const mid = Math.floor((low + high) / 2)
          spans.forEach(s => {
            (s as HTMLElement).style.fontSize = mid + 'px'
          })
          const rowWidth = row.scrollWidth
          if (rowWidth <= availableWidth) {
            best = mid
            low = mid + 1
          } else {
            high = mid - 1
          }
        }

        spans.forEach(s => {
          (s as HTMLElement).style.fontSize = best + 'px'
        })
      })
    }

    calculate()
    const ro = new ResizeObserver(calculate)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="section-pad" style={{
      background: '#000',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {ROWS.map((row, ri) => (
          <div
            key={ri}
            ref={el => { rowRefs.current[ri] = el }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              lineHeight: '0.9',
              whiteSpace: 'nowrap',
            }}
          >
            {row.map((word, wi) => (
              <span
                key={wi}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '100px',
                  lineHeight: '0.9',
                  color: word.yellow ? '#C6FF02' : 'transparent',
                  WebkitTextStroke: word.yellow ? 'none' : '1px rgba(255,255,255,0.5)',
                  cursor: 'default',
                  transition: 'color 0.2s ease',
                  paddingRight: wi === 0 ? '0.08em' : '0',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = word.yellow ? '#C6FF02' : '#fff'
                  if (!word.yellow) (el.style as any).webkitTextStroke = 'none'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = word.yellow ? '#C6FF02' : 'transparent'
                  if (!word.yellow) (el.style as any).webkitTextStroke = '1px rgba(255,255,255,0.5)'
                }}
              >
                {word.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
