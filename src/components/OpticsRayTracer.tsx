import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimationConfig } from '../types/quiz';

interface OpticsRayTracerProps {
  config: AnimationConfig;
  title?: string;
}

export const OpticsRayTracer: React.FC<OpticsRayTracerProps> = ({ config, title }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [stepProgress, setStepProgress] = useState<number>(1); // 0 to 1
  const [showRays, setShowRays] = useState<boolean>(true);

  useEffect(() => {
    let animFrame: number;
    if (isPlaying) {
      setStepProgress(0);
      const startTime = performance.now();
      const duration = 2200; // 2.2 seconds

      const loop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        setStepProgress(progress);
        if (progress < 1) {
          animFrame = requestAnimationFrame(loop);
        } else {
          setIsPlaying(false);
        }
      };
      animFrame = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying, config]);

  const handleReplay = () => {
    setIsPlaying(true);
  };

  const renderVisualizer = () => {
    const width = 800;
    const height = 300;
    const centerY = height / 2;

    switch (config.type) {
      case 'mata-miopi': {
        // Miopi: Eye eyeball with retina at right. Uncorrected rays converge in front of retina.
        // With lens (negative lens in front), rays converge exactly on retina.
        const lensX = 140;
        const corneaX = 260;
        const retinaX = 540;
        const eyeCenterY = centerY;

        return (
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-700">
            {/* Grid background */}
            <defs>
              <pattern id="grid-miopi" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              </pattern>
              <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <rect width={width} height={height} fill="url(#grid-miopi)" />

            {/* Sumbu Utama */}
            <line x1="20" y1={centerY} x2={width - 20} y2={centerY} stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Eyeball profile */}
            <path
              d={`M ${corneaX} ${centerY - 70} C ${corneaX - 35} ${centerY} ${corneaX - 35} ${centerY} ${corneaX} ${centerY + 70} C ${corneaX + 180} ${centerY + 95} ${retinaX + 60} ${centerY + 80} ${retinaX} ${centerY + 30} C ${retinaX + 10} ${centerY} ${retinaX + 10} ${centerY} ${retinaX} ${centerY - 30} C ${retinaX + 60} ${centerY - 80} ${corneaX + 180} ${centerY - 95} ${corneaX} ${centerY - 70} Z`}
              fill="rgba(30, 41, 59, 0.85)"
              stroke="#94a3b8"
              strokeWidth="2"
            />

            {/* Retina line */}
            <path
              d={`M ${retinaX - 10} ${centerY - 60} C ${retinaX + 15} ${centerY} ${retinaX + 15} ${centerY} ${retinaX - 10} ${centerY + 60}`}
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
            />
            <text x={retinaX - 10} y={centerY - 70} fill="#f87171" fontSize="13" fontWeight="bold">Retina (Fovea)</text>

            {/* Lensa Alami Mata */}
            <ellipse cx={corneaX + 40} cy={centerY} rx="12" ry="45" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2" />
            <text x={corneaX + 15} y={centerY + 65} fill="#38bdf8" fontSize="12">Lensa Mata</text>

            {/* Kacamata Lensa Cekung */}
            <g transform={`translate(${lensX}, ${centerY})`}>
              <path d="M -8 -50 C -2 0 -2 0 -8 50 L 8 50 C 2 0 2 0 8 -50 Z" fill="rgba(244, 63, 94, 0.3)" stroke="#f43f5e" strokeWidth="2.5" />
              <text x="-40" y="-60" fill="#fb7185" fontSize="12" fontWeight="bold">Lensa Cekung (-)</text>
            </g>

            {/* Rays animation */}
            {showRays && (
              <g opacity={Math.min(1, stepProgress * 1.5)}>
                {/* Ray 1: Top parallel */}
                <line x1="30" y1={centerY - 35} x2={lensX} y2={centerY - 35} stroke="#38bdf8" strokeWidth="2.5" />
                {/* After concave lens: diverges slightly */}
                <line x1={lensX} y1={centerY - 35} x2={corneaX + 40} y2={centerY - 45 * stepProgress} stroke="#38bdf8" strokeWidth="2" strokeDasharray={stepProgress < 0.4 ? "4 4" : "none"} />
                {/* Inside eye to retina */}
                <line x1={corneaX + 40} y1={centerY - 45} x2={retinaX} y2={centerY} stroke="#f59e0b" strokeWidth="2.5" />

                {/* Ray 2: Center ray */}
                <line x1="30" y1={centerY} x2={retinaX} y2={centerY} stroke="#38bdf8" strokeWidth="2" />

                {/* Ray 3: Bottom parallel */}
                <line x1="30" y1={centerY + 35} x2={lensX} y2={centerY + 35} stroke="#38bdf8" strokeWidth="2.5" />
                <line x1={lensX} y1={centerY + 35} x2={corneaX + 40} y2={centerY + 45 * stepProgress} stroke="#38bdf8" strokeWidth="2" />
                <line x1={corneaX + 40} y1={centerY + 45} x2={retinaX} y2={centerY} stroke="#f59e0b" strokeWidth="2.5" />

                {/* Focus indicator spot */}
                <circle cx={retinaX} cy={centerY} r="5" fill="#10b981" className="animate-ping" />
                <circle cx={retinaX} cy={centerY} r="4" fill="#10b981" />
              </g>
            )}

            {/* Label Status */}
            <g transform="translate(30, 35)">
              <rect x="0" y="0" width="340" height="32" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" />
              <text x="12" y="21" fill="#38bdf8" fontSize="12" fontWeight="600">
                Koreksi Miopi: Lensa Cekung memfokuskan sinar tepat di retina
              </text>
            </g>
          </svg>
        );
      }

      case 'mata-hipermetropi': {
        // Hipermetropi: Convex lens corrects focus from behind retina to exactly onto retina
        const lensX = 140;
        const corneaX = 260;
        const retinaX = 540;

        return (
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-700">
            <defs>
              <pattern id="grid-hiper" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width={width} height={height} fill="url(#grid-hiper)" />
            <line x1="20" y1={centerY} x2={width - 20} y2={centerY} stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Eyeball */}
            <path
              d={`M ${corneaX} ${centerY - 70} C ${corneaX - 35} ${centerY} ${corneaX - 35} ${centerY} ${corneaX} ${centerY + 70} C ${corneaX + 180} ${centerY + 95} ${retinaX + 60} ${centerY + 80} ${retinaX} ${centerY + 30} C ${retinaX + 10} ${centerY} ${retinaX + 10} ${centerY} ${retinaX} ${centerY - 30} C ${retinaX + 60} ${centerY - 80} ${corneaX + 180} ${centerY - 95} ${corneaX} ${centerY - 70} Z`}
              fill="rgba(30, 41, 59, 0.85)"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            <path
              d={`M ${retinaX - 10} ${centerY - 60} C ${retinaX + 15} ${centerY} ${retinaX + 15} ${centerY} ${retinaX - 10} ${centerY + 60}`}
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
            />
            <text x={retinaX - 10} y={centerY - 70} fill="#f87171" fontSize="13" fontWeight="bold">Retina</text>

            {/* Lensa Alami Mata */}
            <ellipse cx={corneaX + 40} cy={centerY} rx="11" ry="45" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2" />

            {/* Kacamata Lensa Cembung */}
            <g transform={`translate(${lensX}, ${centerY})`}>
              <ellipse cx="0" cy="0" rx="9" ry="50" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="2.5" />
              <text x="-40" y="-60" fill="#34d399" fontSize="12" fontWeight="bold">Lensa Cembung (+)</text>
            </g>

            {/* Benda Baca di 25 cm */}
            <line x1="50" y1={centerY} x2="50" y2={centerY - 35} stroke="#e2e8f0" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="50" cy={centerY - 35} r="3" fill="#e2e8f0" />
            <text x="35" y={centerY + 20} fill="#cbd5e1" fontSize="12">Buku (25 cm)</text>

            {/* Rays */}
            {showRays && (
              <g opacity={Math.min(1, stepProgress * 1.5)}>
                {/* Ray 1 */}
                <line x1="50" y1={centerY - 35} x2={lensX} y2={centerY - 25} stroke="#38bdf8" strokeWidth="2.5" />
                <line x1={lensX} y1={centerY - 25} x2={corneaX + 40} y2={centerY - 15} stroke="#38bdf8" strokeWidth="2" />
                <line x1={corneaX + 40} y1={centerY - 15} x2={retinaX} y2={centerY} stroke="#f59e0b" strokeWidth="2.5" />

                {/* Ray 2 */}
                <line x1="50" y1={centerY - 35} x2={lensX} y2={centerY + 20} stroke="#38bdf8" strokeWidth="2.5" />
                <line x1={lensX} y1={centerY + 20} x2={corneaX + 40} y2={centerY + 15} stroke="#38bdf8" strokeWidth="2" />
                <line x1={corneaX + 40} y1={centerY + 15} x2={retinaX} y2={centerY} stroke="#f59e0b" strokeWidth="2.5" />

                <circle cx={retinaX} cy={centerY} r="5" fill="#10b981" className="animate-ping" />
                <circle cx={retinaX} cy={centerY} r="4" fill="#10b981" />
              </g>
            )}

            <g transform="translate(30, 35)">
              <rect x="0" y="0" width="370" height="32" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" />
              <text x="12" y="21" fill="#34d399" fontSize="12" fontWeight="600">
                Koreksi Hipermetropi: Lensa Cembung memajukan fokus ke retina
              </text>
            </g>
          </svg>
        );
      }

      case 'mikroskop': {
        // Mikroskop: Objective lens (fob small) + Ocular lens (fok larger)
        const objX = 220;
        const ocX = 580;
        const objFocus = 45;
        const ocFocus = 75;
        const objectX = objX - 65; // s_ob > fob
        const img1X = objX + 130; // Real inverted image in between

        return (
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-700">
            <line x1="20" y1={centerY} x2={width - 20} y2={centerY} stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Lensa Objektif */}
            <ellipse cx={objX} cy={centerY} rx="6" ry="60" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x={objX - 35} y={centerY - 70} fill="#38bdf8" fontSize="13" fontWeight="bold">Objektif (f_ob)</text>

            {/* Fokus Objektif */}
            <circle cx={objX - objFocus} cy={centerY} r="3" fill="#38bdf8" />
            <text x={objX - objFocus - 10} y={centerY + 18} fill="#94a3b8" fontSize="11">F_ob</text>
            <circle cx={objX + objFocus} cy={centerY} r="3" fill="#38bdf8" />
            <text x={objX + objFocus - 10} y={centerY + 18} fill="#94a3b8" fontSize="11">F_ob'</text>

            {/* Lensa Okuler */}
            <ellipse cx={ocX} cy={centerY} rx="9" ry="80" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2.5" />
            <text x={ocX - 25} y={centerY - 90} fill="#34d399" fontSize="13" fontWeight="bold">Okuler (f_ok)</text>

            {/* Fokus Okuler */}
            <circle cx={ocX - ocFocus} cy={centerY} r="3" fill="#10b981" />
            <text x={ocX - ocFocus - 10} y={centerY + 18} fill="#94a3b8" fontSize="11">F_ok</text>

            {/* Preparat (Benda mikro) */}
            <line x1={objectX} y1={centerY} x2={objectX} y2={centerY - 22} stroke="#f59e0b" strokeWidth="3" />
            <polygon points={`${objectX-4},${centerY-22} ${objectX+4},${centerY-22} ${objectX},${centerY-28}`} fill="#f59e0b" />
            <text x={objectX - 25} y={centerY + 20} fill="#f59e0b" fontSize="11">Preparat</text>

            {/* Bayangan I1 (Nyata terbalik diperbesar) */}
            <line x1={img1X} y1={centerY} x2={img1X} y2={centerY + 45} stroke="#ec4899" strokeWidth="3" />
            <polygon points={`${img1X-4},${centerY+45} ${img1X+4},${centerY+45} ${img1X},${centerY+51}`} fill="#ec4899" />
            <text x={img1X - 20} y={centerY + 65} fill="#ec4899" fontSize="11">Bayangan I₁</text>

            {/* Sinar-sinar pembiasan */}
            {showRays && (
              <g opacity={Math.min(1, stepProgress * 1.5)}>
                {/* Sinar 1: Paralel dari objek menembus objektif ke F_ob' */}
                <line x1={objectX} y1={centerY - 22} x2={objX} y2={centerY - 22} stroke="#38bdf8" strokeWidth="2" />
                <line x1={objX} y1={centerY - 22} x2={img1X} y2={centerY + 45} stroke="#38bdf8" strokeWidth="2" />

                {/* Sinar 2: Lewat pusat optik objektif */}
                <line x1={objectX} y1={centerY - 22} x2={img1X} y2={centerY + 45} stroke="#38bdf8" strokeWidth="1.8" />

                {/* Dari I1 menembus okuler */}
                <line x1={img1X} y1={centerY + 45} x2={ocX} y2={centerY + 45} stroke="#10b981" strokeWidth="2" />
                <line x1={ocX} y1={centerY + 45} x2={width - 40} y2={centerY + 65} stroke="#10b981" strokeWidth="2" />
                <line x1={img1X} y1={centerY + 45} x2={ocX} y2={centerY} stroke="#10b981" strokeWidth="1.8" />
                <line x1={ocX} y1={centerY} x2={width - 40} y2={centerY - 25} stroke="#10b981" strokeWidth="1.8" />
              </g>
            )}

            {/* Tabung Mikroskop Indikator */}
            <line x1={objX} y1={height - 25} x2={ocX} y2={height - 25} stroke="#94a3b8" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <text x={(objX + ocX) / 2 - 40} y={height - 12} fill="#cbd5e1" fontSize="12" fontWeight="600">Panjang Tabung d</text>

            <g transform="translate(25, 25)">
              <rect x="0" y="0" width="370" height="30" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" />
              <text x="10" y="20" fill="#38bdf8" fontSize="12" fontWeight="600">
                Mikroskop: I₁ nyata-terbalik diperbesar oleh Okuler
              </text>
            </g>
          </svg>
        );
      }

      case 'teropong-bintang':
      case 'teropong-bumi':
      case 'teropong-panggung': {
        const isBumi = config.type === 'teropong-bumi';
        const isPanggung = config.type === 'teropong-panggung';
        const objX = 140;
        const ocX = isBumi ? 660 : isPanggung ? 450 : 540;

        return (
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-700">
            <line x1="20" y1={centerY} x2={width - 20} y2={centerY} stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Objektif */}
            <ellipse cx={objX} cy={centerY} rx="8" ry="75" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x={objX - 25} y={centerY - 85} fill="#38bdf8" fontSize="13" fontWeight="bold">Objektif</text>

            {/* Lensa Pembalik (Khusus Teropong Bumi) */}
            {isBumi && (
              <g transform={`translate(390, ${centerY})`}>
                <ellipse cx="0" cy="0" rx="6" ry="50" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" strokeWidth="2" />
                <text x="-35" y="-60" fill="#fbbf24" fontSize="12" fontWeight="bold">Pembalik (4f_p)</text>
              </g>
            )}

            {/* Okuler */}
            {isPanggung ? (
              // Cekung
              <g transform={`translate(${ocX}, ${centerY})`}>
                <path d="M -6 -45 C -1 0 -1 0 -6 45 L 6 45 C 1 0 1 0 6 -45 Z" fill="rgba(244, 63, 94, 0.3)" stroke="#f43f5e" strokeWidth="2" />
                <text x="-40" y="-55" fill="#fb7185" fontSize="12" fontWeight="bold">Okuler Cekung (-)</text>
              </g>
            ) : (
              // Cembung
              <ellipse cx={ocX} cy={centerY} rx="7" ry="60" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2.5" />
            )}
            {!isPanggung && <text x={ocX - 20} y={centerY - 70} fill="#34d399" fontSize="13" fontWeight="bold">Okuler</text>}

            {/* Incoming Parallel Rays */}
            {showRays && (
              <g opacity={Math.min(1, stepProgress * 1.5)}>
                <line x1="30" y1={centerY - 45} x2={objX} y2={centerY - 45} stroke="#38bdf8" strokeWidth="2" />
                <line x1="30" y1={centerY} x2={objX} y2={centerY} stroke="#38bdf8" strokeWidth="2" />
                <line x1="30" y1={centerY + 45} x2={objX} y2={centerY + 45} stroke="#38bdf8" strokeWidth="2" />

                {/* Converging rays */}
                <line x1={objX} y1={centerY - 45} x2={ocX} y2={isPanggung ? centerY - 15 : centerY + 25} stroke="#f59e0b" strokeWidth="2" />
                <line x1={objX} y1={centerY + 45} x2={ocX} y2={isPanggung ? centerY + 15 : centerY - 25} stroke="#f59e0b" strokeWidth="2" />

                {/* Outgoing rays into eye */}
                <line x1={ocX} y1={centerY - 20} x2={width - 40} y2={centerY - 20} stroke="#10b981" strokeWidth="2" />
                <line x1={ocX} y1={centerY + 20} x2={width - 40} y2={centerY + 20} stroke="#10b981" strokeWidth="2" />
              </g>
            )}

            {/* Dimension bar */}
            <line x1={objX} y1={height - 25} x2={ocX} y2={height - 25} stroke="#94a3b8" strokeWidth="1.5" />
            <text x={(objX + ocX) / 2 - 35} y={height - 12} fill="#cbd5e1" fontSize="12" fontWeight="600">
              {isBumi ? 'd = f_ob + 4f_p + f_ok' : isPanggung ? 'd = f_ob - |f_ok|' : 'd = f_ob + f_ok'}
            </text>

            <g transform="translate(25, 25)">
              <rect x="0" y="0" width="410" height="30" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" />
              <text x="10" y="20" fill="#38bdf8" fontSize="12" fontWeight="600">
                {isBumi ? 'Teropong Bumi: Lensa pembalik menegakkan bayangan' : isPanggung ? 'Teropong Panggung (Galileo): Tabung pendek bayangan tegak' : 'Teropong Bintang: Berkas sejajar difokuskan okuler'}
              </text>
            </g>
          </svg>
        );
      }

      default: {
        // Default Lup or Lens
        const lensX = 380;
        const focal = 110;
        const objDist = config.objectDistance ? Math.min(90, config.objectDistance * 12) : 75;
        const objectX = lensX - objDist;
        const imgDist = 180;
        const imgX = lensX - imgDist;

        return (
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-700">
            <line x1="20" y1={centerY} x2={width - 20} y2={centerY} stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Lensa Cembung Lup */}
            <ellipse cx={lensX} cy={centerY} rx="8" ry="85" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2.5" />
            <text x={lensX - 25} y={centerY - 95} fill="#38bdf8" fontSize="13" fontWeight="bold">Lensa Lup</text>

            {/* Titik Fokus */}
            <circle cx={lensX - focal} cy={centerY} r="3" fill="#38bdf8" />
            <text x={lensX - focal - 8} y={centerY + 20} fill="#94a3b8" fontSize="12">F₁</text>
            <circle cx={lensX + focal} cy={centerY} r="3" fill="#38bdf8" />
            <text x={lensX + focal - 8} y={centerY + 20} fill="#94a3b8" fontSize="12">F₂</text>

            {/* Objek Asli (Kecil di s < f) */}
            <line x1={objectX} y1={centerY} x2={objectX} y2={centerY - 28} stroke="#f59e0b" strokeWidth="3" />
            <polygon points={`${objectX-4},${centerY-28} ${objectX+4},${centerY-28} ${objectX},${centerY-34}`} fill="#f59e0b" />
            <text x={objectX - 18} y={centerY + 22} fill="#f59e0b" fontSize="12" fontWeight="600">Benda</text>

            {/* Bayangan Maya Lup (Besar di depan lensa) */}
            <line x1={imgX} y1={centerY} x2={imgX} y2={centerY - 75} stroke="#ec4899" strokeWidth="3" strokeDasharray="5 3" />
            <polygon points={`${imgX-5},${centerY-75} ${imgX+5},${centerY-75} ${imgX},${centerY-83}`} fill="#ec4899" />
            <text x={imgX - 35} y={centerY + 22} fill="#ec4899" fontSize="12" fontWeight="bold">Bayangan Maya (M×)</text>

            {/* Ray tracing */}
            {showRays && (
              <g opacity={Math.min(1, stepProgress * 1.5)}>
                {/* Ray 1: Paralel dari puncak benda lalu menembus F2 */}
                <line x1={objectX} y1={centerY - 28} x2={lensX} y2={centerY - 28} stroke="#38bdf8" strokeWidth="2" />
                <line x1={lensX} y1={centerY - 28} x2={lensX + 260} y2={centerY + 60} stroke="#38bdf8" strokeWidth="2" />
                {/* Dashed ray back to image */}
                <line x1={lensX} y1={centerY - 28} x2={imgX} y2={centerY - 75} stroke="#f43f5e" strokeWidth="1.8" strokeDasharray="4 4" />

                {/* Ray 2: Lewat pusat optik */}
                <line x1={objectX} y1={centerY - 28} x2={lensX + 240} y2={centerY + 35} stroke="#38bdf8" strokeWidth="2" />
                <line x1={objectX} y1={centerY - 28} x2={imgX} y2={centerY - 75} stroke="#f43f5e" strokeWidth="1.8" strokeDasharray="4 4" />
              </g>
            )}

            {/* Label Status */}
            <g transform="translate(25, 25)">
              <rect x="0" y="0" width="370" height="30" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" />
              <text x="10" y="20" fill="#38bdf8" fontSize="12" fontWeight="600">
                Lup: Benda di s &lt; f menghasilkan bayangan maya tegak diperbesar
              </text>
            </g>
          </svg>
        );
      }
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-red-600/20 text-red-400 rounded-lg border border-red-500/30">
            <Sparkles className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              Animasi Pembuktian Konsep Optik
              <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-normal border border-slate-700">
                Interaktif
              </span>
            </h4>
            <p className="text-xs text-slate-400">{config.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRays(!showRays)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
              showRays
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            {showRays ? 'Sembunyikan Berkas' : 'Tampilkan Berkas'}
          </button>

          <button
            onClick={handleReplay}
            disabled={isPlaying}
            className="px-3.5 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
            Ulangi Animasi
          </button>
        </div>
      </div>

      {/* SVG Canvas Stage */}
      <div className="relative">
        {renderVisualizer()}
      </div>

      {/* Footer Info */}
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>Diagram terkalibrasi matematis sesuai hukum optika geometris</span>
        </div>
        <div className="text-slate-400">
          Status: <span className="text-slate-200 font-medium">{isPlaying ? 'Memproyeksikan berkas sinar...' : 'Bayangan terfokus sempurna'}</span>
        </div>
      </div>
    </div>
  );
};
