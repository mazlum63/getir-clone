import React, { useState, useEffect } from 'react'
import productsData from '../../assets/api/products.json'
import Favorite from './Favorite'

const Favorites = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(productsData)
    }, [])
    return (
        <div className='container mx-auto my-5'>
            <h3 className='text-base font-semibold my-3 pl-6'>Kategoriler</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
                {products && products.map(product => (
                    <Favorite key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Favorites