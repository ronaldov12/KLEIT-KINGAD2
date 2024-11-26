import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asyncMoock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])

    return (
        
        <div>
            <ItemList products={products} />
        </div>
    );
}