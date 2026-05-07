"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type GalleryImage = { src: string; product: string; category: string };

const allImages: GalleryImage[] = [
  // MOTORSPORT & AUTO
  { src: '/Modblock/MODBLOCK MOTORSPORT PORSCHE.png', product: 'MODBLOCK', category: 'MOTORSPORT & AUTO' },
  { src: '/Modblock/MODBLOCK MOTORSPORT MERCEDES BENZ.png', product: 'MODBLOCK', category: 'MOTORSPORT & AUTO' },
  { src: '/Modblock/MODBLOCK AUTOMOTIVE AUDI.png', product: 'MODBLOCK', category: 'MOTORSPORT & AUTO' },
  { src: '/Modblock/Modblock - Motorsport.png', product: 'MODBLOCK', category: 'MOTORSPORT & AUTO' },
  { src: '/Modblock/MODBLOCK AUTOMOTIVE AUDI 2.png', product: 'MODBLOCK', category: 'MOTORSPORT & AUTO' },
  { src: '/Modblock/MODBLOCK MOTORSPORT MERCEDES BENZ 2.png', product: 'MODBLOCK', category: 'MOTORSPORT & AUTO' },
  { src: '/Modframe/Aston Martin Internal.JPG', product: 'MODFRAME', category: 'MOTORSPORT & AUTO' },
  { src: '/Modframe/Renault.jpg', product: 'MODFRAME', category: 'MOTORSPORT & AUTO' },
  // EXHIBITIONS
  { src: '/Modblock/MODBLOCK EXHIBITION CONFERENCE SPACE.png', product: 'MODBLOCK', category: 'EXHIBITIONS' },
  { src: '/Modwall/Modwall - Exhibition.png', product: 'MODWALL', category: 'EXHIBITIONS' },
  { src: '/Modwall/Modwall - Exhibition2.png', product: 'MODWALL', category: 'EXHIBITIONS' },
  { src: '/Modwall/Modwall - Exhibition4.png', product: 'MODWALL', category: 'EXHIBITIONS' },
  { src: '/Modframe/Exhibition.jpg', product: 'MODFRAME', category: 'EXHIBITIONS' },
  { src: '/Modframe/Events-Ford-001.jpg', product: 'MODFRAME', category: 'EXHIBITIONS' },
  { src: '/Modblock/MODBLOCK EXHIBITION CARTIER 2.png', product: 'MODBLOCK', category: 'EXHIBITIONS' },
  { src: '/Modblock/CONFERENCE SPACE 2.png', product: 'MODBLOCK', category: 'EXHIBITIONS' },
  { src: '/Modblock/Modblock - Exhibition.png', product: 'MODBLOCK', category: 'EXHIBITIONS' },
  // SHOWS & FESTIVALS
  { src: '/Modblock/Modblock - Festival.png', product: 'MODBLOCK', category: 'SHOWS & FESTIVALS' },
  { src: '/Modwall/Modwall 1.jpg', product: 'MODWALL', category: 'SHOWS & FESTIVALS' },
  { src: '/Modframe/Oasis.JPG', product: 'MODFRAME', category: 'SHOWS & FESTIVALS' },
  { src: '/Modframe/NFL.JPG', product: 'MODFRAME', category: 'SHOWS & FESTIVALS' },
  { src: '/Modframe/The Politico Pub.JPG', product: 'MODFRAME', category: 'SHOWS & FESTIVALS' },
  { src: '/Modblock/MODBLOCK MOTORSPORT & FESTIVAL SHOW PORSCHE 3.png', product: 'MODBLOCK', category: 'SHOWS & FESTIVALS' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL REDBULL 2.png', product: 'MODBLOCK', category: 'SHOWS & FESTIVALS' },
  // RETAIL & BRAND
  { src: '/Modblock/MODBLOCK RETAIL ACTIVATION THE NORTH FACE.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL ACTIVATION THE NORTH FACE 2.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL CARTIER.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL ADIDAS.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL ADIDAS 3.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL PUMA.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL IKEA.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/Modblock Nike Retail.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modwall/Modwall - White Colour Shop.png', product: 'MODWALL', category: 'RETAIL & BRAND' },
  { src: '/Modwall/MODWALL SLATWALL.png', product: 'MODWALL', category: 'RETAIL & BRAND' },
  { src: '/Modwall/MODWALL - PEGBOARD.png', product: 'MODWALL', category: 'RETAIL & BRAND' },
  { src: '/Modblock/COCA-COLA Experiential 2.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK ACTIVATION NIKE 2.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL MARKETING PEPSI 2.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  { src: '/Modblock/MODBLOCK RETAIL PUMA 2.png', product: 'MODBLOCK', category: 'RETAIL & BRAND' },
  // EXPERIENTIAL
  { src: '/Modblock/MODBLOCK EXPERIENTIAL MARKETING NETFLIX.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL MARKETING PEPSI.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL REDBULL.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL PLAYSTATION.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modblock/MODBLOCK EXPERIENTIAL POP UP COFFEE SHOP.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modblock/MODBLOCK ACTIVATION GYM POD.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modblock/Modblock - VW.png', product: 'MODBLOCK', category: 'EXPERIENTIAL' },
  { src: '/Modframe/Events-Nugget-Box-17.jpg', product: 'MODFRAME', category: 'EXPERIENTIAL' },
  // HOSPITALITY
  { src: '/Modblock/Modblock Hospitality.png', product: 'MODBLOCK', category: 'HOSPITALITY' },
  { src: '/Modblock/MODBLOCK COMMERCIAL OFFICE.png', product: 'MODBLOCK', category: 'HOSPITALITY' },
  { src: '/Modblock/Gaucho - Modblock.png', product: 'MODBLOCK', category: 'HOSPITALITY' },
  { src: '/Modwall/Modwall - Office.png', product: 'MODWALL', category: 'HOSPITALITY' },
  { src: '/Modwall/Modwall - Dressing Room.png', product: 'MODWALL', category: 'HOSPITALITY' },
  { src: '/Modwall/Aston Martin Internal.JPG', product: 'MODWALL', category: 'HOSPITALITY' },
  { src: '/Modframe/Modframe 1.jpg', product: 'MODFRAME', category: 'HOSPITALITY' },
  { src: '/Modblock/COFFEE SHOP 2.png', product: 'MODBLOCK', category: 'HOSPITALITY' },
  { src: '/Modblock/MODBLOCK COMMERCIAL OFFICE 2.png', product: 'MODBLOCK', category: 'HOSPITALITY' },
  // DOMESTIC & COMMERCIAL
  { src: '/Modblock/MODBLOCK DOMESTIC RESIDENTIAL.png', product: 'MODBLOCK', category: 'DOMESTIC & COMMERCIAL' },
  { src: '/Modblock/MODBLOCK DOMESTIC GLAMPING POD.png', product: 'MODBLOCK', category: 'DOMESTIC & COMMERCIAL' },
  { src: '/Modblock/Modblock - Domestic.png', product: 'MODBLOCK', category: 'DOMESTIC & COMMERCIAL' },
  { src: '/Modblock/MODBLOCK DOMESTIC GLAMPING POD 2.png', product: 'MODBLOCK', category: 'DOMESTIC & COMMERCIAL' },
  { src: '/Modblock/MODBLOCK DOMESTIC RESIDENTIAL 2.png', product: 'MODBLOCK', category: 'DOMESTIC & COMMERCIAL' },
];

const filters = ['ALL', 'MOTORSPORT & AUTO', 'EXHIBITIONS', 'SHOWS & FESTIVALS', 'RETAIL & BRAND', 'EXPERIENTIAL', 'HOSPITALITY', 'DOMESTIC & COMMERCIAL'];

function getLabel(src: string): string {
  const file = src.split("/").pop() ?? "";
  return file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);
  const [validImages, setValidImages] = useState<typeof allImages>([]);

  const filterBarRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (filterBarRef.current?.offsetLeft || 0);
    scrollLeft.current = filterBarRef.current?.scrollLeft || 0;
  };
  const onMouseLeave = () => { isDragging.current = false; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (filterBarRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (filterBarRef.current) filterBarRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const results: typeof allImages = [];
    let loaded = 0;
    const total = allImages.length;

    allImages.forEach(img => {
      const testImg = new window.Image();
      testImg.onload = () => {
        results.push(img);
        loaded++;
        if (loaded === total) setValidImages([...results]);
      };
      testImg.onerror = () => {
        loaded++;
        if (loaded === total) setValidImages([...results]);
      };
      testImg.src = img.src;
    });
  }, []);

  const visibleImages = activeFilter === "ALL" ? validImages : validImages.filter((img) => img.category === activeFilter);

  const handleFilter = (f: string) => {
    setActiveFilter(f);
  };

  const openLightbox = (index: number) => setLightbox({ images: visibleImages, index });
  const closeLightbox = () => setLightbox(null);

  const lightboxNav = useCallback((dir: 1 | -1) => {
    setLightbox((lb) => {
      if (!lb) return null;
      const next = (lb.index + dir + lb.images.length) % lb.images.length;
      return { ...lb, index: next };
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNav(1);
      if (e.key === "ArrowLeft") lightboxNav(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, lightboxNav]);

  const current = lightbox ? lightbox.images[lightbox.index] : null;

  return (
    <>
      <style>{`
        .gallery-page { background: #000; min-height: 100vh; padding-top: 72px; }
        .gallery-header { padding: 20px clamp(40px, 4vw, 120px) 0; }
        .filter-bar {
          display: flex;
          align-items: stretch;
          border-top: 1px solid rgba(198,255,2,0.2);
          border-bottom: 1px solid rgba(198,255,2,0.2);
          background: #0A0A0A;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .filter-bar::-webkit-scrollbar { display: none; }
        .filter-btn {
          flex: 1;
          min-width: 100px;
          padding: 14px 20px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          background: transparent;
          border: none;
          border-right: 1px solid rgba(198,255,2,0.1);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-align: center;
        }
        .filter-btn:last-child { border-right: none; }
        .filter-btn:hover { color: rgba(255,255,255,0.85); background: rgba(198,255,2,0.04); }
        .filter-btn.active { color: #000; background: #C6FF02; border-right-color: transparent; }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; padding: 3px; }
        .gallery-cell { overflow: hidden; position: relative; aspect-ratio: 4/3; cursor: pointer; background: #111111; background-image: linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px); background-size: 32px 32px; }
        .gallery-cell.span2 { grid-column: span 2; aspect-ratio: 16/9; }
        .gallery-cell img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.75) grayscale(0.1); transition: filter 0.4s ease, transform 0.4s ease; display: block; }
        .gallery-cell:hover img { filter: brightness(1) grayscale(0); transform: scale(1.03); }
        .gallery-overlay { position: absolute; inset: 0; background: linear-gradient(transparent 50%, rgba(0,0,0,0.85)); opacity: 0; transition: opacity 0.3s ease; pointer-events: none; display: flex; flex-direction: column; justify-content: flex-end; padding: 16px; }
        .gallery-cell:hover .gallery-overlay { opacity: 1; }
        .overlay-product { font-family: var(--font-mono); font-size: 10px; color: #C6FF02; letter-spacing: 0.2em; text-transform: uppercase; }
        .overlay-label { font-family: var(--font-body); font-size: 11px; color: rgba(255,255,255,0.6); margin-top: 4px; line-height: 1.4; }
        .lightbox-overlay { position: fixed; inset: 0; z-index: 9000; background: rgba(0,0,0,0.96); display: flex; align-items: center; justify-content: center; }
        .lightbox-img { max-width: 90vw; max-height: 90vh; object-fit: contain; display: block; }
        .lightbox-close { position: absolute; top: 24px; right: 32px; font-family: var(--font-mono); font-size: 14px; color: rgba(255,255,255,0.5); cursor: pointer; background: none; border: none; letter-spacing: 0.1em; padding: 8px; transition: color 0.2s; }
        .lightbox-close:hover { color: #C6FF02; }
        .lightbox-arrow { position: absolute; top: 50%; transform: translateY(-50%); font-family: var(--font-mono); font-size: 20px; color: rgba(255,255,255,0.4); cursor: pointer; background: none; border: none; padding: 16px; transition: color 0.2s; }
        .lightbox-arrow:hover { color: #C6FF02; }
        .lightbox-arrow-left { left: 24px; }
        .lightbox-arrow-right { right: 24px; }
        .lightbox-product { position: absolute; bottom: 24px; left: 32px; font-family: var(--font-mono); font-size: 10px; color: #C6FF02; letter-spacing: 0.2em; text-transform: uppercase; }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-cell.span2 { grid-column: span 1; aspect-ratio: 4/3; }
          .gallery-header { padding: 16px 24px 0; }
        }
      `}</style>

      <div className="gallery-page">
        <div className="gallery-header">
          <p className="section-label">The Gallery</p>
        </div>

        <div
          className="filter-bar gallery-filter-bar"
          ref={filterBarRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => handleFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {validImages.length === 0 && (
          <div style={{ padding: '80px 64px', color: 'rgba(198,255,2,0.4)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em' }}>
            LOADING GALLERY...
          </div>
        )}

        <div className="gallery-grid">
          {visibleImages.map((img, i) => (
            <div
              key={`${img.src}-${img.category}-${i}`}
              className={`gallery-cell${(i + 1) % 7 === 0 ? " span2" : ""}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={getLabel(img.src)}
                loading="eager"
                onError={(e) => { (e.target as HTMLElement).closest('.gallery-cell')?.setAttribute('style', 'display:none'); }}
              />
              <div className="gallery-overlay">
                <div className="overlay-product">{img.product}</div>
                <div className="overlay-label">{getLabel(img.src)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && current && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕ CLOSE</button>
          <button className="lightbox-arrow lightbox-arrow-left" onClick={(e) => { e.stopPropagation(); lightboxNav(-1); }}>←</button>
          <img
            className="lightbox-img"
            src={current.src}
            alt={getLabel(current.src)}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-arrow lightbox-arrow-right" onClick={(e) => { e.stopPropagation(); lightboxNav(1); }}>→</button>
          <div className="lightbox-product">{current.product} — {getLabel(current.src)}</div>
        </div>
      )}
    </>
  );
}
