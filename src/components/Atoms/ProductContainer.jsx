import React from 'react'
import ProductItem from './ProuductItem'


const ProductContainer = ({ pitem, cardcontainer }) => {

    return (
        <>
            {/* <div className='w-full py-9 px-8 border-y border-black'>
                <p className='font-Staatliches text-4xl w-full text-left'>{containerHeader}</p>
            </div> */}
            <div className='h-full flex overflow-x-auto border-t border-black flex-nowrap p-8'>
                <div className={`flex gap-8 ${cardcontainer}`}>
                    {pitem.map((plist) => (
                        // Add parentheses to render the component
                        <ProductItem key={plist.id} prodList={plist} />
                    ))}

                </div>
            </div>

        </>
    )
}

export default ProductContainer