import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, Coffee, Brain } from 'lucide-react';

export default function RecommendationWidget() {
  const recommendations = [
    { title: 'Focus: Roman Colosseum', subtitle: 'Architecture Study', time: '45m', icon: Brain },
    { title: 'Project: AI Thesis', subtitle: 'Computer Science', time: '1h 20m', icon: BookOpen },
    { title: 'Break: Kyoto Tea Garden', subtitle: 'Mindfulness', time: '15m', icon: Coffee },
  ];

  return (
    <div className="bg-red-950/20 border border-red-900/30 rounded-[32px] p-8 space-y-6">
      <div className="flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
        <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Student Hub Recommends</h3>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center justify-between p-4 bg-red-900/10 rounded-2xl border border-red-900/20 group hover:border-red-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                <rec.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-red-50">{rec.title}</p>
                <p className="text-xs text-red-400 font-medium">{rec.subtitle}</p>
              </div>
            </div>
            <span className="text-[10px] font-black text-red-700 bg-red-900/20 px-2 py-1 rounded-full">{rec.time}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="pt-4 text-center">
        <p className="text-xs text-red-700 font-bold uppercase tracking-widest">Personalized for Level 20 Student</p>
      </div>
    </div>
  );
}
