import { useEffect, useState } from "react"
import { getProductByID } from "../asyncMoock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer() {
    const[product, setProducts] = useState ({})
    const {productId} = useParams()

    useEffect(() => {
        getProductByID(productId)
        .then((resp) => {
            setProducts(resp)
        })
    }, [productId])
    return (
        
        <div>
            <h2>detalle del producto</h2>
            <ItemDetail {...product}/>
        </div>
    )
}


