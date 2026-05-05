import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  ExternalLink, 
  Github, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ProjectItem } from '@/src/types';

export default function ProjectsView() {
  const projects: ProjectItem[] = [
    {
      id: '1',
      title: 'Smart Campus Analytics',
      description: 'A data visualization platform for monitoring real-time foot traffic and eco-efficiency across the university campus using IoT sensors.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=600',
      ownerId: '123',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      title: 'E-Library Redesign',
      description: 'UX/UI overhaul of the university library portal focusing on accessibility and crimson-themed aesthetics for better navigation.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600',
      ownerId: '123',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  return (
    <div className="space-y-8">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Active Projects</h2>
          <p className="text-red-400/60 font-medium tracking-wide">Showcasing your creative and academic journey.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-600/20">
          <Plus className="w-5 h-5" />
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-red-950/10 border border-red-900/20 rounded-[40px] overflow-hidden flex flex-col md:flex-row hover:border-red-600/50 transition-all"
          >
            <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
              <img 
                src={project.thumbnailUrl} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-500 text-[10px] uppercase font-black tracking-[0.2em] mb-4">
                  <Layers className="w-3 h-3" />
                  Development
                </div>
                <h3 className="text-2xl font-black text-white mb-3 leading-tight">{project.title}</h3>
                <p className="text-red-300/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-red-950 bg-red-800 flex items-center justify-center text-[10px] font-bold">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-red-700 font-bold uppercase tracking-widest">+ Team</span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-3 bg-red-900/30 text-white rounded-xl hover:bg-red-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="flex-1 py-3 bg-red-600/10 text-red-500 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
                    Preview <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Placeholder */}
        <button className="border-2 border-dashed border-red-900/30 rounded-[40px] p-8 flex flex-col items-center justify-center gap-4 text-red-900 hover:text-red-500 hover:border-red-600/50 transition-all group">
          <div className="w-16 h-16 rounded-full bg-red-950/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8" />
          </div>
          <p className="font-black text-xl uppercase tracking-tighter">Draft New Vision</p>
        </button>
      </div>
    </div>
  );
}
