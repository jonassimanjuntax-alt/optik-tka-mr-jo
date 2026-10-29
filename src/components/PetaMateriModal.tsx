import React from 'react';
import { X, BookOpen, Compass, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface PetaMateriModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PetaMateriModal: React.FC<PetaMateriModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const topics = [
    {
      category: 'A. Cacat Mata Manusia & Koreksi Refraksi',
      items: [
        {
          title: 'Miopi (Rabun Jauh)',
          condition: 'Titik jauh berhingga (PR < ∞), bayangan jatuh di depan retina.',
          formula: 'P = -100 / PR(cm) atau P = -1 / PR(m)',
          note: 'Lensa cekung (divergen/negatif) menyebarkan berkas sejajar seolah-olah berasal dari titik jauh mata.'
        },
        {
          title: 'Hipermetropi (Rabun Dekat)',
          condition: 'Titik dekat menjauh (PP > 25 cm), bayangan jatuh di belakang retina.',
          formula: 'P = 100/Sn - 100/PP = 4 - 100/PP(cm)',
          note: 'Lensa cembung (konvergen/positif) mengumpulkan sinar dan membentuk bayangan maya di titik dekat mata.'
        },
        {
          title: 'Presbiopi (Mata Tua / Penurunan Akomodasi)',
          condition: 'Elastisitas lensa kristalina berkurang akibat usia. PP menjauh (> 25 cm) dan PR seringkali maju (< ∞).',
          formula: 'Kacamata Bifokal: Atas (P_jauh = -100/PR), Bawah (P_dekat = 4 - 100/PP)',
          note: 'Daya akomodasi: ΔP = 100/PP - 100/PR. Koreksi multifokal/bifokal memulihkan dua lapang pandang.'
        }
      ]
    },
    {
      category: 'B. Alat-Alat Optik Instrumen',
      items: [
        {
          title: 'Lup (Kaca Pembesar)',
          condition: 'Lensa cembung tunggal. Benda di ruang I (s ≤ f) menghasilkan bayangan maya tegak diperbesar.',
          formula: 'Akomodasi Maks: M = Sn/f + 1 | Rileks: M = Sn/f | Akomodasi x: M = Sn/f + Sn/x',
          note: 'Mata rileks (s = f) mencegah kelelahan otot siliaris untuk pengamatan berdurasi lama.'
        },
        {
          title: 'Mikroskop Cahaya',
          condition: 'Dua lensa cembung: f_ob < f_ok. Objektif membentuk I₁ nyata terbalik diperbesar. Okuler sebagai lup.',
          formula: 'M_tot = |s\'_ob / s_ob| × M_ok | Tabung rileks: d = s\'_ob + f_ok | Akomodasi: d = s\'_ob + s_ok',
          note: 'Preparat diletakkan di ruang II (f_ob < s_ob < 2f_ob). Saat akomodasi maksimum, tabung mikroskop memendek.'
        },
        {
          title: 'Teropong Bintang (Astronomis)',
          condition: 'Dua lensa cembung: f_ob >> f_ok. Benda di tak hingga (s_ob = ∞). Bayangan akhir maya terbalik diperbesar.',
          formula: 'M = f_ob / f_ok | Tabung rileks: d = f_ob + f_ok | Akomodasi maks: d = f_ob + s_ok',
          note: 'Orientasi terbalik tidak mengganggu karena benda langit tidak memiliki patokan orientasi bumi.'
        },
        {
          title: 'Teropong Bumi (Terestrial)',
          condition: 'Tiga lensa cembung: Objektif, Lensa Pembalik (f_p), dan Okuler. Bayangan akhir maya dan TEGAK.',
          formula: 'M = f_ob / f_ok (tetap sama) | Tabung rileks: d = f_ob + 4f_p + f_ok',
          note: 'Lensa pembalik bekerja pada 2f_p dengan perbesaran linear 1×, menambah panjang tabung sebesar 4f_p.'
        },
        {
          title: 'Teropong Panggung (Galileo / Opera)',
          condition: 'Objektif cembung (f_ob > 0) + Okuler CEKUNG (f_ok < 0). Tabung pendek, bayangan akhir langsung TEGAK.',
          formula: 'M = f_ob / |f_ok| | Tabung rileks: d = f_ob - |f_ok|',
          note: 'Okuler cekung mencegat sinar sebelum sempat berpotongan, menghasilkan tabung ringkas dan ringan.'
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-600 rounded-xl">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black">PETA MATERI & KONSEP KUNCI</h2>
              <p className="text-xs text-slate-400">Rangkuman Sistematis Rumus Optika Geometri TKA Fisika</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          {topics.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-extrabold text-red-600 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{sec.category}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {sec.items.map((it, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-300 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">{it.title}</h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{it.condition}</p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200 font-mono text-xs text-red-700 font-bold">
                      {it.formula}
                    </div>
                    <p className="text-[11px] text-slate-500 italic bg-amber-50/70 p-2 rounded-lg border border-amber-200/50">
                      💡 {it.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
          >
            Tutup Peta Materi
          </button>
        </div>
      </div>
    </div>
  );
};
