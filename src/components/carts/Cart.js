import React from 'react'

const Cart = ({ cart: { title, image, description } }) => {
    return (
        <div style={{ boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.5)' }} className='flex flex-col justify-center items-center bg-white rounded-lg p-4 md:p-10 text-center'>
            <img className='w-40' src={image} alt={title} />
            <h4 className='text-purple-500 text-xl font-bold my-6'>{title}</h4>
            <p className='text-l'>{description}</p>
        </div>
    )
}

export default Cart