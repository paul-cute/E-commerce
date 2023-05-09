import React from 'react'

interface Props {
    product: Product
}

function Product({product}: Props) {
  return (
    <div>
        {product.title}
    </div>
  )
}

export default Product