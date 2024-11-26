const products = [
    // Productos formales
    {
        id: "1",
        name: "Zapato Curtis",
        price: 1000,
        category: "formales",
        img: "/img/curtis.webp",
        stock: 25,
        description: "Elegantes zapatos curtis de cuero vacuno, ideales para ocasiones formales y eventos especiales.",
    },
    {
        id: "2",
        name: "Zapato Marco",
        price: 800,
        category: "formales",
        img: "/img/marco.webp",
        stock: 16,
        description: "zapatos de cuero vacuno, cómodos y perfectos para un estilo sofisticado en eventos formales.",
    },
    {
        id: "3",
        name: "Zapato Glen",
        price: 1200,
        category: "formales",
        img: "/img/glen.webp",
        stock: 20,
        description: "Zapatos Glen de Cuero Vacuno, ideales para el hombre que busca un toque de distinción.",
    },
    {
        id: "4",
        name: " Zapato Garry",
        price: 1100,
        category: "formales",
        img: "/img/garry.webp",
        stock: 10,
        description: "Zapatos con correa de cuero, un diseño moderno y elegante para un look refinado.",
    },

    // Productos mocasines
    {
        id: "7",
        name: "Mocasines Sunday",
        price: 750,
        category: "mocasines",
        img: "/img/sunday.webp",
        stock: 15,
        description: "Mocasines de Sunday, confortables y con un estilo relajado para un look más casual.",
    },
    {
        id: "8",
        name: "Nautico Ballard Azul",
        price: 700,
        category: "mocasines",
        img: "/img/nautico.webp",
        stock: 22,
        description: "Mocasines de Nautico Ballard con un diseño sencillo y cómodo, perfectos para ocasiones informales.",
    },
    {
        id: "9",
        name: "Nautico Fly",
        price: 800,
        category: "mocasines",
        img: "/img/nauticofly.webp",
        stock: 18,
        description: "Mocasines de Nautico Fly , suaves y cómodos para un look relajado y estilizado.",
    },
    {
        id: "10",
        name: "Mocasines de Vestir Moscú",
        price: 850,
        category: "mocasines",
        img: "/img/moscumarron.webp",
        stock: 12,
        description: "Mocasines Moscú, prácticos y elegantes para un look casual y moderno.",
    },

    // Productos casuales
    {
        id: "11",
        name: "Casual Hush Puppies",
        price: 850,
        category: "casuales",
        img: "/img/hushpuppies.webp",
        stock: 20,
        description: "zapatos Casual Hush Puppies, cómodas y con un estilo moderno, perfectas para el día a día.",
    },
    {
        id: "12",
        name: "Briggs Oxford",
        price: 650,
        category: "casuales",
        img: "/img/briggsoxford.webp",
        stock: 30,
        description: "Zapatillas de lona casuales, ligeras y perfectas para un look informal y cómodo.",
    },
    {
        id: "13",
        name: " Marin",
        price: 1000,
        category: "casuales",
        img: "/img/marin.webp",
        stock: 18,
        description: "Botas de cuero casuales, resistentes y con un diseño clásico para un estilo relajado.",
    },
    {
        id: "14",
        name: "Samba OG",
        price: 750,
        category: "casuales",
        img: "/img/sambaog.webp",
        stock: 25,
        description: "Zapatillas deportivas casuales, cómodas y con un diseño versátil para cualquier ocasión.",
    },
];

// obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 150);
    });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1500);
    });
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 150);
    });
};
