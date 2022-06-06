import Footer from "../footer/Footer";
import Navigation from "../Nav/Navigation";
import { FaCloudRain, FaPaperPlane } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import './About-style.css';


export default function About() {
    return (
        <div>
            <div className="father">
                <div className="son">
                    <Navigation />
                    <div className="son2">
                        <h1 className="title-about">Sobre nosotros : </h1>
                        <span style={
                            { 
                            "fontFamily": 'Nunito', 
                            "textAlign": "center", 
                            "marginTop": "-20px", 
                            "color": "grey", 
                            "marginBottom": "10px" }
                            }>Pasa el mouse por encima para ver mejor</span>
                        <div className="description-paragraph">
                            <div className="card1">
                                <FaCloudRain className="icon2" /><span className="span">RCS es una iniciativa para promover la buena práctica del marketing y el posicionamiento con respecto al SEO, teniendo en cuenta que actualmente pocas son las empresas que llevan a cabo una buena optimizacion a nivel de mercadeo.</span>
                            </div>
                            <div className="card2">
                                <FaPaperPlane className="icon2" /> <span className="span">Nuestra misión es ayudar a las empresas a desarrollar software de calidad, con el objetivo de mejorar la productividad y la rentabilidad de sus portales, garantizando una mejor posición y efectividad a la hora de hacerse notar en la web.</span>
                            </div>
                            <div className="card3">
                                <GiCyberEye className="icon2" /> <span className="span">Nuestra visión es garantizar a nuestros clientes el crecimiento necesario para levantar en visualizaciones y ventas, cada uno de sus emprendimientos, a través del catching de redes, posicionamiento en buscadores y optimizacion de canales tecnológicos.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}