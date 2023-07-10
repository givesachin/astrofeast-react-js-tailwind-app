import React from 'react'
import aflogo from "../../assets/aflogo.svg";
import afsearch from "../../assets/search.svg";
import afbag from "../../assets/afbag.png";
import afuser from "../../assets/afuser.svg";
import afmenu from "../../assets/afmenu.svg";

const Header = () => {
    return (
        <header className='w-full h-auto  flex flex-col items-center'>

            {/* black head bar */}
            <div className='w-full h-auto py-5 px-16 bg-black flex justify-between items-center'>
                <img className='h-fit w-auto' src={aflogo} alt="af-logo" srcset={aflogo} />
                <div className='w-auto  h-fit justify-between '>
                    <div className='flex w-auto h-auto justify-center gap-x-6'>
                        {/* searchbar */}
                        <div className='h-fit w-auto gap-x-2 flex border-b border-white items-center justify-between '>
                            <img src={afsearch} alt="search" className='h-5 w-fit invert font-bold' />
                            <input className='w-[15.875rem] py-[0.6rem] text-white text-sm bg-black focus:outline-none placeholder:text-white' type="text" placeholder='Search / Track Order' />

                        </div>
                        {/* other icons */}
                        <div className='w-auto h-auto flex justify-evenly gap-x-4 items-center'>
                            <img className='invert h-10' src={afbag} alt="cart" />
                            <img className='h-5' src={afuser} alt="cart" />
                            <img className=' h-5' src={afmenu} alt="cart" />
                        </div>
                    </div>
                </div>
            </div>
            {/* bavigation */}
            <nav className='w-full h-auto flex justify-between border-b border-black'>
                <a className='uppercase text-black p-4 w-full font-Staatliches' href="">Appetizer</a>
                <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="">desserts</a>
                <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="">combos</a>
                <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="">seafood</a>
                <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="">vegetarian</a>
                <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="">meat</a>
                <a className='uppercase text-[#F4A73F] border-l border-black  p-4 w-full font-Staatliches ' href="">view all</a>
            </nav>

        </header>
    )
}

export default Header