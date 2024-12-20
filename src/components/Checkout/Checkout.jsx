import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import "./Checkout.css";

const Checkout = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [gmail, setGmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  const { cart, getTotalQuantity,getTotal, clearCart } = useCart();
  const totalQuantity = getTotalQuantity();
  

  const createOrder = async () => {
    setLoading(true);
    try {
      const total = getTotal();
      console.log("Total Quantity:", totalQuantity); // Esto te ayudará a ver si es undefined
      const objOrder = {
        buyer: {
          firstName: nombre,
          lastName: apellido,
          phone: telefono,
          addres: direccion,
          gmail,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const id = cart.map((item) => item.id);

      // Verificar si el carrito está vacío
      if (id.length === 0) {
        console.log("El carrito está vacío o la cantidad total es inválida");
        return; // Evitar continuar si el carrito está vacío
      }

      const productRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", id))
      );
      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { stock: stockDB - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`El id de su orden es ${orderAdded.id}`);

        setOrderCreated(true);
        clearCart();
      } else {
        console.log("Hay productos que están fuera de stock");
      }
    } catch (error) {
      console.log("Error al crear la orden", error);
    } finally {
      setLoading(false);
    }

    if (loading) {
      return <h1>Se está generando la orden</h1>;
    }

    if (orderCreated) {
      return <h1>La orden fue creada correctamente</h1>;
    }
  };

  return (
    <div className="checkout-container">
      <label htmlFor="nombre">Nombre</label>
      <input onChange={(e) => setNombre(e.target.value)} value={nombre} />

      <label htmlFor="apellido">Apellido</label>
      <input onChange={(e) => setApellido(e.target.value)} value={apellido} />

      <label htmlFor="telefono">Teléfono</label>
      <input onChange={(e) => setTelefono(e.target.value)} value={telefono} />

      <label htmlFor="direccion">Dirección</label>
      <input onChange={(e) => setDireccion(e.target.value)} value={direccion} />

      <label htmlFor="gmail">Gmail</label>
      <input onChange={(e) => setGmail(e.target.value)} value={gmail} />

      <div>
        {cart.map((item) => (
          <article key={item.id}>
            <header>
              <h2>{item.name} <span>Cantidad: {totalQuantity}</span></h2>
            </header>
          </article>
        ))}
      </div>
      <h1>Checkout</h1>
      <button onClick={createOrder}>Generar Orden</button>
    </div>
  );
};

export default Checkout;
