import Item from "../Item/Item";

export default function ItemList({ products }) {
    return (
        <div
            className="container"
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
                padding: "1vw",
                margin: "7vw",
            }}
        >
            {products && products.length > 0 ? (
                products.map((product) => <Item key={product.id} products={product} />)
            ) : (
                <h3>cargando productos...</h3>
            )}
        </div>
    );
}
