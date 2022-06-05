import Navigation from "../Nav/Navigation";
import "./Home-style.css";
import Footer from "../footer/Footer";

export default function Home() {
    return (
        <div>
        <div className="father">
            <div className="son">
                <Navigation />
                <div className="head-container">
                {/* <p className="code"></p> */}
                <h1 className="title">Bienvenido A <br></br>Rainy Cloud Services</h1>
                {/* <p className="code1"></p> */}
                <div className="description-container">
                <p className="description"> {/*<span className="span1"></span>*/}Aloja tu información en la nube completamente gratis{/* <span className="span2"></span>*/}</p>
                
                </div>
                </div>
                <div className="container-cloud">
                    <div className="cloud"></div>
                    <div className="rain">
                        <span style={{"--i": "11"}}></span>
                        <span style={{"--i": "12"}}></span>
                        <span style={{"--i": "10"}}></span>
                        <span style={{"--i": "14"}}></span>
                        <span style={{"--i": "18"}}></span>
                        <span style={{"--i": "16"}}></span>
                        <span style={{"--i": "19"}}></span>
                        <span style={{"--i": "20"}}></span>
                        <span style={{"--i": "19"}}></span>
                        <span style={{"--i": "10"}}></span>
                        <span style={{"--i": "16"}}></span>
                        <span style={{"--i": "14"}}></span>
                        <span style={{"--i": "18"}}></span>
                        <span style={{"--i": "11"}}></span>
                        <span style={{"--i": "13"}}></span>
                        <span style={{"--i": "15"}}></span>
                    </div>
                </div>
                
            </div>
            
        </div>
        <Footer />
        </div>
    );
}