import Particles from 'react-tsparticles'; // Importação correta do Particles do react-tsparticles

const ParticlesBackground = () => {
  const particlesOptions = {
    background: {
      color: { value: '#000000' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        push: { distance: 10, duration: 0.4 },
      },
    },
    particles: {
      move: {
        direction: 'none',
        outModes: {
          default: 'bounce',
        },
      },
      number: { value: 80 },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Particles id="tsparticles" options={particlesOptions} />
    </div>
  );
};

export default ParticlesBackground;
  