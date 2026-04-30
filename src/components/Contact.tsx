import { motion } from 'motion/react';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { link } from 'fs';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-studio-bg relative pixel-grid">
      <div className="max-w-[1400px] mx-auto">
        <div className="glass p-8 md:p-32 rounded-3xl relative overflow-hidden group border-white/5 shadow-inner">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-bold text-studio-cyan underline decoration-studio-cyan/40 underline-offset-8 tracking-[0.4em] uppercase mb-8 md:mb-10 block">System_Sync</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-8xl uppercase leading-none mb-10">
                INITIATE <br />
                <span className="italic text-studio-pink">HANDSHAKE.</span>
              </h2>
              <p className="text-[10px] md:text-sm text-white/50 max-w-sm mb-12 md:mb-16 leading-relaxed font-bold tracking-[.15em] uppercase">
                Currently open for multidisciplinary collaborations in 3D storytelling, VR environments.
              </p>
              
              <div className="flex flex-col gap-6">
                 <a href="mailto:ankurrabha113@gmail.com" className="flex items-center gap-6 group w-fit glass p-4 border-white/10 hover:border-studio-cyan/50 transition-all">
                    <div className="h-10 w-10 border border-white/10 flex items-center justify-center group-hover:bg-studio-cyan transition-colors">
                       <Mail className="h-4 w-4 text-white group-hover:text-black" />
                    </div>
                    <div>
                       <span className="text-[10px] font-bold opacity-30 block uppercase tracking-[0.3em] mb-1">Direct_Mail</span>
                       <span className="text-sm font-bold tracking-widest text-studio-cyan">ankurrabha113@gmail.com</span>
                    </div>
                 </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { name: 'Instagram', label: 'Story_Frames', link: 'https://www.instagram.com/ankurabha_/' },
                 { name: 'Behance', label: 'Case_Files', link: 'https://www.behance.net/ankurrabha2' },
                 { name: 'Soundcloud', label: 'Core_Audio', link: 'https://on.soundcloud.com/JeqwglyWVqcMK2ZjT1' }
               ].map((social) => (
                 <a 
                    key={social.name}
                    className="glass p-8 md:p-10 rounded-xl flex flex-col gap-4 md:gap-6 group hover:border-studio-pink transition-all border-white/5 relative overflow-hidden"
                    href={social.link} target="_blank" rel="noopener noreferrer"
                 >
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4 -rotate-45 text-studio-pink" />
                    </div>
                    <div className="text-[12px] font-bold tracking-[0.2em]">{social.name}</div>
                    <div className="text-[9px] font-bold text-studio-pink tracking-[0.3em] uppercase underline decoration-studio-pink/20">{social.label}</div>
                 </a>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 px-8 border-t border-white/5 bg-studio-bg relative">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8  animate-pulse relative bottom-2">
              <img src="src/assets/Graphics/blue branding.png" alt="branding" />
             </div>
             <span className="font-display text-2xl uppercase tracking-tighter neon-glow-cyan text-studio-cyan">ANKUR_PROCESS</span>
          </div>
          <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.4em]">2026</span>
        </div>
        
        <div className="flex flex-col md:items-end gap-6 text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">
           <div className="flex gap-10">
              <a href="#" className="hover:text-studio-pink transition-colors">Legal_Reserves</a>
              <a href="#" className="hover:text-studio-cyan transition-colors">Raw_Data</a>
              <a href="#" className="hover:text-studio-pink transition-colors">V.2.0.42</a>
           </div>
           <div className="flex items-center gap-4 text-white/20">
             <span></span>
             <ExternalLink className="h-3 w-3" />
           </div>
        </div>
      </div>
    </footer>
  );
}
