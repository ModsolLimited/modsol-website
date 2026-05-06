'use client'
import { useEffect, useRef } from 'react'

export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    async function drawMap() {
      const topoData = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r => r.json())
      const { feature } = await import('topojson-client') as any

      const countries = feature(topoData, topoData.objects.land)

      // Simple equirectangular projection
      function project(lon: number, lat: number): [number, number] {
        const x = (lon + 180) * (1000 / 360)
        const y = (90 - lat) * (500 / 180)
        return [x, y]
      }

      function coordsToPath(geometry: any): string {
        let d = ''
        const rings = geometry.type === 'Polygon'
          ? geometry.coordinates
          : geometry.type === 'MultiPolygon'
            ? geometry.coordinates.flat()
            : []

        for (const ring of rings) {
          let pathStarted = false
          let prevX = 0
          let prevY = 0

          for (let i = 0; i < ring.length; i++) {
            let lon = ring[i][0]
            const lat = ring[i][1]

            if (lat < -58 || lat > 83) {
              pathStarted = false
              continue
            }

            // Normalise longitude to -180 to 180
            while (lon > 180) lon -= 360
            while (lon < -180) lon += 360

            const [x, y] = project(lon, lat)

            // Break path on antimeridian crossing or large jumps
            if (pathStarted && (Math.abs(x - prevX) > 100 || Math.abs(y - prevY) > 80)) {
              pathStarted = false
            }

            if (!pathStarted) {
              d += `M ${x.toFixed(1)},${y.toFixed(1)} `
              pathStarted = true
            } else {
              d += `L ${x.toFixed(1)},${y.toFixed(1)} `
            }

            prevX = x
            prevY = y
          }
          d += 'Z '
        }
        return d
      }

      const svg = svgRef.current
      if (!svg) return

      // Clear existing country paths
      svg.querySelectorAll('.country-path').forEach(el => el.remove())

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      for (const feature of countries.features) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', coordsToPath(feature.geometry))
        path.setAttribute('class', 'country-path')
        path.setAttribute('fill', 'rgba(198,255,2,0.05)')
        path.setAttribute('stroke', '#C6FF02')
        path.setAttribute('stroke-width', '0.6')
        path.setAttribute('opacity', '0.6')
        g.appendChild(path)
      }
      svg.insertBefore(g, svg.firstChild?.nextSibling || null)
    }
    drawMap()
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 500"
      width="100%"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1000" height="560" fill="none"/>
    </svg>
  )
}
