import React from 'react';

export const CRTOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
      
      {/* Screen flicker */}
      <div className="absolute inset-0 bg-white/5 animate-pulse opacity-[0.02]"></div>
      
      {/* Scan line animation */}
      <div className="absolute top-0 w-full h-1 bg-term-green/20 shadow-[0_0_10px_rgba(0,255,65,0.5)] animate-scan opacity-30"></div>
    </div>
  );
};