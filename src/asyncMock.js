const productos = [
    {
        id: '1',
        name: 'Mate imperial',
        category: 'Mates',
        img: 'https://apolomates.com.ar/wp-content/uploads/2016/08/imppp.jpg',
        stock: '25',
        price: 30000,
        description: 'Descripcion del mate imperial'
    },
    {
        id: '2',
        name: 'Mate Camionero',
        category: 'Mates',
        img: 'https://acdn.mitiendanube.com/stores/002/293/236/products/mate-camionero-acero-liso1-eb3608d3db3048e87016652606610450-1024-1024.jpg',
        stock: '10',
        price: 20000,
        description: 'Descripcion del mate Camionero'
    },
    {
        id: '3',
        name: 'Mate Torpedo',
        category: 'Mates',
        price: 10000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_605530-MLA54366012121_032023-O.webp',
        stock: '5',
        description: 'Descripcion del mate Torpedo'
    },
    
    
    
    {
        id: '4',
        name: 'Bombilla',
        category: 'Bombillas',
        img: 'https://esdemipais.com/media/2022/05/bombilla-pico-de-loro-una-unidad.png',
        stock: '30',
        price: 9000,
        description: 'Descripcion de bombilla'
    },
    {
        id: '5',
        name: 'Bombilla 2',
        category: 'Bombillas',
        price: 3000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_826357-MLA49193628549_022022-O.webp',
        stock: '50',
        description: 'Descripcion de bombilla 2'
    },
    {
        id: '6',
        name: 'Bombilla 3',
        category: 'Bombillas',
        price: 4000,
        img: 'https://www.deliargentina.com/image/cache/catalog/product/mates/bombilla-acero-inoxidable/bombilla-de-acero-inoxidable-resorte-335x335.png',
        stock: '13',
        description: 'Descripcion de bombilla 3'
    },



    {
        id: '7',
        name: 'Yerba Canarias',
        category: 'Yerbas',
        price: 3500,
        img: 'data:image/jpeg;base64,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ERERERERERERERERERERERRO8HUHj+ii6YqT3i6jfFRFK5eG23+IHo3yWhQ90t1F5xL5iVRdQvd1B707bdSR42wvlJDs2i7IsIHSkPJufwKjt6pQ2dnTdGXR2EjRctwmR9m2IIuMV7HOw0tnoy1QMVV617y+mfYSB4IDWykEXJAvcm2oDVcp4Y7rajrjhfpmO3u4KB1SSWAweNvJa9PvfU4aEkRk1EkjJOidGzNjGGzsjZ3erY7bNN0/Xxeryk6bfV54elnlnl4rltQ53ybZ/D64knwfvcaMx695Cx1JYNnFgBbK2ptPfUnDJw79wtILdod2q/V2dTqOEW9Yiw/+3CTyEADn41KWMe0Gb+qDf8gMd5JPauosrInnoSMdcYgGua647RY6L0QqTsSlhj2s9kNuGIujY3AvGxxsfEk+avTmLCxWCFNw3LgtDriDfRaVGsXgyIgkdyw2C9sQsXpgUTacfCPBTStmmHTHipOTVR1L11vyHMqzhQAx35h5KCrmOi0appLj2DmTYNy1uch8T4Lc3dcC5xGYtk7TFc3Nm6gaZnX4rR2o2+G+TRcuJ0FrduXvB8FJ7AbbFZuFvK98Tu1z7538Vt4G9amfvI/caeKrPyKm0RF6dV0RERERERERERERERERERERERFB70S4YwSCRfkCbe5VZu24m5YgD35H4roqwyUzHdZjT4gFY+L2OzEVTV3yCY0nIRxnxVinXLGxCoX9rA6PHvC+/wBoH6XxVum3fpXdanjP2QtOXc6jd/llv7r3t+4qg7/x52lTvH6qUYscFT9pcSXqTYMrEFjJAf4tMiR5rUFLMDcvgdcBrwYWND2EWe3IXsRbK/JW+XcaA9WSZng/F+K61JdwnfMq5PtNYR8AEGx8S1u6HNI6Ce/dnxXw1qZM3++2FTpNny4WNEdK7huc5mT2YCSDcBthfotv4LS2pQzPMz208HEkF33keWydTo4Q4WdcFweLaW5kq4y7j1g6tVE7uMRHxDvyWlNultNunAf9tzf+0r6MDjW3Ed566ECJHDO/COSaDrfLs4Kp7sUk0dXxnQNgjbGWhmPHckAHO9zc3Nz3BXT+1O74qKm2JtJutNi/ce0/istGWGsb1qSYeADvwkqLEYPF1X7zmxaLX8SST1JJXdI0qbYafvst3KyjaLe8LNFUtOhCphrnjrxTM/eikb94WWm2xHcAvAPYcj8VUqYWqwXb4KYOadV0DZ7w52S33nMqv7DqhibY5E296skUDnnL39iq4am+rLGCSXeQz5LmrYyeC1HQB725Fzh1R81v1iNL96nKOmwC5Nydexe6amawWGvM8z4rYXr8Hs5lCHOMu46DoPnn0VN9SbDJERFoqJERERERERERERERERERERERERERERERERERERERERERERY3RNOrQfILDLs+J2sbT5LaREUc3Y0AzEYHhkt6OMNFgF7RfAAERERfUREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q==',
        stock: '30',
        description: 'Descripcion de canarias'
    },
    {
        id: '8',
        name: 'Yerba Playadito',
        category: 'Yerbas',
        price: 1500,
        img: 'https://jumboargentina.vtexassets.com/arquivos/ids/609099/Yerba-Mate-Playadito-Suave-X500gr-1-854543.jpg?v=637388478795030000',
        stock: '50',
        description: 'Descripcion de playadito'
    },
    {
        id: '9',
        name: 'Yerba Rosamonte',
        category: 'Yerbas',
        price: 1900,
        img: 'https://acdn.mitiendanube.com/stores/805/409/products/tradicional-plus1-961fec78b214dd83c116708697841559-640-0.jpg',
        stock: '13',
        description: 'Descripcion de rosamonte'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === productCategory))
        }, 500)
    })
}