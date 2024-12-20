import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"; 

export default function CartWidget() {
    const { getTotalQuantity } = useContext(CartContext);

    const totalQuantity = getTotalQuantity(); 

    return (
        <Link  to="/cart" 
            className="nav-link"
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0
            }}
        >
            <span style={{ fontSize: '20px' }}>
                <i className="bi bi-bag-fill"></i>
            </span>
            <span className="badge bg-secondary">{isNaN(totalQuantity) ? 0 : totalQuantity}</span>
        </Link>
    );
}