import React from 'react'
import Image from 'next/image'
import cart from '@/public/cart.svg'

const CartPage = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center mt-10'>
        <div>
          <Image
            src={cart}
            alt="empty cart"
            width={300}
            height={300}
          />
          <h1 className='text-3xl mt-2'>Your cart is Empty</h1>
        </div>
      </div>
    </div>
  )
}

export default CartPage