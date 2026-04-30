import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Layout, Terminal, ExternalLink, Github } from 'lucide-react';

const webProjects = [
  {
    title: "Dainik",
    tech: ["React", "Tailwind", "AI Assisted"],
    description: "This is a minimalist productivity tool designed for high-speed task management.",
    link: "https://ankurabha369.github.io/daily-task-tracker/",
    github: "#",
    image: "src/assets/code_hub/Dainik.gif",
    status: "STABLE"
  },
{
    title: "FlowMind",
    tech: ["React", "Tailwind", "TypeScript", "AI Assisted"],
    description: "This is a minimalist mind-mapping tool designed for visual brainstorming",
    link: "https://ankurabha369.github.io/mindmap/",
    github: "#",
    image: "src/assets/code_hub/Flowmind.png",
    status: "LIVE"
  },
  {
    title: "Let'sFocus",
    tech: ["React", "Tailwind"],
    description: "An immersive productivity hub that blends nature-themed soundscape for deep focus.",
    link: "https://ankurabha369.github.io/LetsFocus/",
    github: "#",
    image: "src/assets/code_hub/letsfocus.gif",
    status: "LIVE"
  }
];

const skills = [
  { name: 'ReactJS', level: 'BEGINNER', icon: Cpu },
  { name: 'Tailwind CSS', level: 'STABLE', icon: Layout },
  { name: 'JavaScript', level: 'STABLE', icon: Code2 },
  { name: 'AI_Building', level: 'VIBE CODING', icon: Terminal },
];

export function FrontendHub() {
  return (
    <section id="dev" className="py-24 md:py-32 px-6 md:px-8 bg-studio-bg relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
          
          {/* Content side */}
          <div>
            <span className="text-xs font-bold text-studio-cyan tracking-[0.4em] uppercase mb-4 block underline decoration-studio-cyan/30 underline-offset-8">Code_Hub</span>
            <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.8] mb-12">
              FRONTEND <br />
              <span className="text-studio-pink italic">ENGINEER</span>
            </h2>

            <div className="glass p-8 border-l-4 border-studio-pink mb-16 max-w-2xl bg-white/[0.02]">
              <p className="text-sm text-white/70 leading-relaxed font-medium tracking-wide">
                Specializing in building high-fidelity web interfaces using React and Tailwind. 
                Leveraging advanced AI workflows to accelerate the transition from concept to production code. 
                I focus on interactive storytelling through clean architectural patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webProjects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-80 rounded-xl overflow-hidden glass border-white/10"
                >
                  {/* Main Link Overlay */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0 z-10"
                  />

                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-between z-20 pointer-events-none">
                    <div className="flex justify-between items-start pointer-events-auto">
                      <span className="px-2 py-1 bg-studio-cyan/10 border border-studio-cyan/20 text-[9px] font-bold text-studio-cyan uppercase">
                        {project.status}
                      </span>
                      <div className="flex gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 glass border-white/10 hover:bg-studio-pink transition-colors relative z-30">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="pointer-events-none">
                      <div className="flex gap-2 mb-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[7px] font-bold text-white/40 uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                      <h4 className="font-display text-xl uppercase tracking-wider mb-2 group-hover:text-studio-cyan transition-colors">{project.title}</h4>
                      <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-widest line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar / Stats Side */}
          <div className="relative">
            <div className="sticky top-32 space-y-8">
              <div className="glass p-8 md:p-10 border-white/10 rounded-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-2 w-2 bg-studio-pink rounded-full animate-pulse"></div>
                  <h3 className="text-xs font-bold uppercase tracking-[.3em]">Technical_Stack</h3>
                </div>

                <div className="space-y-6">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-end mb-3">
                        <div className="flex items-center gap-4">
                          <skill.icon className="h-4 w-4 text-studio-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{skill.name}</span>
                        </div>
                        <span className="text-[8px] font-bold text-studio-pink tracking-[.2em]">{skill.level}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-studio-cyan/40"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 border border-dashed border-white/10 rounded-lg">
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-[.4em] mb-4">Methodology_Protocol</div>
                  <p className="text-[10px] leading-relaxed text-white/50 uppercase tracking-widest">
                    Utilizing <span className="text-studio-cyan">Prompt-First Design</span> workflows to rapidly prototype, test, and deploy semantic components. 
                    Merging traditional coding logic with AI-assisted optimization for superior build speed.
                  </p>
                </div>
              </div>

              {/* Decorative terminal accent */}
              <div className="glass p-6 text-[10px] font-mono text-studio-cyan/60 rounded-xl border-white/5 hidden md:block overflow-hidden">
                <div className="flex justify-between mb-4 border-b border-white/5 pb-2">
                  <span>TERMINAL_OUTPUT</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  </div>
                </div>
                <div className="space-y-1 opacity-40">
                  <div>&gt; INIT_ENVIRONMENT_CHECK... [OK]</div>
                  <div>&gt; LOADING_DEPENDENCIES: REACT, TAILWIND... [OK]</div>
                  <div>&gt; MOUNTING_COMPONENT: FRONTEND_HUB...</div>
                  <div className="flex gap-1">
                    <span>&gt; AGENT_STATUS:</span>
                    <span className="animate-pulse">BUILDING_...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
