import { QuerySnapshot, collection, getDoc, getDocs, query, where, doc } from "firebase/firestore";
import { db } from "..";
import { createProductAdapter } from "../../../adapters/ProductAdapter";

export const getProducts = (categoryid) => {
    const productsCollection = categoryid
        ? query(collection(db, "products"), where("category", "==", categoryid)) 
        : collection(db, "products");

    return getDocs(productsCollection)
        .then(QuerySnapshot => {
            const productsAdapted = QuerySnapshot.docs.map((doc) => {
                return createProductAdapter(doc);
            });
            return productsAdapted;
        })
        .catch((error) => {
            return error;
        });
}

export const getProductByid = (itemId) => {
    const productDoc = doc(db, "products", itemId);

    return getDoc(productDoc)
        .then((QuerySnapshot) => {
            const productsAdapted = createProductAdapter(QuerySnapshot);
            return productsAdapted;
        })
        .catch((error) => {
            return error;
        });
}
