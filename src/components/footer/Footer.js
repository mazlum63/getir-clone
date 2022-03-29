import React from 'react'
import { FacebookFill, Twitter, Instagram, GlobeIcon } from '../../assets/Icons'

const Footer = () => {
    return (
        <div className="bg-purple-50 px-4">
            <div className='container mx-auto mt-10 py-10'>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:px-0 px-4">
                    <div className='my-4'>
                        <h3 className='mb-4 text-purple-500 text-xl font-semibold'>Getir'i indirin!</h3>
                        <a className='mt-4 block' href="#">
                            <img className='h-12'
                                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                        </a>
                        <a className='mt-4 block' href="#">
                            <img className='h-12'
                                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                        </a>
                        <a className='mt-4 block' href="#">
                            <img className='h-12'
                                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                        </a>
                    </div>
                    <div className='my-4'>
                        <h3 className='mb-4 text-purple-500 text-xl font-semibold'>Getir'i kesfedin</h3>
                        <ul>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Hakkimizda</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Kariyer</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Iletisim</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">COVID-19 Duyurusu</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Sosyal Sorumluluk Projeleri</a>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4'>
                        <h3 className='mb-4 text-purple-500 text-xl font-semibold'>Yardima mi ihtiyaciniz var?</h3>
                        <ul>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Sikca Sorulan Sorular</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Kisisel Verilerin Korunmasi</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Gizlilik Politikasi</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Kullanim Kosullari</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Cerez Politikasi</a>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4'>
                        <h3 className='mb-4 text-purple-500 text-xl font-semibold'>Is Ortagimiz Olun</h3>
                        <ul>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Bayimiz Olun</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">Deponuzu Kiralayin</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">GetirYemek Restorani Olun</a>
                            </li>
                            <li className='font-xl font-semibold mt-3'>
                                <a href="#">GetirCarsi Isletmesi Olun</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='md:flex justify-between mt-6'>
                    <p className='text-center md:text-left'>© 2021 Getir * Bilgi Toplum Hizmetleri</p>
                    <ul className='flex justify-center items-center text-gray-700'>
                        <li className='mx-2'>
                            <a href="#">
                                <FacebookFill />
                            </a>
                        </li>
                        <li className='mr-2'>
                            <a href="#">
                                <Twitter />
                            </a>
                        </li>
                        <li className='mx-2'>
                            <a href="#">
                                <Instagram />
                            </a>
                        </li>
                        <li className='flex items-center ml-2'>
                            <GlobeIcon />
                            <span>Turkce(TR)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer