import React from 'react'

const NavbarLeft = () => {
    return (
        <div className='md:mx-auto'>
            <ul className='flex'>
                <li className="mr-2">
                    <a href="#" className="">
                        <img className='h-5 object-contain' alt="getir logo" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Getir_wordmark.svg" />
                    </a>
                </li>
                <li className="mr-2">
                    <a href="#" className="">
                        <img className='h-5 object-contain' alt="getir yemek logo" src="https://cdn.getir.com/marketing/GetirYemek_Logo_1621812338335.png" />
                    </a>
                </li>
                <li className="mr-2">
                    <a href="#" className="">
                        <img className='h-5 object-contain' alt="getir buyuk logo" src="https://cdn.getir.com/marketing/GetirBuyuk_Logo_1621812275736.png" />
                    </a>
                </li>
                <li className="mr-2">
                    <a href="#" className="">
                        <img className='h-5 object-contain' alt="getir su" src="https://cdn.getir.com/marketing/GetirSu_Logo_1621812321844.png" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLeft