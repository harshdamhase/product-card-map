import react from 'react'
import './ProductCard.css'

export const ProductCard = ({name, emoji, price, bgColor}) => {
    return(
        <div className='product-card' style={{backgroundColor: bgColor}}>
            <h2 className='emoji'>{name} {emoji}</h2>
            <h4>Rs: {price}</h4>
        </div>
    )
}