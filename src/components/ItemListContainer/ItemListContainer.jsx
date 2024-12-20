import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/firebase/firestore/product";

export default function ItemListContainer() {
    const { categoryId } = useParams();

    const asynFunction = () => getProducts(categoryId);

    const { data: products, loading, error } = useAsync(asynFunction, [categoryId]); 

    if (loading) {
        return <h3>Cargando productos...</h3>;
    }

    if (error) {
        return <h3>Error al cargar productos</h3>;
    }

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
}
