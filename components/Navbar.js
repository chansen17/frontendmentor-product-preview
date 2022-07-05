import React from 'react'
import { FaBars, FaShoppingCart} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 h-24 px-8 capitalize text-sm md:text-md text-slate-400 relative overflow-x-hidden">
        <div className="absolute bottom-0 left-[50%] max-w-6xl w-full -translate-x-[50%] h-[2px] bg-slate-100 max-w-5xlbg-slate-100" />
            <div className="flex items-center space-x-12">
                <div className="font-black text-2xl text-slate-800 flex items-center space-x-4 md:space-x-0">
                    <FaBars className="md:hidden cursor-pointer" />
                    <h2>Sneakers</h2>
                </div>
                <div className="hidden md:inline-flex">
                    <a className="p-2" href="">Collections</a>
                    <a className="p-2" href="">Men</a>
                    <a className="p-2" href="#">Womans</a>
                    <a className="p-2" href="#">about</a>
                    <a className="p-2" href="#">contact</a>
                </div>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
                <a className="p-2 text-slate-800" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </a>
                <a className="p-2" href="">
                    <img className="w-10 h-10 object-cover shadow-md rounded-full" src="https://placeimg.com/192/192/people" />
                </a>
            </div>
        </div>
    </nav>
  )
}
