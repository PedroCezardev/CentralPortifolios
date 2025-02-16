import style from "./Main.module.scss";
// import Particles from "../Components/Particles/Particles";
// import ParticlesBackground from "../Components/Particles/ParticlesBackground";
import CardLinks from "../Components/Cards/CardLinks";
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import nextechIcon from "../assets/LogoNexTech.png";
import perfilPedro from "../assets/perfilPedro.jpeg";

const Main = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração padrão da animação
      offset: 50, // offset padrão da animação
    });
  }, []);

  return (
    <section className={style.container}>
        <nav className={style.navbar}>
            <div className={style.logo}  data-aos="fade-up" data-aos-delay="200">
              <img src={nextechIcon} alt="Logo" />
              <h1>NEXTECH</h1>
            </div>
            <div className={style.profile} data-aos="fade-up" data-aos-delay="200">
              <img src={perfilPedro} alt="" />
              <div className={style.titles}>
                <h1>Pedro Cezar</h1>
                <p>Criador de Produtos Digitais</p>
              </div>
            </div>
        </nav>
        <div className={style.cardContainer} >
            <CardLinks />
        </div>
    </section>
  )
}

export default Main