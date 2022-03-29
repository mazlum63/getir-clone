import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

const Navbar = () => {
    return (
        <div className='bg-brand-color p-3 sticky top-0 z-50'>
            <nav className='getir-nav'>
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
                    <NavbarLeft />
                    <NavbarRight />
                </div>
            </nav>
        </div>
    )
}

export default Navbar