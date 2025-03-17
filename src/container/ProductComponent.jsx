import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProductts.products);
    const { id, title } = products;
    return (
        <div className='four column wide'>
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'></div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent