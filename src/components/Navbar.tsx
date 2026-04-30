import { motion } from 'motion/react';
import { Menu, X, Play, Music, Camera, Activity } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

const links = [
  { name: 'ART_SHOWCASE', href: '#work', icon: Play },
  { name: 'CODE_HUB', href: '#dev', icon: Activity },
  { name: 'AUDIO_SHOWCASE', href: '#audio', icon: Music },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-[95vw] top-0 left-0  z-50 px-6 py-2 mx-5 mt-1.5  bg-studio-bg/80 backdrop-blur-sm border-b border-white/10 pixel-grid rounded-4xl ">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="w-16 h-16  flex items-center justify-center group-hover:bg-studio-pink/20 transition-all">
            <img src="src/assets/Graphics/branding.png" alt="Brand Logo" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[10px] text-studio-cyan tracking-[0.3em] font-bold">ANKUR_RABHA.SYS</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] font-bold text-white/50 hover:text-studio-cyan transition-colors flex items-center gap-2 group tracking-widest uppercase"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-6 py-2 border border-studio-pink text-studio-pink text-[10px] font-bold tracking-widest uppercase hover:bg-studio-pink hover:text-white transition-all shadow-[0_0_15px_rgba(255,0,85,0.2)]"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="text-studio-pink" /> : <Menu className="text-studio-cyan" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass p-8 flex flex-col gap-6 md:hidden border-b border-white/10"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase hover:text-studio-cyan transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-studio-cyan"></div>
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
