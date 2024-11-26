import { Link } from "react-router-dom"
import'./Item.css'

export default function Item({ products }) {
    return (
        

        <div className="card" style={{ width: "18rem", display:"flex" }}>
            <img src={products.img} alt={products.name} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">{products.name}</h2>
                <p>{products.price}</p>
                <p>{products.description}</p>
                <Link to={`/detail/${products.id}`} className="btn btn-primary">Ver producto</Link>
            </div>

        </div>
    )
}