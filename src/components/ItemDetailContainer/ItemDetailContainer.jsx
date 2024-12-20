import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductByid } from "../../services/firebase/firestore/product";
import { useAsync } from "../../hooks/useAsync";


export default function ItemDetailContainer() {
    const { productId } = useParams()


    const asynFunction = () => getProductByid(productId)
    const {data:product} = useAsync(asynFunction, [productId])

    return (
        <div>
            <h2>Detalle del producto</h2>
            <hr />
            <ItemDetail {...product} />
        </div>
    );
}