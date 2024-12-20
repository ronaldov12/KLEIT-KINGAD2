import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export default function ItemDetail({ id, name, img, description, category, price, stock }) {

    const { addItem, isInCart } = useCart();

    const handleAdd = (count) => {
        const productToAdd = {
            id,
            name,
            price,
            quantity: count
        };
        addItem(productToAdd);
    };

    return (
        <div className="detalle-contenedor">
            <h2 className="item-titulo">{name}</h2>
            <div className="item-card">
                <div className="item-img-contenedor">
                    <img
                        src={img}
                        className="item-img"
                        alt={name}
                    />
                </div>

                <div className="item-info">
                    <p className="item-description">{description}</p>
                    <p className="item-category">Category: {category}</p>
                    <p className="item-price">Price: $ {price}</p>
                    <p className="item-stock">Stock: {stock}</p>
                </div>

                {isInCart(id) ? (
                    <Link to="/cart" className="finalize-link">Finalizar compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleAdd} />
                )}
            </div>
        </div>
    );
}
