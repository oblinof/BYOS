import React from 'react';
import { CRTOverlay } from './components/CRTOverlay';
import { Section } from './components/Section';
import { HUDFooter } from './components/HUDFooter';
import { SectionData } from './types';
import { Terminal, Battery, Wifi, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const contentData: SectionData[] = [
  {
    id: 'intro',
    title: '¿QUÉ ES?',
    type: 'info',
    content: [
      'BYOS — Bring Your Own Sound.',
      'Una performance sonora colectiva de ambient portátil.',
      'Cada persona actúa como un vector activo dentro de la composición.'
    ]
  },
  {
    id: 'how-to',
    title: '¿CÓMO FUNCIONA?',
    type: 'list',
    content: [
      '• Traé tu teléfono o synth de bolsillo + parlante BT.',
      '• Generá y transformá texturas en tiempo real.',
      '• Usá tu propio synth o los instrumentos de oblinof.org.',
      '• Movete, agrupate y dispersate para modificar el sonido.'
    ]
  },
  {
    id: 'space',
    title: 'EL ESPACIO FÍSICO',
    type: 'info',
    content: [
      'No hay mezcla central ni sistema de sonido fijo.',
      'La obra emerge únicamente de la superposición de los vectores en el aire.',
      'Centro: Densidad, resonancias y armonías.',
      'Bordes: Texturas livianas y frágiles.',
      'Cada escucha es irrepetible y cambia al moverse.'
    ]
  },
  {
    id: 'slogan',
    title: 'TU ROL',
    type: 'highlight',
    content: [
      'TRAE TU SONIDO.',
      'MODIFÍCALO.',
      'MUTA LA COMPOSICIÓN.'
    ]
  },
  {
    id: 'action',
    title: 'HERRAMIENTAS',
    type: 'link',
    content: [
      'Accede a los sintetizadores web para participar.',
      'Requiere conexión a internet.'
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-term-green font-mono selection:bg-term-green selection:text-black overflow-x-hidden pb-20">
      <CRTOverlay />
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Top Bar HUD */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur border-b border-term-green/30 p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="animate-pulse" />
          <span className="font-bold tracking-widest text-sm">BYOS_SYS</span>
        </div>
        <div className="flex gap-3 text-xs opacity-70">
          <Activity size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-md mx-auto pt-20 px-4">
        
        {/* Title Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border-x border-term-green/20 -z-10"></div>
          <h1 className="text-6xl font-pixel mb-2 text-term-green drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
            BYOS
          </h1>
          <p className="text-xs tracking-[0.3em] uppercase opacity-80 border-y border-term-green/30 py-2 inline-block">
            AMBIENT PORTABLE
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-4">
          {contentData.map((section, index) => (
            <Section key={section.id} data={section} index={index} />
          ))}
        </div>

        {/* Decor: Vertical Line */}
        <div className="fixed left-4 top-0 bottom-0 w-px bg-term-green/10 z-0"></div>
        <div className="fixed right-4 top-0 bottom-0 w-px bg-term-green/10 z-0"></div>

      </main>

      <HUDFooter />
    </div>
  );
}