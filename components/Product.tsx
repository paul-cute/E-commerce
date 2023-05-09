import Link from 'next/link'
import React from 'react'

interface Props {
    product: Product
}

function Product({product}: Props) {
  return (
    <Link href={`/product/${product.id}`}>
        <div>
            {/* <ProductImage product={product} fill/> */}
        </div>

        <div>
            <p className='w-44 truncate'>{product.title}</p>
            <p>€{product.price}</p>
        </div>

        <p className='italic text-xs w-64 line-clamp-2 text-gray-600'>{product.description}</p>
    </Link>
  )
}

export default Product