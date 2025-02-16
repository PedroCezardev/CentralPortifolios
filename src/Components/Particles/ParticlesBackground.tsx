import { useEffect } from 'react';

// Tipagem para o uso do particlesJS (Se necessário)
declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    // Inicializar o particlesJS
    if (window.particlesJS) {
      window.particlesJS("particles", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "push",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []); // A dependência vazia significa que o efeito é executado apenas uma vez, na montagem.

  return (
    <div>
      {/* Elemento onde o particlesJS será renderizado */}
      <div id="particles" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
    
    </div>
  );
};

export default ParticlesBackground;
