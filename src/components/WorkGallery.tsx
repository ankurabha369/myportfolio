import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { Box, Film, Maximize2, Palette, X, ExternalLink } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Work' },
  { id: '3d', name: '3D Renders', icon: Box },
  { id: 'Animations', name: 'Animation', icon: Palette },
  { id: 'design', name: 'Graphic Design', icon: Palette },
  // { id: 'edit', name: 'Video Editing', icon: Film },
];

interface Project {
  title: string;
  category: string;
  tool: string;
  image: string;
  description: string;
  type?: 'video' | 'image';
  videoUrl?: string;
}

const projects: Project[] = [
  // Animations
  
  {
    title: "First 2D Tale",
    category: "Animations",
    tool: "Moho Pro",
    image: "src/assets/2D/thumbnail.jpg",
    description: "The beginning of my journey into character storytelling and 2D animation.",
    type: 'video',
    videoUrl: 'https://youtu.be/eC6Q5wZAM9A?si=NNr0FMTdHYrH6Vri' // Example link
  },
  {
    title: "First 3D Tale",
    category: "Animations",
    tool: "Blender, Moho Pro, Affinity",
    image: "src/assets/2D/graphite.png",
    description: "My debut 3D animation project created for a competition.",
    type: 'video',
    videoUrl: 'https://youtu.be/Y8oTcTjKCgI?si=CtnLHu3vHKH41Czf' // Example link
  },
  {
    title: "Loop Animation",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/mystic.png",
    description: "A mesmerizing loop animation created using Blender, showcasing fluid motion and seamless transitions.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/mystic.mp4' // Example link
  },
  {
    title: "Cloth Simulation",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/clothsimulation.png",
    description: "Experimenting with volumetrics and cloth simulation in Blender to create a dynamic and visually captivating animation.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/clothsimulation.mp4' // Example link
  },
  {
    title: "Lotus GeoNodes",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/lotus.png",
    description: "Creating with GeoNodes in Blender to generate a procedural lotus flower animation, showcasing the power of node-based workflows for organic motion.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/lotus.mp4' // Example link
  },
  {
    title: "Proximity Effect",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/proximity.png",
    description: "Exploring GeoNodes to create a dynamic proximity effect, where objects react and change based on their distance to each other, showcasing procedural animation techniques.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/proximity.mp4' // Example link
  },
 {
    title: "Rigging Practice",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/robot.png",
    description: "Riggin practice with a simple robot model, focusing on joint placement and weight painting for smooth deformations & bendy bones for added flexibility.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/robot.mp4' // Example link
  },
 {
    title: "Walk Cycle [Rigging]",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/walk.png",
    description: "Practice session focusing on walk cycle animation and rigging techniques.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/walk.mp4' // Example link
  },
 {
    title: "Product Animation",
    category: "Animations",
    tool: "Blender",
    image: "src/assets/3D/Videos/productanimation.png",
    description: "Experimenting with product animation techniques, focusing on smooth transitions and dynamic camera movements.",
    type: 'video',
    videoUrl: 'src/assets/3D/Videos/product animation.mp4' // Example link
  },
 {
    title: "2D Animation 1",
    category: "Animations",
    tool: "Moho Pro",
    image: "src/assets/2D/mickeymouse.png",
    description: "Rigging in 2d and animation practice",
    type: 'video',
    videoUrl: 'src/assets/2D/Fnale.mp4' // Example link
  },
  {
    title: "2D Animation 2",
    category: "Animations",
    tool: "Moho Pro",
    image: "src/assets/2D/jagannath.png",
    description: "Illustration and animation practice",
    type: 'video',
    videoUrl: 'src/assets/2D/jagannath.mp4' // Example link
  },


  // 3D renders
  {
    title: "GeoNodes Experiment",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/2026.png",
    description: "Abstract geometric composition created using procedural modeling techniques.",
    type: 'image'
  },
  {
    title: "Pokeball Render",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/Pokeball.jpg",
    description: "Just love Pokemon",
    type: 'image'
  },
  {
    title: "Hello Kitty",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/HelloKitty.png",
    description: "Modelling practice with a cute subject",
    type: 'image'
  },
  {
    title: "Character modeling",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/charactermodelling.png",
    description: "Practice session focusing on character design and modeling techniques.",
    type: 'image'
  },
  {
    title: "PC Setup Render",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/PCsetup.png",
    description: "A custom 3D computer setup, modeled entirely from scratch to showcase end-to-end asset creation.",
    type: 'image'
  },
  {
    title: "PC Setup Night Render",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/PCsetpupnight.png",
    description: "A custom 3D computer setup, modeled entirely from scratch to showcase end-to-end asset creation.",
    type: 'image'
  },
  {
    title: "Keyboard Render",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/keyboard.png",
    description: "A custom 3D keyboard, modeled entirely from scratch to showcase end-to-end asset creation.",
    type: 'image'
  },
 {
    title: "Environment Render",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/scoteer future.png",
    description: "A custom 3D environment, created using addons and asset libraries.",
    type: 'image'
  },
  {
    title: "Speaker Render",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/Speaker.png",
    description: "A custom 3D speaker, modeled entirely from scratch to showcase end-to-end asset creation.",
    type: 'image'
  },
  {
    title: "My Table Lamp",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/My table lamp.png",
    description: "A custom 3D lamp, modeled entirely from scratch to showcase end-to-end asset creation.",
    type: 'image'
  },
  {
    title: "Fast Food Burger",
    category: "3d",
    tool: "Blender",
    image: "src/assets/3D/Images/fastfood.png",
    description: "A custom 3D burger,French Fries, modeled entirely from scratch to showcase end-to-end asset creation.",
    type: 'image'
  },
  // Graphic Design
  // Paper cut design
    {
    title: "Paper Cut Design 1",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/paper cut garden.jpg",
    description: "A paper cut design created using Inkscape, showcasing intricate layering and vibrant colors.",
    type: 'image'
  },
  // Pixel art
  {
    title: "Pixel Art Design 1",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/My pixel art drawing.jpg",
    description: "A pixel art design created using Inkscape, showcasing intricate layering and vibrant colors.",
    type: 'image'
  },
  
  {
    title: "Pixel Art Design 2",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/My_Dogue.jpg",
    description: "A pixel art design created using Inkscape, showcasing intricate layering and vibrant colors of my dog.",
    type: 'image'
  },

  // Poster design
  {
    title: "Poster Design 1",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/spyx.jpg",
    description: "Getting motivated with a Spy X Family movie to design a poster building each element from scratch using Inkscape, demonstrating a blend of creativity and technical skill.",
    type: 'image'
  },
  {
    title: "Poster Design 2",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/NikeAir.jpg",
    description: "Inspired by a Nike Air poster, I designed a poster building each element from scratch using Inkscape, demonstrating a blend of creativity and technical skill.",
    type: 'image'
  },
  {
    title: "Poster Design 3",
    category: "design",
    tool: "Affinty",
    image: "src/assets/Graphics/vibrant-green-leaves-branch-natures-freshness.jpg",
    description: "Experimenting with nature-inspired design, I created a vibrant poster featuring green leaves and branches using Affinity, showcasing my ability to capture the essence of nature in graphic form.",
    type: 'image'
  },
  {
    title: "Poster Design 4",
    category: "design",
    tool: "Affinty",
    image: "src/assets/Graphics/posteer potrait.jpg",
    description: "Digital collage or mixed media design, which blends diverse visual elements into a single, cohesive composition. This type of design often combines photographs, textures, illustrations, and typography to create a visually striking and conceptually rich piece of art.",
    type: 'image'
  },
  {
    title: "Movie Poster Design",
    category: "design",
    tool: "Affinty",
    image: "src/assets/Graphics/navodaya flim.png",
    description: "A movie poster design created using Affinity, showcasing a blend of cinematic elements and graphic design techniques to capture the essence of the film.",
    type: 'image'
  },

  // Album cover design
  {
    title: "Album Art 1",
    category: "design",
    tool: "Affinity",
    image: "src/assets/Graphics/wellfrom here.jpg",
    description: "An album cover design created using Affinity, featuring a blend of abstract elements and vibrant colors to visually represent the music's mood and vinyl theme.",
    type: 'image'
  },
  {
    title: "Album Art 2",
    category: "design",
    tool: "Affinity",
    image: "src/assets/Graphics/divine_wizard.jpg",
    description: "The primary figure is a classical Greco-Roman statue, overlaid on Leonardo da Vinci’s Vitruvian Man. This immediately suggests themes of human anatomy, perfection, divinity, and ancient knowledge.",
    type: 'image'
  },
  {
    title: "Album Art 3",
    category: "design",
    tool: "Affinity",
    image: "src/assets/Graphics/gumshoealbumart.jpeg",
    description: "The central figure is a classic noir-style character—a man in a suit partially obscured by chiaroscuro (high-contrast) shadows. This suggests themes of crime, intrigue, and moral ambiguity.",
    type: 'image'
  },
  // Infographics design
  {
    title: "Infographic 1",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/Doremon recipe.jpg",
    description: "Doremon's favorite recipe infographic created using Inkscape, combining playful illustrations and informative design to visually represent the beloved character's culinary preferences.",
    type: 'image'
  },
  {
    title: "Infographic 2",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/infographics.jpg",
    description: "Process of animation steps inforgraphic created using Inkscape, visually breaking down the stages of animation production from concept to final render, showcasing the workflow and key elements involved in bringing animated projects to life.",
    type: 'image'
  },
  {
    title: "Assams Traditional Hat",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/japi.png",
    description: "A traditional Assamese hat design created using Inkscape, showcasing the intricate patterns and cultural significance of this regional accessory.",
    type: 'image'
  },
  {
    title: "Magagize Cover Design",
    category: "design",
    tool: "Affinity",
    image: "src/assets/Graphics/Megzine cover design.png",
    description: "Pet dog magazine cover design on Affinity, featuring a blend of typography and imagery to create a visually compelling cover that captures the essence of the magazine's content.",
    type: 'image'
  },
  {
    title: "2D but 3D",
    category: "design",
    tool: "Inkscape",
    image: "src/assets/Graphics/Vector to 3D illusion.jpg",
    description: "A 2D illustration that creates a 3D illusion using perspective and shading techniques.",
    type: 'image'
  },
];

