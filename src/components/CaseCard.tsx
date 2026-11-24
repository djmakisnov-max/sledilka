import { ArbitrationCase, CaseStatus } from '../types';
import { FileText, Star, AlertCircle, Clock, CheckCircle2, Gavel, Building2, ShieldAlert } from 'lucide-react';

interface CaseCardProps {
  caseItem: ArbitrationCase;
  onClick: () => void;
  onToggleFavorite: () => void;
}

const statusConfig: Record<CaseStatus, { label: string; bgColor: string; textColor: string; icon: React.ReactNode }> = {
  active: { label: 'В производстве', bgColor: 'bg-blue-500', textColor: 'text-white', icon: <Clock className="w-3.5 h-3.5" /> },
  completed: { label: 'Завершено', bgColor: 'bg-green-500', textColor: 'text-white', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  appeal: { label: 'Апелляция', bgColor: 'bg-orange-500', textColor: 'text-white', icon: <Gavel className="w-3.5 h-3.5" /> },
  bankruptcy: { label: 'Банкротство', bgColor: 'bg-purple-500', textColor: 'text-white', icon: <Building2 className="w-3.5 h-3.5" /> },
  enforcement: { label: 'Исполнение', bgColor: 'bg-red-500', textColor: 'text-white', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
};

export default function CaseCard({ caseItem, onClick, onToggleFavorite }: CaseCardProps) {
  const status = statusConfig[caseItem.status];

  return (
    <div
      onClick={onClick}
      className="relative bg-white border-4 border-black cursor-pointer transition-all hover:scale-[1.02] hover:-translate-y-1 group"
      style={{ boxShadow: '8px 8px 0px #1a1a1a' }}
    >
      {/* Abstract decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 opacity-10 -rotate-12 translate-x-5 -translate-y-5"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500 opacity-10 rotate-45 -translate-x-3 translate-y-3"></div>

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-xl font-black text-black font-mono tracking-tight">
                {caseItem.caseNumber}
              </h3>
              {caseItem.hasNewDocuments && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 font-black border-2 border-black animate-abstract">
                  NEW!
                </span>
              )}
            </div>
            <p className="text-sm text-black/70 font-medium leading-relaxed">
              {caseItem.summary}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className="flex-shrink-0 p-2 bg-yellow-300 border-3 border-black hover:bg-yellow-400 transition-all"
            style={{ boxShadow: '3px 3px 0px #1a1a1a' }}
          >
            <Star
              className={`w-5 h-5 ${
                caseItem.isFavorite ? 'fill-black text-black' : 'text-black/30'
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          <div className="bg-blue-100 border-2 border-black px-3 py-2">
            <span className="text-xs font-black text-black/60 uppercase">Истец:</span>
            <p className="text-sm font-bold text-black truncate">{caseItem.plaintiff}</p>
          </div>
          <div className="bg-red-100 border-2 border-black px-3 py-2">
            <span className="text-xs font-black text-black/60 uppercase">Ответчик:</span>
            <p className="text-sm font-bold text-black truncate">{caseItem.defendant}</p>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${status.bgColor} ${status.textColor} border-2 border-black font-black text-xs uppercase`}>
            {status.icon}
            {status.label}
          </span>

          <div className="flex items-center gap-3 text-xs font-bold text-black/70">
            <span className="flex items-center gap-1 bg-yellow-200 border-2 border-black px-2 py-1">
              <FileText className="w-3.5 h-3.5" />
              {caseItem.documents.length} док.
            </span>
            <span className="flex items-center gap-1 bg-green-200 border-2 border-black px-2 py-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {caseItem.amount}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t-3 border-black/20 flex items-center justify-between text-xs font-bold text-black/60">
          <span className="truncate">{caseItem.court}</span>
          <span className="flex-shrink-0 ml-2">Обновлено: {caseItem.lastUpdate}</span>
        </div>
      </div>
    </div>
  );
}
