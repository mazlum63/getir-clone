import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { FacebookFill } from '../../assets/Icons'

const Account = () => {
    const [selected, setSelected] = useState('TR');
    const countries = {
        "US": "+1", "FR": "+30", "DE": "+49", "TR": "+90"
    }
    return (
        <div className='w-64 md:w-96 rounded-lg bg-white ml-auto text-center py-6 px-4 mt-6 md:mt-0'>
            <h4 className='font-semibold text-l text-brand-color'>Giris yap veya kaydol</h4>
            <form className="phones mt-2">
                <div className='md:flex'>
                    <ReactFlagsSelect
                        countries={Object.keys(countries)}
                        customLabels={countries}
                        selected={selected}
                        onSelect={code => { setSelected(code) }}
                    />
                    <input className='grow h-11 outline-red-700 md:ml-4 w-full border-2 p-2' type="text" placeholder='Telefon Numarasi' />
                </div>
                <button className='bg-yellow-500 w-full rounded-lg py-4 mt-4 text-sm md:text-base' type='button'>Telefon numarasi ile devam et</button>
                <hr className='mt-4' />
            </form>
            <a className='bg-blue-300 w-full rounded-lg mt-4 py-4 flex' href="#">
                <FacebookFill />
                <span className='mx-auto text-sm md:text-base'>Facebook ile devam et</span>
            </a>
        </div>
    )
}

export default Account