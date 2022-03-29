import React, { useEffect, useState } from 'react'
import categoryData from '../../assets/api/categories.json'
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(categoryData)
    }, [])
    return (
        <div className="container mx-auto my-5">
            <h3 className='text-base font-semibold my-3 pl-6'>Kategoriler</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-10">
                {categories && categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default Categories