import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar() {
    // Agregar un estado para cartCount
    const [cartCount, setCartCount] = useState(0);  // Inicializa el carrito con 0 elementos


    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo03" 
                    aria-controls="navbarTogglerDemo03" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width: '100%', padding: '0', margin: '0',  backgroundColor:'#ab9d6c ', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "15vh", marginLeft:"-50px"}}>

                        
        
                        
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/formales">Zapatos Formales</Link>
                        </li>
                
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/casuales">Zapatos Casuales</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link" to="/"><img  src="/public/assets/img/s.svg" alt="kleit kingad logo" style={{ width: '3.5vw', height: 'auto' }} /></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/category/mocasines">Mocasines</Link>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '20px' }}>
                        
                        <CartWidget  />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
