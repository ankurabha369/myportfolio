import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 px-8 overflow-hidden pixel-grid">
      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-start mb-20 z-10 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.9]  font-extrabold tracking-normal neon-glow-pink">
              <span className="text-studio-pink">SONIC</span><br/>
              CINEMA
            </h1>
            <p className="text-[10px] md:text-sm mt-4 opacity-60 uppercase tracking-[0.3em] font-bold max-w-sm md:max-w-lg">
              Visual Storyteller // Generalist
            </p>
            <p className="text-[10px] mt-2 text-studio-cyan font-bold tracking-widest uppercase">
              Greetings. Explore a collection of works spanning 3D animation, music production, and graphic design. Each project is a unique blend of creativity and technical skill, showcasing my passion for storytelling through immersive visuals and sound. Dive in to experience the echo between worlds.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 pt-4">
            {['Blender', 'Moho Pro', 'Inkscape', 'Affinity', 'Reaper', 'DaVinci'].map((tool) => (
              <div key={tool} className="tool-chip text-studio-cyan border-studio-cyan/20">
                {tool}
              </div>
            ))}
          </div>
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-12 relative z-10">
          <div className="hidden md:flex flex-col gap-6 w-12 pt-4 shrink-0">
            <div className="vertical-text text-[10px] opacity-40 uppercase tracking-[0.4em] font-bold">
              Let's Explore
            </div>
            <div className="w-px h-full bg-white/10 mx-auto"></div>
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="w-2 h-2 rounded-full bg-studio-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 relative glass rounded-2xl overflow-hidden group border-white/20 min-h-[350px] sm:min-h-[400px]"
            >
              <img 
                src="src/assets/3D/scoteer future.png" 
                alt="Story Viewport"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-studio-bg via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-3 items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-white/50">LIVE_VIEWPORT: RENDER_01_SEQ</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <h2 className="font-display text-3xl md:text-5xl uppercase italic mb-3 leading-none neon-glow-cyan text-white tracking-widest">
                  ECHOES OF <span className="text-studio-cyan">DIGHTAL</span> WORLDS
                </h2>
                <p className="text-[10px] md:text-sm opacity-60 max-w-md font-medium leading-relaxed tracking-wide">
                  I craft digital stories through recursive 3D worlds and minimalist tools. Explore my  projectS.
                </p>
                <div className="mt-6 md:mt-8 flex gap-3 md:gap-4">
                  <button 
                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-4 md:px-6 py-2 bg-studio-cyan text-black text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-colors"
                  >
                    Access_My_Artworks
                  </button>
                  <button 
                    onClick={() => document.getElementById('audio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-4 md:px-6 py-2 border border-white/20 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-colors"
                  >
                    My_Soundworks
                  </button>
                </div>
              </div>

              <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                <div className="w-1 h-12 md:h-20 bg-studio-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                <div className="w-1 h-4 md:h-8 bg-white/20"></div>
              </div>
            </motion.div>

            <div className="w-full lg:w-96 flex flex-col items-center">
              {/* Profile Section - Stadium Shape Overlapping Layout */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative w-36 h-48 md:w-44 md:h-60 p-1.5 rounded-full border-2 border-studio-pink/30 shadow-[0_0_30px_rgba(255,0,85,0.15)] ring-1 ring-white/10 z-20 -mb-24 md:-mb-28"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-studio-bg bg-white/5 relative z-10">
                  <img 
                    src="src/assets/MY PIC.jpeg" 
                    alt="Ankur Rabha" 
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative orbital elements tuned to stadium shape */}
                <div className="absolute inset-x-[-10px] inset-y-[-10px] rounded-full border border-dashed border-studio-cyan/20 opacity-30"></div>
                <div className="absolute inset-x-[-5px] inset-y-[-5px] rounded-full border border-white/5"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass rounded-2xl p-6 md:p-8 pt-28 md:pt-36 border-white/10 bg-white/[0.02] w-full text-left relative z-10"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl md:text-2xl font-display uppercase tracking-wider text-white mb-2">Greetings, I’m Ankur.</h4>
                  </div>

                  <p className="text-sm  text-white/70 leading-relaxed font-medium tracking-wide">
                    I am a Mechanical Engineering student at DTU, navigating the world of technical precision while chasing a dream in visual storytelling. While my degree and my passion may seem worlds apart, I bridge them by using animation and 3D design to simplify the complex. I’m dedicated to giving life to ideas, making it easier for people to learn and explore new concepts through immersive digital world.
                  </p>
                  
                  <div className="pt-4 flex justify-start gap-4">
                    <div className="px-3 py-1 glass rounded-full border-white/5 text-[8px] font-bold text-studio-cyan uppercase tracking-widest">3D_Artist</div>
                    <div className="px-3 py-1 glass rounded-full border-white/5 text-[8px] font-bold text-studio-pink uppercase tracking-widest">Generalist</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-px h-1/2 bg-white/5 pointer-events-none z-0"></div>
    </section>
  );
}
