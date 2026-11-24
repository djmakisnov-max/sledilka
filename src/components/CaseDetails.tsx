import { ArbitrationCase } from '../types';
import { X, ExternalLink, FileText, Calendar, User, Building, Scale, Clock, Star } from 'lucide-react';

interface CaseDetailsProps {
  caseItem: ArbitrationCase;
  onClose: () => void;
}

export default function CaseDetails({ caseItem, onClose }: CaseDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-white border-4 border-black w-full max-w-3xl my-8 overflow-hidden" style={{ boxShadow: '12px 12px 0px #1a1a1a' }}>
        {/* Header */}
        <div className="relative bg-blue-600 border-b-4 border-black p-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500 opacity-20 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-10 w-20 h-20 bg-yellow-400 opacity-20 rotate-45"></div>
          
          <div className="relative flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-yellow-400 border-3 border-black flex items-center justify-center">
                  <Scale className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-mono">{caseItem.caseNumber}</h2>
                {caseItem.isFavorite && <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />}
              </div>
              <p className="text-white/90 text-sm font-medium">{caseItem.summary}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-red-500 border-3 border-black hover:bg-red-600 transition-all text-white"
              style={{ boxShadow: '3px 3px 0px #1a1a1a' }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Case Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-100 border-3 border-black p-4">
              <div className="flex items-center gap-2 text-black/60 text-xs font-black uppercase mb-1">
                <Building className="w-4 h-4" />
                Суд
              </div>
              <p className="text-sm text-black font-bold">{caseItem.court}</p>
            </div>
            <div className="bg-red-100 border-3 border-black p-4">
              <div className="flex items-center gap-2 text-black/60 text-xs font-black uppercase mb-1">
                <User className="w-4 h-4" />
                Судья
              </div>
              <p className="text-sm text-black font-bold">{caseItem.judge}</p>
            </div>
            <div className="bg-yellow-100 border-3 border-black p-4">
              <div className="flex items-center gap-2 text-black/60 text-xs font-black uppercase mb-1">
                <Scale className="w-4 h-4" />
                Истец
              </div>
              <p className="text-sm text-black font-bold">{caseItem.plaintiff}</p>
            </div>
            <div className="bg-green-100 border-3 border-black p-4">
              <div className="flex items-center gap-2 text-black/60 text-xs font-black uppercase mb-1">
                <Scale className="w-4 h-4" />
                Ответчик
              </div>
              <p className="text-sm text-black font-bold">{caseItem.defendant}</p>
            </div>
            <div className="bg-purple-100 border-3 border-black p-4">
              <div className="flex items-center gap-2 text-black/60 text-xs font-black uppercase mb-1">
                <Calendar className="w-4 h-4" />
                Дата подачи
              </div>
              <p className="text-sm text-black font-bold">{caseItem.dateFiled}</p>
            </div>
            <div className="bg-orange-100 border-3 border-black p-4">
              <div className="flex items-center gap-2 text-black/60 text-xs font-black uppercase mb-1">
                <Clock className="w-4 h-4" />
                Сумма иска
              </div>
              <p className="text-lg text-black font-black">{caseItem.amount}</p>
            </div>
          </div>

          {/* Events Timeline */}
          <div>
            <h3 className="text-xl font-black text-black mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 border-2 border-black flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              Хронология событий
            </h3>
            <div className="space-y-3">
              {caseItem.events.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex gap-3 p-4 border-3 border-black ${
                    event.isNew ? 'bg-yellow-100' : 'bg-white'
                  }`}
                  style={{ boxShadow: event.isNew ? '5px 5px 0px #1a1a1a' : '3px 3px 0px #1a1a1a' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 border-2 border-black flex items-center justify-center text-white font-black">
                    {caseItem.events.length - index}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-black text-black">{event.title}</p>
                      {event.isNew && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 border-2 border-black font-black">
                          Новое
                        </span>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-sm text-black/70 mt-1 font-medium">{event.description}</p>
                    )}
                    <p className="text-xs text-black/50 mt-1 font-bold">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <h3 className="text-xl font-black text-black mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 border-2 border-black flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              Документы по делу ({caseItem.documents.length})
            </h3>
            <div className="border-3 border-black overflow-hidden" style={{ boxShadow: '5px 5px 0px #1a1a1a' }}>
              <table className="w-full">
                <thead className="bg-blue-500">
                  <tr>
                    <th className="text-left text-xs font-black text-white uppercase px-4 py-3 border-b-3 border-black">Тип</th>
                    <th className="text-left text-xs font-black text-white uppercase px-4 py-3 border-b-3 border-black">Название</th>
                    <th className="text-left text-xs font-black text-white uppercase px-4 py-3 border-b-3 border-black">Дата</th>
                    <th className="text-center text-xs font-black text-white uppercase px-4 py-3 border-b-3 border-black">Файл</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black/20">
                  {caseItem.documents.map((doc, idx) => (
                    <tr key={doc.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-yellow-50'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-4 py-3 text-sm text-black font-bold">{doc.type}</td>
                      <td className="px-4 py-3 text-sm text-black font-bold">{doc.title}</td>
                      <td className="px-4 py-3 text-sm text-black/70 font-medium">{doc.date}</td>
                      <td className="px-4 py-3 text-center">
                        {doc.hasFile && (
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 border-2 border-black text-white">
                            <FileText className="w-4 h-4" />
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Link to kad.arbitr.ru */}
          <div className="flex justify-end">
            <a
              href={caseItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white border-4 border-black hover:bg-red-600 transition-all font-black uppercase text-sm"
              style={{ boxShadow: '5px 5px 0px #1a1a1a' }}
            >
              <ExternalLink className="w-4 h-4" />
              Открыть на kad.arbitr.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
