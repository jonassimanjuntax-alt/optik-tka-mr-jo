import React from 'react';
import { X, BookOpen, Volume2, Target, CheckCircle, Flame, Layers } from 'lucide-react';

interface PetunjukModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PetunjukModal: React.FC<PetunjukModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-600 rounded-xl">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black">PETUNJUK PENGGUNAAN APLIKASI</h2>
              <p className="text-xs text-slate-400">Panduan Lengkap Belajar Fisika Jenius bersama Mister Jo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm">
          {/* Section 1 */}
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2">
            <h3 className="font-bold text-red-900 flex items-center gap-2 text-sm">
              <Volume2 className="w-4 h-4 text-red-600" />
              <span>1. Narator Suara Mister Jo (Web Speech API)</span>
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Mister Jo akan memandu Anda secara lisan! Suara akan otomatis membacakan stimulus, soal, dan pilihan jawaban saat Anda membuka nomor soal baru. Anda dapat memutar ulang, menjeda, melanjutkan, mengatur kecepatan suara (0.8×, 1.0×, 1.2×), atau mematikan suara melalui kontrol audio di navbar atau panel bimbingan. Teks yang sedang dibacakan akan disorot secara otomatis.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>2. Tiga Tipe Soal Tersebar Merata</span>
            </h3>
            <div className="space-y-1.5 text-slate-700">
              <p>• <strong>10 Pilihan Ganda (PG):</strong> Memilih 1 opsi paling tepat dari 5 opsi (A–E).</p>
              <p>• <strong>10 Pilihan Ganda Kompleks (PGK):</strong> Menentukan seluruh opsi yang benar (&gt;1 opsi). Pilihlah semua jawaban yang menurut Anda tepat.</p>
              <p>• <strong>10 Benar/Salah (BS):</strong> Menilai status Benar (B) atau Salah (S) dari 3 pernyataan independen pada stimulus soal.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-emerald-600" />
              <span>3. Sistem Skor Simulasi 200–800 (Model IRT-Like)</span>
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Skor akhir dipetakan secara transparan dan monoton pada rentang <strong>200 sampai 800</strong>. Jika semua jawaban tepat, Anda memperoleh skor sempurna 800. Setiap soal PGK dan Benar-Salah memiliki skor parsial proporsional.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>4. Satu Alur: Animasi Pembuktian, Pembahasan & Cara Cepat</span>
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Setelah tombol <strong>"PERIKSA JAWABAN"</strong> ditekan, pada halaman yang sama akan langsung terbuka:
              <br />1. <strong>Animasi Pembuktian Konsep:</strong> Visualisasi berkas sinar interaktif yang dapat diulang.
              <br />2. <strong>Pembahasan Matematis Normal:</strong> Diketahui, Ditanya, Konsep Fisika, Langkah Hitung, Analisis Opsi, dan Kesimpulan.
              <br />3. <strong>Cara Cepat Mister Jo:</strong> Trik formula praktis dan batas penggunaannya.
              <br />4. <strong>Pembelajaran Lanjutan:</strong> Inti konsep, miskonsepsi umum, dan kalimat motivasi Mister Jo.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
          >
            Saya Siap Belajar
          </button>
        </div>
      </div>
    </div>
  );
};