export function WorkGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) 
      ? `https://www.youtube.com/embed/${match[2]}` 
      : null;
  };

  return (
    <section id="work" className="py-32 px-8 bg-studio-bg relative pixel-grid">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-l-4 border-studio-cyan pl-6 md:pl-8">
          <div>
            <span className="text-xs font-bold text-studio-cyan tracking-[0.4em] uppercase mb-4 block">Art_Showcase</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight">Renders &<br/> <span className="text-studio-pink italic">Rhythms</span></h2>
          </div>
          
          <div className="flex gap-2 glass p-1 rounded-sm border border-white/10 self-start overflow-x-auto max-w-full no-scrollbar pb-1 md:pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-4 md:px-6 py-2 text-[9px] md:text-[10px] font-bold tracking-widest transition-all uppercase whitespace-nowrap",
                  activeTab === cat.id 
                    ? "bg-studio-cyan text-black" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-1"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="break-inside-avoid group relative overflow-hidden border border-white/10 bg-white/[0.02] mb-1 cursor-pointer"
            >
              <img 
                src={project.image} 
                className="w-full h-auto grayscale opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80 block" 
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="tool-chip text-studio-cyan border-studio-cyan/30 text-[8px]">
                    {project.tool}
                  </span>
                  <div className="h-6 w-6 glass flex items-center justify-center border-studio-cyan/20">
                    {project.type === 'video' ? <Film className="h-3 w-3 text-studio-pink" /> : <Maximize2 className="h-3 w-3 text-studio-cyan" />}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl uppercase mb-2 tracking-wider group-hover:text-studio-cyan transition-colors truncate">{project.title}</h3>
                  <p className="text-[9px] text-white/50 line-clamp-2 leading-relaxed font-bold uppercase tracking-widest mb-4">
                    {project.description}
                  </p>
                  <button 
                    className="text-[8px] font-bold text-studio-pink tracking-[0.3em] uppercase hover:underline flex items-center gap-2"
                  >
                    {project.type === 'video' ? 'Play_Source' : 'View_Spec'} <span className="h-px w-6 bg-studio-pink"></span>
                  </button>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-3 right-3 w-1 h-1 bg-studio-cyan"></div>
                <div className="absolute top-2 right-2 w-px h-3 bg-studio-cyan/40"></div>
                <div className="absolute top-2 right-2 h-px w-3 bg-studio-cyan/40"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              layoutId={selectedProject.title}
              className="glass max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-xl border-white/10 relative z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 h-10 w-10 glass rounded border border-white/10 flex items-center justify-center hover:bg-studio-pink transition-colors group"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Media Section */}
              <div className="flex-[2] bg-black/40 flex items-center justify-center overflow-hidden min-h-[300px]">
                {selectedProject.type === 'video' && selectedProject.videoUrl ? (
                  getYouTubeEmbedUrl(selectedProject.videoUrl) ? (
                    <div className="relative w-full h-full pb-[56.25%]">
                      <iframe 
                        src={`${getYouTubeEmbedUrl(selectedProject.videoUrl)}?autoplay=1&loop=1&playlist=${getYouTubeEmbedUrl(selectedProject.videoUrl)?.split('/').pop()}`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <video 
                      src={selectedProject.videoUrl}
                      controls
                      autoPlay
                      loop
                      className="w-full h-full max-h-full object-contain"
                    />
                  )
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Info Section */}
              <div className="flex-1 p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10 bg-studio-bg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold text-studio-cyan border border-studio-cyan/30 px-3 py-1 rounded-sm uppercase tracking-widest">
                      {selectedProject.tool}
                    </span>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-5xl uppercase leading-none mb-6 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 leading-relaxed font-medium tracking-wide mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-4 opacity-40">
                    <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em]">
                      <div className="h-px flex-1 bg-white/20"></div>
                      META_DATA
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-white/30 mb-1">Status</div>
                        <div className="text-studio-cyan">COMPLETED</div>
                      </div>
                      <div>
                        <div className="text-white/30 mb-1">Format</div>
                        <div className="text-white">ENCODED_RAW</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 glass p-4 text-[10px] font-bold uppercase tracking-widest text-studio-cyan hover:bg-studio-cyan hover:text-black transition-all"
                  >
                    Inquire_Rights
                  </button>
                  {selectedProject.type === 'video' && (
                    <a 
                      href={selectedProject.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass p-4 rounded border border-white/10 hover:bg-white/5 transition-all"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
