import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, Landmark, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const landmarks = [
    {
      name: 'Eiffel Tower',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1920',
      description: 'The iron lady of Paris under the crimson sky.'
    },
    {
      name: 'Golden Gate Bridge',
      url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1920',
      description: 'A masterpiece of engineering in international orange.'
    },
    {
      name: 'Kyoto Torii',
      url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1920',
      description: 'The sacred path of ten thousand gates.'
    }
  ];

  const [currentLandmark, setCurrentLandmark] = useState(0);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-red-950 text-white overflow-hidden">
      {/* Visual Side */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden">
        <motion.div 
          key={currentLandmark}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={landmarks[currentLandmark].url} 
            alt={landmarks[currentLandmark].name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 to-red-950/90" />
        </motion.div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 text-2xl font-bold tracking-tighter">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span>ALANE</span>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-6xl font-black mb-6 leading-tight">
            Your Personal <span className="text-red-500">Universe</span> In Crimson.
          </h1>
          <p className="text-red-200 text-lg mb-8">
            Securely store your files, projects, and documents in a vault inspired by the world's most iconic landmarks.
          </p>
          
          <div className="flex gap-4">
            {landmarks.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentLandmark(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  currentLandmark === i ? "w-12 bg-red-500" : "w-4 bg-red-900"
                )}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-sm text-red-400 font-mono">
          <Landmark className="w-4 h-4" />
          <span>{landmarks[currentLandmark].description}</span>
        </div>
      </div>

      {/* Login Side */}
      <div className="flex items-center justify-center p-8 bg-red-50 lg:bg-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 bg-white lg:bg-red-900/10 backdrop-blur-xl rounded-3xl border border-red-200 lg:border-red-500/20 shadow-2xl lg:shadow-none"
        >
          <div className="mb-10 lg:hidden">
             <div className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-red-900">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span>ALANE</span>
              </div>
          </div>

          <h2 className="text-3xl font-bold text-red-950 lg:text-white mb-2">Welcome Back</h2>
          <p className="text-red-700 lg:text-red-300 mb-10">Access your personal hub securely.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-red-900 lg:text-red-200">Email Address</label>
              <input 
                type="email" 
                placeholder="you@uni.edu"
                className="w-full px-4 py-3 rounded-xl bg-red-50 lg:bg-white/5 border border-red-200 lg:border-red-500/30 text-red-950 lg:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-red-900 lg:text-red-200">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-red-50 lg:bg-white/5 border border-red-200 lg:border-red-500/30 text-red-950 lg:text-white outline-none focus:ring-2 focus:ring-red-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="button"
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Sign In to Vault
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-red-800 lg:text-red-400">
            Secure connection established. All data is encrypted.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
