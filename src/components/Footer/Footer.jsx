import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/category/formales">Formales</Link></li>
                    <li><Link to="/category/casuales">Casuales</Link></li>


                </ul>
            </div>
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/public/assets/img/facebook.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/public/assets/img/instagram.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/public/assets/img/x.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
                </a>
            </div>

        </footer>
    );
};

export default Footer;
