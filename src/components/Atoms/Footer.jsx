import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full flex items-center flex-col'>
            <div className='w-full flex border-t border-black'>
                <div className='border-r w-full border-black'>
                    <p className='px-16 py-6 text-start border-b text-xl font-medium uppercase border-black'>Stay up with Astrofeast</p>
                    <div className='p-16 gap-y-9 flex flex-col items-start'>
                        <div className='w-full gap-y-2 flex flex-col items-start'>
                            <p className=' font-semibold text-2xl'>Tales from Outer Space</p>
                            <p className=' text-xl'>Fortnightly briefs from around the world</p>
                        </div>

                        <div className='w-full gap-y-2 flex flex-col items-start '>
                            <form className='w-full flex flex-between gap-x-4' action="get">
                                <input className='w-full p-4 border border-black' type='text' placeholder='Email/WhatsApp' />
                                <input className=' px-6 py-3 text-white font-Staatliches  bg-black' type="submit" value="Send me a tale" />
                            </form>
                            <p className='text-xs'>No spams. No automations. No filters.</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-full flex flex-col border-r border-black'>
                        <p className='px-16 py-6 text-start border-b text-xl font-medium uppercase border-black'>work with us</p>
                        <div className='w-full gap-y-2 p-16 flex flex-col items-start'>
                            <p className=' font-semibold text-2xl'> Kitchens</p>
                            <p className=' font-semibold text-2xl'> Investors</p>
                            <p className=' font-semibold text-2xl'> Careers</p>
                            <p className=' font-semibold text-2xl'> Cold Chain</p>
                            <p className=' font-semibold text-2xl'> Sustainabilityƒ</p>
                        </div >
                    </div >
                    <div className='w-full flex flex-col'>
                        <p className='px-16 py-6 text-start border-b text-xl font-medium uppercase border-black'>work with us</p>
                        <div className='w-full gap-y-2 p-16 flex flex-col items-start'>
                            <p className=' font-semibold text-2xl'> Kitchens</p>
                            <p className=' font-semibold text-2xl'> Investors</p>
                            <p className=' font-semibold text-2xl'> Careers</p>
                            <p className=' font-semibold text-2xl'> Cold Chain</p>
                            <p className=' font-semibold text-2xl'> Sustainabilityƒ</p>
                        </div >
                    </div >
                </div>
            </div >
            <div className='w-full font-poppins flex justify-between px-16 py-12 border-t border-black'>
                <p className='w-full text-left'>2023 &#169; astrofeast</p>
                <div className='w-full flex justify-end gap-x-8 uppercase'>
                    <p>whitepaper</p>
                    <p>privacy</p>
                    <p>terms</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2313_424)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.00008 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00008C15.3334 3.94999 12.0501 0.666748 8.00008 0.666748C3.94999 0.666748 0.666748 3.94999 0.666748 8.00008C0.666748 9.41121 1.06531 10.7292 1.75602 11.8477L0.666748 15.3334L4.15242 14.2441C5.27093 14.9348 6.58896 15.3334 8.00008 15.3334ZM6.89315 4.60881L7.70508 7.45068L6.3514 8.25862C6.54852 8.54562 6.77481 8.81895 7.03035 9.07448C7.28588 9.33008 7.55922 9.55635 7.84622 9.75342L8.65415 8.39975L11.496 9.21168L11.189 11.7742L10.7207 11.7482C9.69801 11.6916 8.68501 11.4032 7.76741 10.8825C7.24995 10.5889 6.76342 10.2218 6.32323 9.78162C5.88302 9.34142 5.51588 8.85488 5.22227 8.33741C4.70161 7.41981 4.41324 6.4068 4.35659 5.38411L4.33065 4.91579L6.89315 4.60881Z" fill="#030712" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2313_424">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99992 5.05737L3.99991 1.05737L3.52851 1.52877C1.42721 3.63007 1.42721 7.03695 3.52851 9.13828L3.72376 9.33355L1.72376 11.3335L0.528564 12.5287L1.47137 13.4715L2.67645 12.2665C5.25286 14.529 9.17885 14.4307 11.638 11.9716C13.3464 10.2631 13.9154 7.84681 13.3449 5.66683H15.3333V4.33349H12.8349C12.5313 3.74345 12.1323 3.18981 11.638 2.69544L10.9999 2.05737L7.99992 5.05737Z" fill="#030712" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.49992 1.5H0.833252V5.16667H4.49992V1.5ZM4.49992 6.16667H0.833252V15.1667H4.49992V6.16667ZM10.6666 6.16667H5.83325V15.1667H9.49992V9.83333H9.99992C10.8283 9.83333 11.4999 10.5049 11.4999 11.3333V15.1667H15.1666V10.6667C15.1666 8.1814 13.1519 6.16667 10.6666 6.16667Z" fill="#030712" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2313_433)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.666748 0.666748H15.3334V15.3334H0.666748V0.666748ZM8.00008 5.66675C6.71141 5.66675 5.66675 6.71141 5.66675 8.00008C5.66675 9.28875 6.71141 10.3334 8.00008 10.3334C9.28875 10.3334 10.3334 9.28875 10.3334 8.00008C10.3334 6.71141 9.28875 5.66675 8.00008 5.66675ZM4.33341 8.00008C4.33341 5.97503 5.97503 4.33341 8.00008 4.33341C10.0251 4.33341 11.6667 5.97503 11.6667 8.00008C11.6667 10.0251 10.0251 11.6667 8.00008 11.6667C5.97503 11.6667 4.33341 10.0251 4.33341 8.00008ZM13.0001 3.00008H11.6667V4.33341H13.0001V3.00008Z" fill="#030712" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2313_433">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </footer >
    )
}

export default Footer