import Header from "../components/header";
import { motion } from "framer-motion";
import ModelViewer from "../components/ModelViewer";
import style from "../styles/Apropos.module.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "@/components/Footer";

export default function apropos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div>
        <Header />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ marginLeft: "44%" }} className={style.headApropos}>
            <h1 className={style.textApropos}>A PROPOS</h1>
          </div>
          <div id="apropos" className={style.apropos}>
            <div className={style.contentApropos}>
              <div className={style.card}>
                <div className={style.imgBox}>
                  <img src="/assets/img/icons8-production-100.png" alt="" />
                </div>
                <div className={style.content}>
                  <h3>Malaza</h3>
                  <p>
                    Clos Malaza est un entreprise basé sur l'agriculture et la
                    production de vin. <br /> <br />
                    Il englobe plusieur secteur d'activité pour pouvoir élargir
                    son terrain d'action
                  </p>
                </div>
              </div>
              <div className={style.card}>
                <div className={style.imgBox}>
                  <img src="/assets/img/rock_125px.png" alt="" />
                </div>
                <div className={style.content}>
                  <h3>Secteur</h3>
                  <p>
                    Clos Malaza se divise en plusieur secteur d'activité
                    agricole <br /> <br />
                    Chaque secteur agricole pratique leur agriculture
                    indépendement et librement
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <ModelViewer /> */}

          <div style={{ marginLeft: "44%" }} className={style.headApropos}>
            <h1 className={style.textApropos}>PRODUCTION</h1>
          </div>
          <div className="slider-container">
            <Slider {...settings} style={{ width: "98.3%" }}>
              <div>
                <img src="/assets/img/manioc.png" alt="" style={{ width: "90px", height: "90px" }} />
                <h3>Manioc</h3>
              </div>
              <div>
                <img src="/assets/img/arachide.png" alt="" style={{ width: "90px", height: "90px" }} />
                <h3>Arachide</h3>
              </div>
              <div>
                <img src="/assets/img/beans.png" alt="" style={{ width: "90px", height: "90px" }} />
                <h3>Haricot</h3>
              </div>
              <div>
                <img src="/assets/img/maïs.png" alt="" style={{ width: "90px", height: "90px" }} />
                <h3 style={{ marginLeft: "20px" }}>Maïs</h3>
              </div>
            </Slider>
          </div>
          <br /><br /><br />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
