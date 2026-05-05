import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Video, 
  Folder, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import RecommendationWidget from './RecommendationWidget';

export default function ExploreView() {
  const landmarks = [
    {
      id: '1',
      name: 'Eiffel Tower',
      location: 'Paris, France',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
      color: 'bg-red-500'
    },
    {
      id: '2',
      name: 'Golden Gate',
      location: 'San Francisco, USA',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=600',
      color: 'bg-orange-500'
    },
    {
      id: '3',
      name: 'Kyoto Gates',
      location: 'Kyoto, Japan',
      category: 'Spirituality',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600',
      color: 'bg-red-600'
    }
  ];

  const stats = [
    { label: 'Total Files', value: '128', icon: Folder, trend: '+12%' },
    { label: 'Projects', value: '14', icon: TrendingUp, trend: '+2' },
    { label: 'Videos', value: '45', icon: Video, trend: '+5' },
    { label: 'Documents', value: '67', icon: FileText, trend: '+8%' },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-3xl bg-red-950/20 border border-red-900/30 hover:bg-red-900/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-red-600/10 rounded-2xl text-red-500 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-red-400 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-white">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Landmarks Section */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">World Inspiration</h2>
            <p className="text-red-400/60 font-medium">Landmarks matched to your project categories.</p>
          </div>
          <button className="flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all">
            See all <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landmarks.map((landmark, i) => (
            <motion.div
              key={landmark.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-[40px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={landmark.image} 
                alt={landmark.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className={cn("inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-3", landmark.color)}>
                  {landmark.category}
                </div>
                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-red-500 transition-colors">
                  {landmark.name}
                </h3>
                <p className="text-red-200/60 text-sm">{landmark.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Action & Recent Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-red-950/10 border border-red-900/20 rounded-[40px] p-8 mb-8">
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-bold flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-500" />
                Recent Activity
              </h3>
              <button className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-red-900/10 rounded-2xl transition-colors border border-transparent hover:border-red-900/30 group">
                  <div className="w-12 h-12 bg-red-900/40 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white">Project_Thesis_Draft_v2.pdf</p>
                    <p className="text-xs text-red-400/60 font-medium">Uploaded 2 hours ago • 4.2 MB</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-red-800 group-hover:text-red-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-[40px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-red-600/20">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">Your Digital sanctuary</h3>
              <p className="text-red-100/80 leading-relaxed font-medium">
                Every file and project here is protected by military-grade encryption in your private crimson vault.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-white text-red-600 font-black rounded-2xl hover:bg-red-50 transition-colors">
              Manage Storage
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <RecommendationWidget />
        </div>
      </div>
    </div>
  );
}
