import React from 'react'

const Campaign = ({ campaign }) => {
    return (
        <div className='rounded-lg h-[300px] px-4'>
            <img className="w-full rounded-lg h-[300px] object-cover" src={campaign.image} />
        </div>
    )
}

export default Campaign