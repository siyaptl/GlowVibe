import React from 'react'
import { beautyProductsrow1 } from '../../config/staticdata'
import Productcard from '../../components/productcard'

function Description() {
  return (
    <>
      {
        beautyProductsrow1.map((product) => (
          <Productcard 
          key={product.id}
          name={product.name}
          price={product.price}
          discountPrice={product.discountPrice}
          image={product.image}
          rating={product.rating}
          category={product.category}
          description={product.description}
          />
        ))
      }

   </>
  )
}

export default Description
