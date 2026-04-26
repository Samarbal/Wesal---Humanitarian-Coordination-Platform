import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Map as MapIcon, 
  AlertCircle, 
  Users, 
  Settings, 
  Menu, 
  X, 
  Bell, 
  ShieldAlert,
  Network,
  LayoutDashboard,
  BadgeAlert,
  Archive,
  Brain
} from 'lucide-react';
import { useState } from 'react';

// --- Shared Components ---

export function Navbar({ onMenuClick, activeTab, onTabChange }: { onMenuClick: () => void, activeTab: string, onTabChange: (tab: string) => void }) {
  return (
    <header className="bg-white border-b border-wesal-light sticky top-0 z-50 px-6 h-16 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-wesal-navy font-display tracking-tight">وصال</span>
        </div>
        <nav className="hidden md:flex gap-8">
          {[
            { id: 'landing', label: 'الرئيسية' },
            { id: 'dashboard', label: 'لوحة القيادة' },
            { id: 'priority', label: 'مركز الأولوية' },
            { id: 'map', label: 'الخريطة' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`text-sm font-bold pb-1 transition-all border-b-2 ${
                activeTab === tab.id 
                  ? 'text-wesal-navy border-wesal-navy' 
                  : 'text-wesal-turquoise border-transparent hover:text-wesal-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input 
            type="text" 
            placeholder="بحث..." 
            className="bg-wesal-light/20 border-none rounded-lg pr-10 pl-4 py-2 text-sm focus:ring-2 focus:ring-wesal-navy w-48 lg:w-64"
          />
          <BarChart3 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wesal-turquoise" />
        </div>
        <button className="bg-wesal-navy text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-wesal-turquoise transition-all">
          <AlertCircle className="w-4 h-4" />
          <span>إبلاغ</span>
        </button>
        <button onClick={onMenuClick} className="md:hidden p-2 text-wesal-navy">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export function Sidebar({ activeTab, onTabChange, isOpen, onClose }: { activeTab: string, onTabChange: (tab: string) => void, isOpen: boolean, onClose: () => void }) {
  const items = [
    { id: 'dashboard', label: 'الرئيسية', icon: LayoutDashboard },
    { id: 'operations', label: 'العمليات الميدانية', icon: BadgeAlert },
    { id: 'priority', label: 'إدارة الموارد', icon: Archive },
    { id: 'ai', label: 'التقارير الذكية', icon: Brain },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`fixed right-0 top-0 h-full w-64 bg-white border-l border-wesal-light z-50 transform transition-transform duration-300 ease-in-out pt-20 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <div className="px-6 mb-10 flex flex-col gap-2">
          <div className="w-12 h-12 bg-wesal-navy rounded-xl flex items-center justify-center text-white shadow-lg">
             <BarChart3 className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-wesal-navy font-display">مركز التنسيق</h2>
          <p className="text-xs text-wesal-turquoise">الاستجابة الإنسانية</p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => { onTabChange(item.id); onClose(); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-wesal-navy text-white shadow-md' 
                  : 'text-wesal-turquoise hover:bg-wesal-light/20'
              }`}
            >
              <item.icon className="w-5 h-5 shadow-inner" />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4">
          <button className="w-full bg-urgent text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 shadow-xl transition-all active:scale-95">
            <ShieldAlert className="w-6 h-6" />
            <span>طلب مساعدة عاجلة</span>
          </button>
        </div>
      </aside>
    </>
  );
}
