
import { useCounter } from "../../hooks/useCounter"; 

export default function ItemCount({ initialValue = 1, stock, onAdd }) {
    const { counter: cantidad, increment, decrement, } = useCounter(initialValue); 

    return (
        <>
            <h1>{cantidad}</h1>
            <button onClick={decrement} disabled={cantidad <= 1}>-</button>
            <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            <button onClick={increment} disabled={cantidad >= stock}>+</button>
        </>
    );
}
