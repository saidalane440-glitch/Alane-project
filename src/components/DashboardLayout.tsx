import React from 'react';
import { motion } from 'motion/react';
import { 
  FolderOpen, 
  Briefcase, 
  FileText, 
  Video, 
  Compass, 
  Settings, 
  LogOut,
  User,
  ShieldCheck,
  Search,
  Bell,
  Brain
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function DashboardLayout({ children, currentView, onViewChange }: { children: React.ReactNode, currentView: string, onViewChange: (id: string) => void }) {
  const navItems = [
    { icon: Compass, label: 'Explore', id: 'explore' },
    { icon: FolderOpen, label: 'Files', id: 'files' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: Brain, label: 'Kloppo AI', id: 'ai' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#070303] text-white overflow-hidden">
      {/* Top Navigation Banner */}
      <header className="h-24 border-b border-red-900/20 px-8 flex items-center justify-between bg-black/60 backdrop-blur-2xl z-50 sticky top-0 shrink-0">
        <div className="flex items-center gap-12">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onViewChange('explore')}
          >
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">ALANE</span>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-red-950/20 p-1.5 rounded-2xl border border-red-900/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-bold text-sm",
                  currentView === item.id 
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20" 
                    : "text-red-400/60 hover:text-red-300 hover:bg-red-900/30"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-3 bg-red-950/20 border border-red-900/30 px-4 py-2 rounded-xl w-64 focus-within:border-red-600 transition-colors">
            <Search className="w-4 h-4 text-red-500" />
            <input 
              type="text" 
              placeholder="Search ALANE..." 
              className="bg-transparent border-none outline-none text-xs text-red-100 placeholder:text-red-700 w-full font-medium"
            />
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-red-900/30">
            <button className="relative p-2 text-red-400 hover:text-red-500 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-red-500/50 flex items-center justify-center font-bold text-white shadow-lg">
              SA
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto p-8 lg:p-12">
           <motion.div
             key={currentView}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4 }}
           >
              {children}
           </motion.div>
        </div>
      </main>
    </div>
  );
}
