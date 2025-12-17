import React, { useState, useEffect } from 'react';

export const HUDFooter: React.FC = () => {
  const [time, setTime] = useState('');
  const [freq, setFreq] = useState(440);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split('T')[1].split('.')[0]);
    };
    
    const interval = setInterval(() => {
      updateTime();
      setFreq(Math.floor(Math.random() * 200) + 300);
    }, 1000);
    
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-term-green/30 backdrop-blur-md z-40 px-4 py-2 flex justify-between items-center text-[10px] md:text-xs font-mono uppercase text-term-green">
      <div className="flex flex-col">
        <span className="opacity-50">STATUS: ACTIVE</span>
        <span>NET: ONLINE</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <span className="opacity-50">FREQ: </span>
          <span>{freq}Hz</span>
        </div>
        <div className="text-right">
          <span className="opacity-50">UTC: </span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};