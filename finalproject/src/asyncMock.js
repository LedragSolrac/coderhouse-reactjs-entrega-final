const products = [
    {
        id: '1',
        name: "Microprocesador Pc Amd Ryzen 5 4600g 8mb 3.7ghz Socket 6 Nucleos",
        price: 77599,
        category: "cpu",
        img:"https://http2.mlstatic.com/D_NQ_NP_659520-MLM51338788281_082022-O.webp",
        stock: 12,
        description:"Descripcion del Procesador",
    },
    {
        id: '2',
        name: "Microprocesador Pc Amd Ryzen 3 3200G 4ghz Socket am4 4 Nucleos",
        price: 64000,
        category: "cpu",
        img:"https://http2.mlstatic.com/D_NQ_NP_890018-MLA42157659341_062020-O.webp",
        stock: 7,
        description:"Descripcion del Procesador",
    },
    {
        id: '3',
        name: "Procesador gamer Intel Core i5-10400 de 6 núcleos y 4.3GHz de frecuencia con gráfica integrada",
        price: 96599,
        category: "cpu",
        img:"https://http2.mlstatic.com/D_NQ_NP_612966-MLA42885628349_072020-O.webp",
        stock: 9,
        description:"Descripcion del Procesador"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}