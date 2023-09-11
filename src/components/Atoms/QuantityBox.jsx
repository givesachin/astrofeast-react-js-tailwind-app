import React from 'react';

const QuantityBox = () => {
    return (
        <div className='w-full h-auto  flex flex-col justify-center py-5'>

            <div className="flex pr-4">
                <button className="border border-black text-black w-10 text-2xl">-</button>
                <input
                    type="text"
                    className="w-10 font-Poppins font-semibold text-center text-black"
                    value="1"
                />
                <button className="border border-black bg-black text-white w-10 text-2xl">+</button>
            </div>
        </div>
    );
};

export default QuantityBox;

