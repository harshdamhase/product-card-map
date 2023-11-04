import React, { useState } from 'react'
import { ProductCard } from './ProductCard'

function Card() {
    const [products, setProducts] = useState([
        {
        name: "Mango",
        emoji: "🥭",
        price: "160",
        bgColor: "red"
        },
        {
            name: "pineapple",
            emoji: "🍍",
            price: "130",
            bgColor: "yellow"

        },
        {
            name: "Grapes",
            emoji: "🍇",
            price: "100",
            bgColor: "green"

        },
        {
            name: "Banana",
            emoji: "🍌",
            price: "100",
            bgColor: "yellow"

        },
        
]);
    
  return (
    <div>

{
    products.map((productInfo) => {
        const {name, emoji, price, bgColor} = productInfo;

return <ProductCard name={name} emoji={emoji} price={price} bgColor={bgColor}/>
    })
}

    </div>
  )
}

export default Card