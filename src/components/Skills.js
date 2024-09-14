import impresion from "../assets/img/impresion.png";
import sublimacion from "../assets/img/sublimacion.jpg";
import banner from "../assets/img/banner.jpg";
import pendon from "../assets/img/pendon.jpeg";
import vinil from "../assets/img/vinil.png";
import afiche from "../assets/img/afiche.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Servicios</h2>
                        <p>Ofrecemos servicios de impresión de alta calidad, sublimaciones personalizadas y producción de banners impactantes, además de diseño gráfico y acabados profesionales para todos tus proyectos. ¡Tu satisfacción es nuestra prioridad!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={impresion} alt="Impresion" />
                                <h5>Impresiones</h5>
                            </div>
                            <div className="item">
                                <img src={sublimacion} alt="Sublimacion" />
                                <h5>Sublimaciones</h5>
                            </div>
                            <div className="item">
                                <img src={banner} alt="Banner" />
                                <h5>Banners</h5>
                            </div>
                            <div className="item">
                                <img src={pendon} alt="Pendones" />
                                <h5>Pendones</h5>
                            </div>
                            <div className="item">
                                <img src={vinil} alt="Vinil" />
                                <h5>Vinil</h5>
                            </div>
                            <div className="item">
                                <img src={afiche} alt="Afiche" />
                                <h5>Afiches</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Zebra" />
    </section>
  )
}
