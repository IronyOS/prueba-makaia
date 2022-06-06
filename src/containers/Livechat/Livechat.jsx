import Navigation from "../Nav/Navigation"
import Footer from "../footer/Footer"
import "./Livechat-style.css"
import {MdSend} from "react-icons/md"

export default function Livechat() {
    return (
        <div>
        <div className="father">
            <div className="son">
                <Navigation />
                <div className="son3">
                    <p style={{"textAlign": "center", "fontFamily": "Nunito", "fontWeight": "bold", "color": "white"}}>Use el chat con moderacion</p>
                    <div className="chat-container">
                        <div className="chat-message">
                            <p className="first-message">¡Hola! Gracias por ponerte en contacto con nosotros, ¿como podemos ayudarte?</p>
                        </div>
                        <div className="chat-send">
                        <input type="text" placeholder="  En este momento no podemos atenderte debido a problemas técnicos
                        , disculpe las molestias " />
                        <MdSend className="icon4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}