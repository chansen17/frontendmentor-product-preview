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
    <div className="w-full h-screen flex flex-col items-start justify-start">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-40 px-8">
        <main className="grid gap-y-12 gap-x-16 grid-cols-1 sm:grid-cols-2 py-8">
          <div className="flex items-center justify-center">
            <figure className="w-full md:max-w-md">
              <img onClick={() => setIsOpen(!isOpen)} className="h-[500px] w-full object-cover rounded-xl shadow-lg" src={productImg} />
              <figcaption className="grid gap-2 grid-cols-4 mt-4">
                {images.map((img, i) => (
                  <img key={i} onClick={() => setProductImg(img)} src={img} className="h-20 w-full rounded-lg shadow cursor-pointer object-cover" />
                ))}
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
                  <p className="text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod non fugiat eaque optio quibusdam id? ipsum dolor sit amet consectetur adipisicing elit. Quod non fugiat.</p>
                </div>
                <div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-2">
                    <p className="text-xl md:text-2xl font-black">$125.00</p>
                    <span className="rounded-md py-1 px-2 font-bold text-xs text-orange-700 bg-orange-300">50%</span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold line-through">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center bg-slate-100 rounded shadow p-1 px-2">
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
                <button className="w-[150px] text-sm font-semibold justify-center p-2 text-slate-50/90 bg-orange-500 shadow-lg shadow-orange-500/50 rounded-md  flex items-center"><FaShoppingCart className="mr-2"/> Add to cart</button>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}