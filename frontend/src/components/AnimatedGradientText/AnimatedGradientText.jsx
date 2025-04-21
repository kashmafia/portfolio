import React, { useRef, useEffect } from 'react';

const AnimatedGradientText = ({ 
  text, 
  colors = ['#ff0080', '#7928ca', '#ff4d4d'], 
  className,
  duration = 5 // duration in seconds, default is 3s
}) => {
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      const style = document.createElement('style');
      const randomId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
      spanRef.current.classList.add(randomId);
      
      style.textContent = `
        .${randomId} {
          background: linear-gradient(
            to right,
            ${colors[0]},
            ${colors[1]},
            ${colors[2]},
            ${colors[0]}
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine${randomId} ${duration}s linear infinite;
        }

        @keyframes shine${randomId} {
          to {
            background-position: 200% center;
          }
        }
      `;
      
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    }
  }, [colors, duration]);

  return (
    <span ref={spanRef} className={className}>
      {text}
    </span>
  );
};

export default AnimatedGradientText;