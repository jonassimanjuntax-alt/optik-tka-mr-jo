import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="p-6 text-center space-y-4">
          <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl mx-auto flex items-center justify-center shadow-inner">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-black text-slate-900">Konfirmasi Reset Progres</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Apakah Anda yakin ingin menghapus seluruh progres latihan? Seluruh jawaban tersimpan, skor simulasi, dan status pengerjaan 30 soal akan dihapus dari perangkat ini dan dikembalikan ke kondisi awal.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
            >
              Batalkan
            </button>
            <button
              onClick={() => {
                onConfirmReset();
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5 active:scale-98"
            >
              <Trash2 className="w-4 h-4" />
              <span>Ya, Reset Semua</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
