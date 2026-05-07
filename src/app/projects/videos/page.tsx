"use client";

import { useState } from "react";

const videos = [
  {
    src: "/Modblock/MODBLOCK ANIMATION 20-10-2025.mp4",
    title: "THE MODBLOCK",
    label: "MODBLOCK — PRODUCT ANIMATION",
    description: "Full system animation showcasing the Modblock platform — structure, configuration and deployment.",
    product: "MODBLOCK",
  },
  {
    src: "/Modwall/MODWALL 3D ANIMATION_SHORT VIDEO - For Sharing.mp4",
    title: "THE MODWALL",
    label: "MODWALL — PRODUCT ANIMATION",
    description: "3D animation demonstrating the Modwall panel system, surface options and installation sequence.",
    product: "MODWALL",
  },
];

export default function VideosPage() {
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <>
      <style>{`
        .videos-page { background: #000; min-height: 100vh; padding-top: 72px; }
        .videos-header { padding: 40px 48px 32px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .videos-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 0;
          align-items: stretch;
        }
        .video-player-col { padding: 32px 32px 32px 48px; display: flex; flex-direction: column; }
        .video-player-wrap {
          border: 1px solid rgba(198,255,2,0.5);
          outline: 1px solid rgba(198,255,2,0.12);
          outline-offset: 4px;
          box-shadow: 0 0 60px rgba(198,255,2,0.06);
          overflow: hidden;
          position: relative;
        }
        .video-player-wrap video { width: 100%; height: 100%; object-fit: cover; display: block; }
        .video-corner { position: absolute; width: 16px; height: 16px; z-index: 5; }
        .video-corner-tl { top: 0; left: 0; border-top: 2px solid #C6FF02; border-left: 2px solid #C6FF02; }
        .video-corner-tr { top: 0; right: 0; border-top: 2px solid #C6FF02; border-right: 2px solid #C6FF02; }
        .video-corner-bl { bottom: 0; left: 0; border-bottom: 2px solid #C6FF02; border-left: 2px solid #C6FF02; }
        .video-corner-br { bottom: 0; right: 0; border-bottom: 2px solid #C6FF02; border-right: 2px solid #C6FF02; }
        .video-player-meta { margin-top: 24px; }
        .video-player-title { font-family: var(--font-display); font-size: clamp(28px, 4vw, 48px); color: var(--white); line-height: 1; letter-spacing: 0.02em; }
        .video-player-desc { font-family: var(--font-body); font-size: 14px; color: var(--muted); line-height: 1.75; margin-top: 12px; max-width: 560px; }
        .video-selector {
          height: 100%;
          max-height: 100%;
          overflow-y: auto;
          position: sticky;
          top: 72px;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid rgba(198,255,2,0.5);
          background: #0A0A0A;
          background-image: linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .video-card {
          padding: 24px 20px;
          cursor: pointer;
          border-bottom: 1px solid rgba(198,255,2,0.2);
          transition: background 0.25s ease;
          flex-shrink: 0;
        }
        .video-card.active {
          background: rgba(198,255,2,0.08);
          border-left: 3px solid #C6FF02;
          border-top: 1px solid rgba(198,255,2,0.4);
          border-bottom: 1px solid rgba(198,255,2,0.4);
          padding-left: 17px;
        }
        .video-card:hover:not(.active) { background: rgba(255,255,255,0.03); }
        .video-card-thumb {
          height: 80px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .video-card-product { font-family: var(--font-display); font-size: 22px; color: #C6FF02; letter-spacing: 0.05em; }
        .video-card-label { font-family: var(--font-mono); font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 6px; }
        @media (max-width: 768px) {
          .videos-layout {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .video-player-col {
            width: 100% !important;
            padding: 80px 16px 16px !important;
          }
          .video-selector {
            position: static !important;
            height: auto !important;
            width: 100% !important;
            border-left: none !important;
            border-top: 2px solid rgba(198,255,2,0.3) !important;
            display: flex !important;
            flex-direction: column !important;
            counter-reset: video-item !important;
          }
          .video-card {
            display: grid !important;
            grid-template-columns: 28px 70px 1fr !important;
            align-items: center !important;
            gap: 10px !important;
            padding: 12px 16px !important;
            min-width: unset !important;
            width: 100% !important;
            box-sizing: border-box !important;
            counter-increment: video-item !important;
          }
          .video-card::before {
            content: counter(video-item, decimal-leading-zero) !important;
            font-family: var(--font-mono) !important;
            font-size: 11px !important;
            color: #C6FF02 !important;
            flex-shrink: 0 !important;
            align-self: center !important;
          }
          .video-card-thumbnail {
            width: 70px !important;
            height: 44px !important;
            min-height: unset !important;
            margin-bottom: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }
          .video-card-title {
            display: none !important;
          }
          .video-card-subtitle {
            font-size: 9px !important;
            letter-spacing: 0.08em !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
        }
      `}</style>

      <div className="videos-page">
        <div className="videos-header">
          <p className="section-label">The Videos</p>
        </div>

        <div className="videos-layout video-layout">
          {/* Player column */}
          <div className="video-player-col">
            <div className="video-player-wrap">
              <div className="video-corner video-corner-tl" />
              <div className="video-corner video-corner-tr" />
              <div className="video-corner video-corner-bl" />
              <div className="video-corner video-corner-br" />
              <video
                key={active}
                controls
                autoPlay={false}
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={current.src} type="video/mp4" />
              </video>
            </div>
            <div className="video-player-meta">
              <div className="video-player-title">{current.title}</div>
              <p className="video-player-desc">{current.description}</p>
            </div>
          </div>

          {/* Selector column */}
          <div className="video-selector">
            {videos.map((v, i) => (
              <div
                key={i}
                className={`video-card${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="video-card-thumb video-card-thumbnail">
                  <span className="video-card-product">{v.product}</span>
                </div>
                <div className="video-card-product video-card-title" style={{ fontSize: "18px" }}>{v.title}</div>
                <div className="video-card-label video-card-subtitle">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
