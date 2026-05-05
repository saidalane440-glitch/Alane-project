import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function KloppoAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm Kloppo, your ALANE assistant. How can I help you manage your vault or projects today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I've analyzed your request. I can help organize your recent documents or provide insights into your 'Smart Campus' project. Would you like me to generate a summary of your latest thesis draft?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-14rem)] flex flex-col bg-red-950/10 border border-red-900/30 rounded-[40px] overflow-hidden backdrop-blur-xl">
      {/* AI Header */}
      <div className="p-8 border-b border-red-900/20 flex items-center justify-between bg-red-600/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
              KLOPPO AI
              <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Active</span>
            </h2>
            <p className="text-red-400/60 text-xs font-bold uppercase tracking-wider">Vault Intelligence Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
            <Minimize2 className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-red-900/20 rounded-lg text-red-500 transition-colors">
             <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={cn(
                "flex items-start gap-4 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg",
                msg.role === 'assistant' ? "bg-red-600" : "bg-red-950 border border-red-900"
              )}>
                {msg.role === 'assistant' ? <Bot className="w-6 h-6 text-white" /> : <User className="w-6 h-6 text-red-500" />}
              </div>
              <div className={cn(
                "p-4 rounded-3xl text-sm leading-relaxed",
                msg.role === 'assistant' 
                  ? "bg-red-900/10 border border-red-900/20 text-red-100" 
                  : "bg-red-600 text-white font-medium"
              )}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-red-500 text-xs font-bold px-4"
            >
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" />
              </div>
              KLOPPO IS ANALYZING...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Tray */}
      <div className="p-8 bg-red-600/5">
        <form onSubmit={handleSend} className="relative">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Kloppo anything about your vault..."
            className="w-full bg-red-950/40 border border-red-900/30 rounded-2xl py-4 pl-6 pr-16 outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-white placeholder:text-red-900 font-medium"
          />
          <button 
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-2 bottom-2 w-12 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-red-600 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-red-600/20 active:scale-95"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </form>
        <p className="mt-4 text-center text-[10px] font-black text-red-900 uppercase tracking-widest">
          Secured by ALANE Shield • Real-time Vault Intelligence
        </p>
      </div>
    </div>
  );
}
