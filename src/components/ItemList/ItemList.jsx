import Item from "../Item/Item";


export default function ItemList({products}) {
    return (
        
        <div className="container"  style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px", 
            justifyContent: "center", 
            padding: "1vw",
            margin:"7vw"
        }}>
            {products.map(products => <Item key={products.id} products={products}/>)}
        </div>
    )
}


