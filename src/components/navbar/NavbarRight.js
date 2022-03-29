import React from 'react'
import { GlobeIcon, PersonFillIcon, PersonFillPlusIcon } from '../../assets/Icons'

const NavbarRight = () => {
    return (
        <div className='md:mx-auto text-white font-semibold text-xs md:text-base'>
            <ul className='flex'>
                <li className="md:mx-3 mr-2">
                    <a className='flex items-center opacity-80 hover:opacity-100' href="#">
                        <GlobeIcon />
                        <span className='ml-2'>Turkce(TR)</span>
                    </a>
                </li>
                <li className="md:mx-3 mr-2">
                    <a className='flex items-center opacity-80 hover:opacity-100' href="#">
                        <PersonFillIcon />
                        <span className='ml-2'>Giris Yap</span>
                    </a>
                </li>
                <li className="md:mx-3 mr-2">
                    <a className='flex items-center opacity-80 hover:opacity-100' href="#">
                        <PersonFillPlusIcon />
                        <span className='ml-2'>Kayit Ol</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavbarRight