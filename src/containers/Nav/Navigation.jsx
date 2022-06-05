import { Link } from 'react-router-dom';
import "./Nav-style.css";

export default function Navigation() {
    return (
        <div className='container'>
            <nav>
                <ul>
                <li style={{"--i": "3"}}><Link className='a' to="/">Us</Link></li>
                <li style={{"--i": "2"}}><Link className='a' to="/about">About</Link></li>
                <li style={{"--i": "1"}}><Link className='a' to="/livechat">Livechat</Link></li>
                </ul>
            </nav>
        </div>
    );
}