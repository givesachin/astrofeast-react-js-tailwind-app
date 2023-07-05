import React from 'react'
import aflogo from "../assets/aflogo.svg";
import afsearch from "../assets/search.svg";
import afbag from "../assets/afbag.png";
import afuser from "../assets/afuser.svg";
import afmenu from "../assets/afmenu.svg";
import afwho from "../assets/whoaf.png";
import afnonveg from "../assets/afnonveg.avif";

const About = () => {
    return (
        <section className='w-full h-full'>
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
                    <a className='uppercase text-black p-4 w-full font-Staatliches' href="#">Appetizer</a>
                    <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="#">desserts</a>
                    <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="#">combos</a>
                    <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="#">seafood</a>
                    <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="#">vegetarian</a>
                    <a className='uppercase text-black border-l border-black  p-4 w-full font-Staatliches' href="#">meat</a>
                    <a className='uppercase text-[#F4A73F] border-l border-black  p-4 w-full font-Staatliches ' href="#">view all</a>
                </nav>

            </header>
            <div className='absolute w-screen h-auto'>
                <ul className='w-full bg-[#BDC695] h-auto p-2 flex justify-around '>
                    <li>  <p className='w-full'>We are currently avaliable at delhi, to know more<span className='font-bold'>Click here</span></p></li>
                    <li>  <p className='w-full'>We are currently avaliable at delhi, to know more<span className='font-bold'>Click here</span></p> </li>
                </ul>
            </div>
            <section className='px-16 relative'>

                <div className='border-x border-black pt-10'>
                    <img className='w-full border-b border-black ' src={afwho} alt="af who?" />
                    <div className='w-full h-auto flex justify-between border-b border-black'>
                        <div className='w-full flex flex-col border-r  border-black'>
                            <p className='text-5xl h-1/4 px-8 font-Staatliches flex items-center justify-start'>ABOUT US</p>
                            <div className='w-full h-full p-8 border-t border-black flex flex-col justify-evenly  text-start'>
                                <p className='w-full'>What we eat matters.<br /> So is how it's grown, sold & delivered.</p>
                                <p className='w-full'>We want to shoot down this broken food system with a frozen fresh spread from around the world</p>
                            </div>
                        </div>
                        <img className='w-full h-[344px] object-cover' src={afnonveg} alt="noveg food" legend='hehe shravan he' />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About