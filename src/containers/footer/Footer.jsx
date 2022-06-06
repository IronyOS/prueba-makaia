import { FaTwitterSquare, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import './footer-style.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-text'>
                <p>Our Social Media</p>
                <IoIosArrowDown />
            </div>
            <div className="icon-group">
                <a className="icons" href='https://twitter.com/googlecloud?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><FaTwitterSquare /></a>
                <a className="icons" href="https://es-la.facebook.com/googlecloud/"><FaFacebook /></a>
                <a className="icons" href='https://www.instagram.com/googlecloud/'><FaInstagram /></a>
            </div>
            <div className="footer-text">
                <p>© 2022 RCP LLC Felix Rodriguez Privacy & Terms</p>
            </div>
        </div>
    );
}

