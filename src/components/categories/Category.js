import React from 'react'

const Category = ({ category: { title, image, id } }) => {
    return (
        <div className='hover:bg-purple-50 py-4'>
            <img className='w-10 mx-auto' src={image} alt={title} />
            <p className="text-center text-sm font-semibold">{title}</p>
        </div>
    )
}

export default Category