import Navigation from "../Nav/Navigation";
import "./Home-style.css";

export default function Home() {
    return (
        <div className="father">
            <div className="son">
            <Navigation />
            <h1>Home</h1>
            <div className="container-cloud">
                <div className="cloud"></div>
            </div>
            </div>
        </div>
    );
}