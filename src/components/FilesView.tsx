import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Video, 
  Image as ImageIcon, 
  MoreVertical, 
  Grid, 
  List as ListIcon,
  Search,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { FileItem } from '@/src/types';

export default function FilesView() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const files: FileItem[] = [
    {
      id: '1',
      name: 'History_Essay_Draft.docx',
      type: 'document',
      size: 2400000,
      url: '#',
      category: 'Education',
      ownerId: '123',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Graduation_Trip_Teaser.mp4',
      type: 'video',
      size: 156000000,
      url: '#',
      category: 'Legacy',
      ownerId: '123',
      createdAt: new Date().toISOString()
    },
    {
      id: '3',
      name: 'Portfolio_Website_Assets.zip',
      type: 'other',
      size: 45000000,
      url: '#',
      category: 'Projects',
      ownerId: '123',
      createdAt: new Date().toISOString()
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Your Vault</h2>
          <p className="text-red-400/60 font-medium tracking-wide">All your academic and personal assets in one place.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex border border-red-900/30 rounded-xl overflow-hidden bg-red-950/20">
            <button 
              onClick={() => setViewMode('grid')}
              className={cn("p-2 transition-colors", viewMode === 'grid' ? "bg-red-600/20 text-red-500" : "text-red-800")}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={cn("p-2 transition-colors", viewMode === 'list' ? "bg-red-600/20 text-red-500" : "text-red-800")}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-600/20">
            <Plus className="w-5 h-5" />
            Upload File
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {files.map((file, i) => {
            const landmarks = [
              'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400'
            ];
            
            return (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-red-950/10 border border-red-900/20 rounded-3xl p-6 hover:bg-red-900/20 transition-all cursor-pointer relative h-64 flex flex-col justify-end overflow-hidden"
              >
                {/* Landmark Background */}
                <div className="absolute inset-0 z-0">
                   <img 
                      src={landmarks[i % landmarks.length]} 
                      alt="Background" 
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/40 to-transparent" />
                </div>

                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 hover:bg-red-900/40 rounded-lg">
                    <MoreVertical className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-900/30 rounded-2xl flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-all transform group-hover:scale-110">
                    {file.type === 'video' ? <Video className="w-6 h-6" /> : 
                     file.type === 'image' ? <ImageIcon className="w-6 h-6" /> : 
                     <FileText className="w-6 h-6" />}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-red-50 truncate mb-1 pr-6 drop-shadow-md">{file.name}</h3>
                    <p className="text-xs text-red-400 font-bold drop-shadow-sm uppercase tracking-widest bg-red-950/60 px-2 py-0.5 rounded-full inline-block">
                      {(file.size / (1024 * 1024)).toFixed(1)} MB • {file.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="bg-red-950/10 border border-red-900/20 rounded-[32px] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-red-900/20 text-[10px] uppercase font-black tracking-widest text-red-700">
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Size</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-red-900/10 transition-colors group cursor-pointer border-b border-red-900/5 last:border-0 border-collapse">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-red-900/20 rounded-xl flex items-center justify-center text-red-500">
                        {file.type === 'video' ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                      </div>
                      <span className="font-bold text-red-100">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm text-red-400 font-medium">{(file.size / (1024 * 1024)).toFixed(1)} MB</td>
                  <td className="px-8 py-4">
                    <span className="text-xs px-3 py-1 bg-red-900/30 text-red-400 rounded-full font-bold">{file.category}</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-red-400 font-medium">2 days ago</td>
                  <td className="px-8 py-4 text-right">
                    <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="w-5 h-5 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
