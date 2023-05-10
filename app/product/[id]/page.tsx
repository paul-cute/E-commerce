import ProductImage from '@/components/ProductImage';
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

async function ProductPage({params: {id}}: Props) {

  const res = await fetch(`https://fakestore.com/products/${id}`);

  const product:Product = await res.json();

  return (
    <div>
      <ProductImage product={product}/>
    </div>
  )
}

export default ProductPage