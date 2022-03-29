import React, { useState, useEffect } from 'react'
import cartsData from '../../assets/api/carts.json'
import Cart from './Cart'


const Carts = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        setCarts(cartsData)
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {carts.map(cart => (
                    <Cart key={cart.id} cart={cart} />
                ))}
            </div>
        </div>
    )
}

export default Carts