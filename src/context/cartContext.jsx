import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([])
    const [suma, setSuma] = useState(0)

    const totalCart = () => {
        // const suma = cart.reduce((a, b) => (a.stock * a.precio + b.stock * b.precio))
        // let  suma = 0
        // cart.forEach(item => suma += (item.Precio * item.Stock));
        // setSuma(suma)

        return cart.reduce((acc, prod) => acc + prod.Precio * prod.cantidad, 0);
    }

    useEffect(() => {
        console.log(cart)
        totalCart()
    }, [cart])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            // alert('Ya está en el carrito');
            cart.map(product => {
                if(product.id === item.id){
                    product.cantidad = cantidad
                    setCart(cart)
                }
            })
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    }

    const deleteAll = () => {
        setCart([])
    }

    return (
         <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider