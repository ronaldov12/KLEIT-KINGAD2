import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

export default function Cart() {
    const { cart, clearCart, getTotal, totalQuantity } = useCart();

    const total = getTotal();

    if (totalQuantity === 0) {
        return <h1>El carrito está vacío.</h1>;
    }

    return (
        <div className="cart-container">
            <h1>Carrito de compras</h1>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${total}</h3>
            <div>
                <button onClick={clearCart}>Borrar el carrito</button>
            </div>
            <Link to='/checkout' className="boton-comprar">
                COMPRAR
            </Link>
        </div>
    );
}
