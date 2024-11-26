import { Link } from "react-router-dom";
import './ItemDetail.css'; // Asegúrate de importar el archivo CSS

export default function ItemDetail({ name, img, description, category, price, stock }) {

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
                    <p className="item-category">Categoria: <strong>{category}</strong></p>
                    <p className="item-price">Precio: <strong>${price}</strong></p>
                    <p className="item-stock">stock: <strong>{stock}</strong></p>

                    <Link to="/cart" className="btn btn-primary finalize-link">Comprar</Link>
                </div>
            </div>
        </div>
    );
}
