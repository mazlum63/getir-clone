import React from 'react'
import { PlusLarge } from '../../assets/Icons'

const Favorite = ({ product: { title, image, alt, price } }) => {
    return (
        <div className='text-center relative'>
            <img className='w-full p-4' src={image} alt={title} />
            <h4 className='text-purple-500 font-bold'>{price}</h4>
            <h5 >{title}</h5>
            <p>{alt}</p>
            <button className='absolute top-4 right-4 z-1 text-3xl border-2 px-3 bg-gray-200 rounded-md md:top-2 md:right-2 md:text-xl md:px-2 hover:bg-purple-500 hover:text-white' type='button'>+</button>
        </div>
    )
}

export default Favorite