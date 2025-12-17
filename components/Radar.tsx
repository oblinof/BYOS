import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Radar: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32 mx-auto my-4 border border-term-green/30 rounded-full overflow-hidden flex items-center justify-center bg-term-dim/10">
      {/* Grid */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="border-r border-b border-term-green/20"></div>
        <div className="border-b border-term-green/20"></div>
        <div className="border-r border-term-green/20"></div>
        <div className=""></div>
      </div>
      
      {/* Concentric circles */}
      <div className="absolute w-24 h-24 border border-term-green/20 rounded-full"></div>
      <div className="absolute w-12 h-12 border border-term-green/20 rounded-full"></div>

      {/* Sweep */}
      <motion.div 
        className="absolute w-full h-full bg-gradient-to-r from-transparent via-term-green/10 to-transparent"
        style={{ rotate: rotation }}
      />
      <div 
        className="absolute w-1/2 h-0.5 bg-term-green/50 origin-right left-0 top-1/2"
        style={{ transform: `rotate(${rotation}deg)` }}
      />

      {/* Vectors (Dots) */}
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute w-1 h-1 bg-term-green rounded-full top-8 left-10"
      />
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
        className="absolute w-1.5 h-1.5 bg-term-green rounded-full bottom-10 right-8"
      />
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
        className="absolute w-1 h-1 bg-term-green rounded-full top-1/2 left-20"
      />
      
      <div className="absolute bottom-1 right-1 text-[8px] font-mono text-term-green/70">
        VECT_TRK
      </div>
    </div>
  );
};