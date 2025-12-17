import React from 'react';
import { motion } from 'framer-motion';
import { SectionData } from '../types';
import { Radar } from './Radar';
import { ArrowRight, Box, Radio, Users, Wind, Zap } from 'lucide-react';

interface SectionProps {
  data: SectionData;
  index: number;
}

const Icons: Record<string, React.FC<any>> = {
  info: Box,
  sound: Radio,
  space: Wind,
  unique: Zap,
  users: Users,
  arrow: ArrowRight
};

export const Section: React.FC<SectionProps> = ({ data, index }) => {
  const isLast = data.type === 'link';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-8 p-4 border-l-2 border-term-green/40 backdrop-blur-sm bg-black/40 ${isLast ? 'border-2 border-term-green' : ''}`}
    >
      {/* Technical markers */}
      <div className="absolute -left-[5px] top-0 w-2 h-2 bg-term-green"></div>
      <div className="absolute -left-[5px] bottom-0 w-2 h-2 bg-term-green"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-3 border-b border-term-green/20 pb-2">
        <span className="text-xs font-mono bg-term-green text-black px-1 py-0.5">
          {`0${index + 1}`}
        </span>
        <h2 className="text-xl font-bold uppercase tracking-widest font-mono text-term-green drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">
          {data.title}
        </h2>
      </div>

      {/* Decorative Radar merged into Space section */}
      {data.id === 'space' && <Radar />}

      {/* Content */}
      <div className="font-mono text-sm md:text-base leading-relaxed text-term-green/90">
        {data.content.map((line, i) => (
          <p key={i} className="mb-2 last:mb-0">
            {line.startsWith('•') ? (
              <span className="flex items-start">
                <span className="mr-2 opacity-50">►</span>
                <span>{line.substring(1)}</span>
              </span>
            ) : (
              line
            )}
          </p>
        ))}
      </div>

      {/* Link Button Special */}
      {data.type === 'link' && (
        <a 
          href="https://oblinof.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 block w-full py-4 bg-term-green/10 border border-term-green hover:bg-term-green hover:text-black transition-all duration-300 text-center uppercase tracking-[0.2em] font-bold group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-term-green/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <span className="relative z-10 flex items-center justify-center gap-2">
            ACCEDER MINI-SYNTHS <ArrowRight size={16} />
          </span>
        </a>
      )}
      
      {/* Decorative corner numbers */}
      <div className="absolute top-2 right-2 text-[10px] opacity-40 font-mono">
        SYS_RDY
      </div>
    </motion.div>
  );
};