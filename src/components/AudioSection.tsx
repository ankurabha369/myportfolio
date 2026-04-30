import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Activity, Play, Pause, Volume2, MonitorCloud } from 'lucide-react';

const tracks = [
  { 
    id: 1, 
    name: "Chasing Horizons", 
    duration: "03:45", 
    genre: "Synthwave / Lo-Fi", 
    url: "src/assets/audio/Chasing Horizons.mp3",
    art: "src/assets/audio/chasing horizons.png"
  },
  { 
    id: 2, 
    name: "Glitches", 
    duration: "02:29", 
    genre: "Christmas Beat", 
    url: "src/assets/audio/Glitch Mastered.mp3",
    art: "src/assets/audio/glitches.png"
  },
  { 
    id: 3, 
    name: "Jungle Secrets", 
    duration: "03:18", 
    genre: "Ambient / World", 
    url: "src/assets/audio/jungle-secrets.mp3",
    art: "src/assets/audio/junglesecrets.png"
  },
  { 
    id: 4, 
    name: "Solitary Me", 
    duration: "02:41", 
    genre: "Ambient / World", 
    url: "src/assets/audio/Solitary Me.mp3",
    art: "src/assets/audio/solitaryme.png"
  },
  { 
    id: 5, 
    name: "Reminiscence", 
    duration: "01:50", 
    genre: "Ambient / World", 
    url: "src/assets/audio/Reminisce.wav",
    art: "src/assets/audio/reminisce.png"
  },
  { 
    id: 6, 
    name: "Drill Beat", 
    duration: "01:09", 
    genre: "Drill / Trap", 
    url: "src/assets/audio/Beat for instagram.mp3",
    art: "src/assets/audio/reelaudio.jpg"
  },
];

