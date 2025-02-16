// import { useEffect } from "react";
// import styles from "../../Pages/Main.module.scss";

// const Particles: React.FC = () => {
//   useEffect(() => {
//     const canvas = document.getElementById("particles") as HTMLCanvasElement;
//     const ctx = canvas.getContext("2d");
//     const particles: { x: number; y: number; r: number; d: number }[] = [];
//     const particleCount = 100;
//     const colors = ["#000000"];

//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         r: Math.random() * 5 + 1,
//         d: Math.random() * particleCount,
//       });
//     }

//     const drawParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p, i) => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = colors[i % colors.length];
//         ctx.fill();
//       });
//     };

//     const animateParticles = () => {
//       drawParticles();
//       requestAnimationFrame(animateParticles);
//     };

//     animateParticles();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <canvas id="particles" className={styles.canvas}></canvas>
//       <div className={styles.content}>
//         <h1>Bem-vindo ao Meu Site</h1>
//         <p>Explore um universo interativo de partículas!</p>
//       </div>
//     </div>
//   );
// };

// export default Particles;


import ParticlesBackground from "./ParticlesBackground";

function App() {
    return (
        <div>
            <ParticlesBackground />
            <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
                Bem-vindo ao meu site com Particles.js!
            </h1>
        </div>
    );
}

export default App;
