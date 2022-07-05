import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from '../components/Navbar'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  '/nike-1.jpeg',
  '/nike-2.jpeg',
  '/nike-3.jpeg',
  '/nike-4.jpeg',
  ];

export default function index() {
  const [quantity, setQuantity] = useState(0);
  const [productImg, setProductImg] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-start justify-start font-['Kumbh Sans']">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-40 px-8">
        <main className="grid gap-y-12 gap-x-16 grid-cols-1 sm:grid-cols-2 py-8">
          <div className="flex items-center justify-center">
            <figure className="w-full md:max-w-md">
              <img onClick={() => setIsOpen(!isOpen)} className="h-[500px] w-full object-cover rounded-xl shadow-lg" src={productImg ? productImg : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )} />
              <figcaption className="grid gap-2 grid-cols-4 mt-4">
                {images ? images.map((img, i) => (
                  <img key={i} onClick={() => setProductImg(img)} src={img} className="h-20 w-full rounded-lg shadow cursor-pointer object-cover" />
                )) : (
                  <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                  </>
                )}
              </figcaption>
            </figure>
            {isOpen && (
              <Lightbox
                mainSrc={productImg}
                nextSrc={images[2]}
                enableZoom={false}
                onCloseRequest={() => setIsOpen(false)}
              />
            )}
          </div>
          <div className="flex items-center">
            <article className="flex flex-col space-y-8">
                <div>
                  <p className="uppercase text-md font-bold text-orange-500 pb-3">sneaker compant</p>
                  <h2 className="capitalize text-2xl md:text-3xl lg:text-5xl font-bold text-slate-800">fall limited edition sneakers</h2>
                </div>
                <div>
                  <p className="text-slate-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outter sole, they'll withstand everything the weather can offer.</p>
                </div>
                <div>
                <div className="flex flex-row md:flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <p className="text-xl md:text-2xl font-bold">$125.00</p>
                    <span className="rounded-md py-1 px-3 text-xs text-orange-600 bg-orange-200 font-bold">50%</span>
                  </div>
                  <div>
                    <span className="line-through text-slate-300 text-sm">$250.00</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex w-full md:w-auto md:inline-flex md:justify-start items-center justify-between bg-slate-100 rounded shadow p-1 px-2">
                  <button onClick={() => setQuantity(quantity - 1)} className="text-orange-500 font-bold w-8 h-8 grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                  </button>
                    <span className="py-1 px-3">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-orange-500 font-bold w-8 h-8 grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  </button>
                </div>
                <button className="w-full md:w-[150px] text-sm font-semibold justify-center py-3 text-slate-50/90 bg-orange-500 shadow-lg shadow-orange-500/50 rounded-md  flex items-center"><FaShoppingCart className="mr-2"/> Add to cart</button>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}
