/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkGallery } from './components/WorkGallery';
import { FrontendHub } from './components/FrontendHub';
import { AudioSection } from './components/AudioSection';
import { Contact, Footer } from './components/Contact';
import { motion, useScroll, useSpring } from 'motion/react';
import { cn } from './lib/utils';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-studio-bg selection:bg-studio-accent selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-studio-pink z-[60] origin-left shadow-[0_0_10px_rgba(255,0,85,0.5)]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <WorkGallery />
        <FrontendHub />
        <AudioSection />
        <Contact />
      </main>
      
      <Footer />

      {/* Decorative background gradients */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-studio-accent/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]"></div>
      </div>
    </div>
  );
}
