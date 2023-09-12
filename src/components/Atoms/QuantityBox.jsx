import { React, useState } from 'react';

const QuantityBox = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='w-full h-auto  flex flex-col justify-center py-5'>

            <div className="flex pr-4">
                <button
                    className="border border-black text-black w-10 text-2xl"
                    onClick={() => {
                        if (quantity > 0) {
                            setQuantity(quantity - 1);
                        }
                    }}
                >
                    -
                </button>
                <input
                    type="text"
                    className="w-10 font-Poppins font-semibold text-center text-black"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                    className="border border-black bg-black text-white w-10 text-2xl"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantityBox;

