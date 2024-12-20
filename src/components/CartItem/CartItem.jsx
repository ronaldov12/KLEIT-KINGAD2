import { useCart } from "../../hooks/useCart"

export default function CartItem({ id, name, quantity, price }) {
    const { removeItem } = useCart()

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <div>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio x unidad: ${price}
                </p>

            </section>
            <footer>
                <p>
                    total: $ {price * quantity}
                    <button onClick={() => handleRemove(id)}>
                        Eliminar
                    </button>
                </p>
            </footer>
        </div>
    )
}

