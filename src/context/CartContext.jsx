import { createContext, useState, useContext } from "react";
import { useNotification } from "./NotificationContext";  

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { setNotification } = useNotification(); 


    // Verifica si el producto ya está en el carrito
    const isInCart = (id) => cart.some((prod) => prod.id === id);

    // Agrega un producto al carrito o actualiza la cantidad si ya está presente
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }]);
            setNotification('success', `Producto agregado: ${productToAdd.name}`);
        } else {
            setCart((prevCart) =>
                prevCart.map((prod) =>
                    prod.id === productToAdd.id
                        ? { ...prod, quantity: prod.quantity + 1 }
                        : prod
                )
            );
            setNotification('success', `Cantidad actualizada para: ${productToAdd.name}`);
        }
    }

    // Elimina un producto del carrito
    const removeItem = (id) => {
        const productToRemove = cart.find(prod => prod.id === id);
        setCart((prevCart) => prevCart.filter((prod) => prod.id !== id));
        setNotification('danger', `Producto eliminado: ${productToRemove?.name}`);
    }

    // Vacía el carrito
    const clearCart = () => {
        setCart([]);
        setNotification('warning', 'El carrito ha sido vaciado');
    }

    // Obtiene el total de todos los productos en el carrito
    const getTotal = () => cart.reduce((accu, item) => accu + item.quantity * item.price, 0);

    // Obtiene la cantidad total de productos en el carrito
    const getTotalQuantity = () => cart.reduce((accu, product) => accu + product.quantity, 0);

    const obj = {
        cart,           // Estado del carrito
        isInCart,       // Verificar si un producto está en el carrito
        addItem,        // Agregar producto al carrito
        removeItem,     // Eliminar producto del carrito
        clearCart,      // Vaciar el carrito
        getTotal,       // Obtener total a pagar
        getTotalQuantity // Obtener cantidad total de productos
    };

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    );
}
