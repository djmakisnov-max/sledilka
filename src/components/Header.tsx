import { Bell, Scale, RefreshCw, Eye } from 'lucide-react';
import { Notification } from '../types';
import { useState } from 'react';

interface HeaderProps {
  notifications: Notification[];
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export default function Header({ notifications, onMarkRead, onMarkAllRead, onRefresh, isRefreshing }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'decision': return '⚖️';
      case 'hearing': return '📅';
      case 'document': return '📄';
      case 'status': return '🔄';
      default: return '📌';
    }
  };

  return (
    <header className="relative bg-yellow-400 border-b-[5px] border-black overflow-hidden">
      {/* Abstract decorative shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600 rounded-full opacity-20 -translate-x-10 -translate-y-10"></div>
      <div className="absolute top-0 right-20 w-24 h-24 bg-red-600 opacity-20 rotate-45"></div>
      <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-black opacity-10 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Picasso-style logo */}
            <div className="relative">
              <div className="w-14 h-14 bg-blue-600 border-4 border-black rounded-full flex items-center justify-center picasso-border-sm" style={{ boxShadow: '4px 4px 0px #1a1a1a' }}>
                <Scale className="w-7 h-7 text-yellow-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 border-2 border-black rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                МОНИТОР<span className="text-red-600">ДЕЛ</span>
              </h1>
              <p className="text-xs text-black/60 font-bold uppercase tracking-widest">kad.arbitr.ru</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="p-3 bg-white border-4 border-black hover:bg-blue-100 transition-all disabled:opacity-50"
              style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)', boxShadow: '4px 4px 0px #1a1a1a' }}
              title="Обновить данные"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-3 bg-red-500 border-4 border-black hover:bg-red-600 transition-all relative text-white"
                style={{ clipPath: 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)', boxShadow: '4px 4px 0px #1a1a1a' }}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-black border-2 border-black animate-abstract">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white border-4 border-black z-50 overflow-hidden" style={{ boxShadow: '8px 8px 0px #1a1a1a' }}>
                  <div className="p-3 bg-blue-600 border-b-4 border-black flex items-center justify-between">
                    <h3 className="font-black text-white uppercase tracking-wide">Уведомления</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={onMarkAllRead}
                        className="text-xs text-yellow-300 hover:text-yellow-100 font-black uppercase"
                      >
                        Прочитать все
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="p-4 text-center text-black/60 text-sm font-bold">Нет уведомлений</p>
                    ) : (
                      notifications.map(notification => (
                        <div
                          key={notification.id}
                          onClick={() => onMarkRead(notification.id)}
                          className={`p-3 border-b-2 border-black/10 cursor-pointer hover:bg-yellow-50 transition-colors ${
                            !notification.read ? 'bg-yellow-100' : ''
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-xl">{getNotificationIcon(notification.type)}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-black text-black truncate font-mono">
                                {notification.caseNumber}
                              </p>
                              <p className="text-xs text-black/70 mt-0.5 font-medium">{notification.message}</p>
                              <p className="text-xs text-black/40 mt-1">{notification.date}</p>
                            </div>
                            {!notification.read && (
                              <div className="w-3 h-3 bg-red-600 border-2 border-black rounded-full mt-1.5 flex-shrink-0"></div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