export function AudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(tracks[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [beatIntensity, setBeatIntensity] = useState(1);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const setupAudioContext = () => {
    if (analyserRef.current || !audioRef.current) return;

    try {
      const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
      const audioCtx = new AudioContextClass();
      const analyser = audioCtx.createAnalyser();
      const source = audioCtx.createMediaElementSource(audioRef.current);
      
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      
      analyser.fftSize = 256; // Increased from 64 for better precision
      analyserRef.current = analyser;
      
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      
      const updateBeat = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        
        let sum = 0;
        // TWEAK HERE: 'bassBins' determines the frequency width. 
        // With fftSize 256, 4 bins cover roughly 0-350Hz (Sub-Bass/Kick)
        const bassBins = 4; 
        for (let i = 0; i < bassBins; i++) sum += dataArray[i];
        const average = sum / bassBins;
        
        // TWEAK HERE: 'threshold' (0-255) filters out background noise.
        // Higher threshold = disk only reacts to clear, loud kick drums.
        const threshold = 150;
        const bassPower = Math.max(0, average - threshold);
        
        // TWEAK HERE: The multiplier (0.6) controls expansion intensity.
        const powerFactor = Math.pow(bassPower / (255 - threshold), 1.4);
        const normalized = 1 + powerFactor * 0.6; 
        
        setBeatIntensity(normalized);
        
        animationFrameRef.current = requestAnimationFrame(updateBeat);
      };
      
      updateBeat();
    } catch (e) {
      console.warn("Web Audio API not supported or interaction required:", e);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    setupAudioContext();

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioRef.current.src !== window.location.origin + activeTrack.url) {
        audioRef.current.src = activeTrack.url;
      }
      audioRef.current.play().catch(e => {
        console.error("Playback failed. Make sure audio files are in /public/audio/", e);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (track: typeof tracks[0]) => {
    if (!audioRef.current) return;
    setActiveTrack(track);
    audioRef.current.src = track.url;
    if (isPlaying) {
      audioRef.current.play().catch(console.error);
    }
  };

  const skipTo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || duration === 0) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedProgress = x / rect.width;
    const newTime = clickedProgress * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) : 0;

  return (
    <section id="audio" className="py-24 md:py-32 px-6 md:px-8 bg-studio-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative z-10">
          <span className="text-xs font-bold text-studio-pink tracking-[0.4em] uppercase mb-4 block underline decoration-studio-pink/30 underline-offset-8">Audio_Showcase</span>
          <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.8] mb-12">
            AUDIO <br />
            <span className="text-studio-cyan italic">SYNTHESIS</span>
          </h2>
          
          <p className="text-sm px-6 border-l border-studio-cyan/30 text-white/60 max-w-lg mb-16 leading-relaxed font-medium tracking-wide">
            Music was the start of my creative journey. For years, I’ve used sound to "see" the scenes I want to build. While I’m currently focused on 3D and code, experimental audio remains the heartbeat of my work, helping me imagine and score the worlds I bring to life.
          </p>

          <div className="grid gap-4 max-w-md">
            {[
              { title: 'DAW', desc: 'REAPER / WAVEFORM / BANDLAB', icon: MonitorCloud },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 glass p-6 border-white/5 hover:border-studio-cyan/30 transition-all cursor-crosshair group">
                <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center group-hover:bg-studio-cyan group-hover:text-black transition-all">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/40">{item.title}</h4>
                  <p className="text-xs font-bold tracking-widest mt-1 group-hover:text-studio-cyan transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="glass p-8 md:p-16 rounded-xl border-white/10 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-white/10 pb-6">
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[9px] font-bold tracking-widest text-studio-pink uppercase mb-1">
                  Status: {isPlaying ? 'Streaming_Live' : 'Signal_Paused'}
                </span>
                <span className="font-display text-xl md:text-2xl uppercase tracking-wider transition-all duration-500">
                  {activeTrack.name.replace(/ /g, '_').toUpperCase()}
                </span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 flex items-center justify-center">
                 <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-studio-cyan rounded-full ${isPlaying ? 'animate-ping' : 'opacity-20'}`}></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12 md:mb-16">
              {/* Manual Album Art Frame */}
              <div className="w-56 h-56 md:w-64 md:h-64 glass rounded-xl border-white/10 overflow-hidden shadow-2xl relative group z-10 ">
                <img 
                  src={activeTrack.art} 
                  alt={activeTrack.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="text-xs font-bold text-white uppercase tracking-widest truncate">{activeTrack.name}</div>
                   <div className="text-[8px] mt-1.5 font-bold text-studio-pink uppercase tracking-[0.3em] mb-2">Ankur Rabha</div>

                </div>
              </div>

              {/* Disk Visualization */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    rotate: isPlaying ? 360 : 0,
                    scale: isPlaying ? beatIntensity : 1
                  }}
                  transition={{ 
                    rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
                    scale: { type: 'spring', damping: 8, stiffness: 250 }
                  }}
                  className="absolute inset-0 border border-dashed border-white/20 rounded-full"
                ></motion.div>
                <motion.div 
                  animate={{ 
                    scale: isPlaying ? beatIntensity : 1,
                    boxShadow: isPlaying ? `0 0 ${50 * (beatIntensity - 1)}px var(--color-studio-cyan)` : 'none'
                  }}
                  className="w-32 h-32 glass rounded-full flex items-center justify-center border-white/10 relative z-10 overflow-hidden shadow-2xl"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-studio-cyan/20 to-transparent"></div>
                   <Activity className={`h-10 w-10 text-studio-cyan neon-glow-cyan transition-all duration-500 relative z-10 ${isPlaying ? 'opacity-100' : 'opacity-40'}`} />
                </motion.div>
              </div>
            </div>

            <div className="space-y-1 mb-12">
               {tracks.map((track) => (
                 <div 
                    key={track.id} 
                    onClick={() => selectTrack(track)}
                    className={`flex items-center justify-between p-4 border transition-all cursor-pointer group ${
                      activeTrack.id === track.id ? 'border-studio-cyan/40 bg-studio-cyan/5' : 'border-transparent hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                       <span className={`text-[10px] font-bold transition-all ${
                         activeTrack.id === track.id ? 'text-studio-cyan opacity-100' : 'opacity-20 group-hover:opacity-100'
                       }`}>
                         [{String(track.id).padStart(2, '0')}]
                       </span>
                       <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${
                         activeTrack.id === track.id ? 'text-studio-cyan' : 'group-hover:text-studio-cyan'
                       }`}>
                         {track.name}
                       </span>
                    </div>
                    <span className="text-[8px] font-bold text-white/30 uppercase tracking-[.2em]">{track.genre}</span>
                  </div>
               ))}
            </div>

            <div className="flex items-center gap-10">
              <button 
                onClick={togglePlay}
                className="h-16 w-16 bg-white text-black rounded flex items-center justify-center hover:bg-studio-pink hover:text-white transition-all shadow-xl group active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 fill-current group-hover:scale-110 transition-transform" />
                ) : (
                  <Play className="h-6 w-6 fill-current group-hover:scale-110 transition-transform" />
                )}
              </button>
              <div className="flex-1">
                 <div 
                  ref={progressBarRef}
                  onClick={skipTo}
                  className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative cursor-pointer group/progress"
                 >
                    <div className="absolute inset-0 pixel-grid opacity-20"></div>
                    <motion.div 
                      className="h-full bg-studio-cyan origin-left relative z-10"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: progress }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    ></motion.div>
                    <div className="absolute top-0 right-0 h-full w-0.5 bg-white opacity-0 group-hover/progress:opacity-50 transition-opacity" style={{ left: `${progress * 100}%` }}></div>
                 </div>
                 <div className="flex justify-between mt-3 text-[9px] font-bold tracking-widest opacity-40 uppercase">
                   <span>{formatTime(currentTime)} / {formatTime(duration || 0)}</span>
                   <span>{isPlaying ? 'SIGNAL_ACTIVE' : 'READY_INIT'}</span>
                 </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-10 -right-10 w-64 h-64 bg-studio-cyan/5 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-studio-pink/5 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
}
