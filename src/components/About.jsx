import React from 'react'
import aflogo from "../assets/aflogo.svg";
import afsearch from "../assets/search.svg";
import afbag from "../assets/afbag.png";
import afuser from "../assets/afuser.svg";
import afmenu from "../assets/afmenu.svg";
import afwho from "../assets/whoaf.png";
import afnonveg from "../assets/afnonveg.avif";
import afchatstamp from "../assets/afchatstamp.png";

const About = () => {
    return (
        <section className='w-full h-full font-poppins'>
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
            <div className='absolute w-screen h-auto z-10'>
                <ul className='w-full bg-[#BDC695] h-auto p-2 flex justify-center gap-x-12 '>
                    <li>  <p className='w-full'>&#x2022; We are currently avaliable at delhi, to know more <span className='font-bold'>Click here</span></p></li>
                    <li>  <p className='w-full'> &#x2022; We are currently avaliable at delhi, to know more <span className='font-bold'>Click here</span></p> </li>
                </ul>
            </div>
            {/* wrapper */}
            <section className='px-16 relative'>
                {/* container */}
                <div className='border-x border-black pt-10'>
                    {/* poster */}
                    <img className='w-full border-b border-black ' src={afwho} alt="af who?" />
                    {/* about us hero */}
                    <div className='w-full h-auto flex justify-between border-b border-black'>
                        <div className='w-full flex flex-col border-r  border-black'>
                            <p className='text-5xl h-auto p-8 font-Staatliches flex items-center justify-start'>ABOUT US</p>
                            <div className='w-full h-full p-8 border-t border-black flex flex-col justify-evenly  text-start'>
                                <p className='w-full'>What we eat matters.<br /> So is how it's grown, sold & delivered.</p>
                                <p className='w-full'>We want to shoot down this broken food system with a frozen fresh spread from around the world</p>
                            </div>
                        </div>
                        <img className='w-full h-[344px] object-cover' src={afnonveg} alt="noveg food" legend='hehe shravan he' />
                    </div>
                    {/* who we are */}
                    <div className="w-full h-auto p-12 flex flex-col items-end border-b border-black ">
                        <p className='w-3/6 text-5xl font-Staatliches'>who we are?</p>
                        <svg className='absolute left-0' width="156" height="160" viewBox="0 0 156 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M57.8834 22.5114C59.9317 19.152 64.2592 17.9925 67.7128 19.8776V19.8776C70.4004 21.3447 73.7161 20.9974 76.0406 19.0044V19.0044C79.0248 16.4457 83.501 16.6895 86.2011 19.5463V19.5463C88.3042 21.7714 91.5699 22.4725 94.3972 21.2976V21.2976C98.0262 19.7896 102.209 21.4099 103.896 24.9591V24.9591C105.211 27.7253 108.103 29.4061 111.156 29.1651V29.1651C115.076 28.8558 118.554 31.6889 119.065 35.5873V35.5873C119.464 38.6265 121.696 41.1189 124.676 41.836V41.836C128.503 42.7567 130.939 46.5212 130.223 50.3918V50.3918C129.666 53.4082 131.021 56.4643 133.635 58.069V58.069C136.994 60.1307 138.154 64.4594 136.276 67.9243V67.9243C134.814 70.6212 135.169 73.9456 137.16 76.279V76.279C139.715 79.2731 139.488 83.7511 136.634 86.462V86.462C134.412 88.573 133.725 91.8476 134.899 94.679V94.679C136.405 98.3111 134.81 102.504 131.26 104.195V104.195C128.496 105.513 126.832 108.415 127.076 111.468V111.468C127.389 115.385 124.577 118.88 120.681 119.388V119.388C117.645 119.785 115.167 122.025 114.458 125.003V125.003C113.548 128.827 109.794 131.276 105.93 130.553V130.553C102.92 129.989 99.8751 131.346 98.2811 133.96V133.96C96.2328 137.32 91.9053 138.479 88.4517 136.594V136.594C85.7641 135.127 82.4484 135.474 80.1239 137.467V137.467C77.1397 140.026 72.6635 139.782 69.9634 136.925V136.925C67.8603 134.7 64.5946 133.999 61.7673 135.174V135.174C58.1383 136.682 53.9559 135.062 52.2686 131.513V131.513C50.9535 128.746 48.0619 127.066 45.0085 127.307V127.307C41.0888 127.616 37.611 124.783 37.0992 120.884V120.884C36.7002 117.845 34.4682 115.353 31.4881 114.636V114.636C27.6611 113.715 25.2253 109.951 25.9411 106.08V106.08C26.4989 103.064 25.1435 100.007 22.5292 98.4027V98.4027C19.1703 96.341 18.0104 92.0123 19.8885 88.5474V88.5474C21.3502 85.8505 20.9959 82.5262 19.0046 80.1928V80.1928C16.4494 77.1986 16.6767 72.7206 19.5306 70.0097V70.0097C21.7529 67.8987 22.4397 64.6241 21.2656 61.7927V61.7927C19.7596 58.1606 21.3549 53.9682 24.9041 52.2763V52.2763C27.669 50.9582 29.3328 48.0568 29.0886 45.0036V45.0036C28.7752 41.0863 31.5872 37.5919 35.484 37.0834V37.0834C38.5199 36.6872 40.9975 34.4472 41.7063 31.4687V31.4687C42.6163 27.6445 46.3709 25.1953 50.2346 25.9191V25.9191C53.2442 26.4828 56.2894 25.1257 57.8834 22.5114V22.5114Z" fill="#BDC695" />
                            <path d="M46.6926 88.6738C45.8292 89.1723 44.9745 89.4789 44.1287 89.5935C43.2828 89.7081 42.4938 89.6104 41.7617 89.3005C41.0408 88.9841 40.4457 88.4455 39.9766 87.6847L43.0379 85.9173C43.3352 86.3287 43.6808 86.5777 44.0747 86.6643C44.4621 86.7397 44.8632 86.6576 45.2781 86.418C45.7042 86.172 45.9856 85.8825 46.1222 85.5494C46.2524 85.2052 46.2171 84.8592 46.0164 84.5116C45.8481 84.2201 45.608 84.0372 45.2961 83.9631C44.9954 83.8826 44.6637 83.8648 44.3009 83.9098C43.9493 83.9483 43.4647 84.0412 42.8471 84.1884C41.9486 84.3932 41.1903 84.517 40.5722 84.5599C39.954 84.6028 39.3384 84.4948 38.7254 84.2357C38.1123 83.9767 37.5922 83.4771 37.1649 82.737C36.5304 81.6381 36.4332 80.5504 36.8733 79.474C37.3069 78.3864 38.1629 77.4736 39.4412 76.7356C40.742 75.9846 41.9717 75.6932 43.1304 75.8615C44.2826 76.0186 45.2072 76.636 45.9042 77.7138L42.7925 79.5103C42.55 79.142 42.2382 78.9258 41.8573 78.8616C41.4699 78.7863 41.0744 78.8651 40.6707 79.0982C40.3231 79.2989 40.0978 79.556 39.9948 79.8697C39.8853 80.1721 39.9309 80.4971 40.1316 80.8447C40.3518 81.226 40.7027 81.4196 41.1846 81.4254C41.6664 81.4313 42.3598 81.3375 43.2647 81.144C44.1762 80.9616 44.9353 80.8523 45.5422 80.8158C46.1604 80.7729 46.7727 80.8754 47.3793 81.1232C47.9859 81.3711 48.4931 81.8482 48.901 82.5547C49.2894 83.2275 49.4684 83.9389 49.4381 84.6891C49.4189 85.4328 49.178 86.155 48.7154 86.8556C48.2527 87.5563 47.5785 88.1624 46.6926 88.6738ZM48.1651 73.8518C47.6605 74.1431 47.1615 74.2369 46.668 74.1331C46.1792 74.0116 45.8086 73.7322 45.5561 73.2949C45.2971 72.8463 45.2404 72.3856 45.3861 71.9128C45.5365 71.4223 45.864 71.0314 46.3686 70.74C46.862 70.4552 47.3531 70.3735 47.8418 70.495C48.3353 70.5988 48.7116 70.875 48.9705 71.3235C49.223 71.7608 49.2741 72.2247 49.1237 72.7152C48.978 73.1881 48.6585 73.5669 48.1651 73.8518ZM50.1581 74.0019L55.5769 83.3875L52.7006 85.0481L47.2819 75.6625L50.1581 74.0019ZM55.7306 70.6052C56.3922 70.2232 57.0474 70.0243 57.6962 70.0086C58.3562 69.9864 58.947 70.1163 59.4686 70.3982L58.7014 69.0694L61.5776 67.4088L66.9867 76.7776C67.4852 77.6411 67.7614 78.5207 67.8151 79.4167C67.8866 80.3173 67.6889 81.179 67.222 82.0018C66.7663 82.8181 66.017 83.5273 64.9742 84.1294C63.5837 84.9322 62.2658 85.252 61.0204 85.0889C59.7814 84.937 58.7766 84.336 58.0058 83.2859L60.8484 81.6447C61.1453 81.9518 61.5202 82.1091 61.9732 82.1167C62.4326 82.1356 62.909 82.0025 63.4024 81.7177C63.9967 81.3746 64.3673 80.9288 64.5142 80.3805C64.6788 79.837 64.5442 79.1895 64.1105 78.4382L63.3433 77.1094C63.3155 77.7086 63.1358 78.2908 62.8042 78.856C62.4662 79.41 61.9664 79.8779 61.3048 80.2599C60.5311 80.7066 59.717 80.915 58.8624 80.8851C58.0014 80.844 57.1755 80.5658 56.3846 80.0506C55.5985 79.5176 54.927 78.769 54.3703 77.8046C53.8135 76.8403 53.5041 75.8901 53.4421 74.9541C53.3914 74.0115 53.5667 73.1628 53.968 72.4078C54.3694 71.6527 54.9569 71.0519 55.7306 70.6052ZM61.4108 73.7622C60.9965 73.0446 60.4677 72.5948 59.8245 72.413C59.1924 72.2247 58.5905 72.2956 58.0186 72.6258C57.4467 72.956 57.0787 73.4451 56.9146 74.093C56.7552 74.7233 56.8826 75.3973 57.297 76.1149C57.7113 76.8326 58.2377 77.2912 58.8762 77.4907C59.5194 77.6725 60.127 77.5983 60.6989 77.2682C61.2708 76.938 61.6332 76.4521 61.7861 75.8107C61.9502 75.1627 61.8251 74.4799 61.4108 73.7622ZM69.319 62.8048C70.418 62.1703 71.4998 62.0241 72.5645 62.3663C73.634 62.6908 74.528 63.4754 75.2466 64.7201L78.4124 70.2034L75.553 71.8543L72.6105 66.7578C72.248 66.1299 71.8038 65.7359 71.2779 65.5761C70.752 65.4162 70.2143 65.4949 69.6649 65.8121C69.1154 66.1293 68.7785 66.5556 68.654 67.091C68.5295 67.6264 68.6485 68.208 69.011 68.836L71.9535 73.9325L69.0773 75.5931L63.6585 66.2074L66.5347 64.5468L67.2533 65.7915C67.3053 65.2083 67.5101 64.6565 67.8675 64.1362C68.2185 63.6046 68.7023 63.1608 69.319 62.8048ZM87.8246 52.2551L93.2434 61.6407L90.3672 63.3013L89.6292 62.023C89.5771 62.6062 89.3733 63.1725 89.0176 63.7217C88.6666 64.2532 88.1884 64.6938 87.5829 65.0434C86.8652 65.4578 86.141 65.6666 85.4103 65.6698C84.6731 65.6619 83.9783 65.4425 83.3259 65.0118C82.6736 64.5811 82.1111 63.9564 81.6385 63.1378L78.4727 57.6545L81.3321 56.0036L84.2745 61.1001C84.6371 61.728 85.0813 62.1219 85.6072 62.2818C86.1331 62.4417 86.6707 62.363 87.2202 62.0458C87.7809 61.7221 88.1235 61.2925 88.2479 60.7572C88.3724 60.2218 88.2534 59.6401 87.8909 59.0122L84.9484 53.9157L87.8246 52.2551ZM93.534 50.7305C93.5619 50.1313 93.7448 49.5547 94.0828 49.0008C94.4208 48.4468 94.9206 47.9788 95.5822 47.5968C96.356 47.1501 97.1701 46.9417 98.0246 46.9717C98.8792 47.0016 99.6963 47.2774 100.476 47.7991C101.267 48.3143 101.941 49.0541 102.497 50.0185C103.054 50.9828 103.361 51.9419 103.418 52.8956C103.48 53.8316 103.314 54.6828 102.919 55.449C102.518 56.204 101.93 56.8049 101.156 57.2516C100.506 57.6271 99.8509 57.8259 99.1909 57.8481C98.5421 57.8639 97.9545 57.7396 97.4282 57.4754L100.769 63.2615L97.8926 64.9221L89.8906 51.0623L92.7669 49.4017L93.534 50.7305ZM99.5707 51.7082C99.1563 50.9905 98.6308 50.5464 97.994 50.3758C97.362 50.1875 96.7545 50.2617 96.1714 50.5983C95.5995 50.9285 95.2315 51.4175 95.0673 52.0655C94.9144 52.707 95.0451 53.3866 95.4594 54.1042C95.8738 54.8219 96.397 55.2749 97.029 55.4632C97.6722 55.645 98.2797 55.5708 98.8516 55.2407C99.4235 54.9105 99.7915 54.4214 99.9557 53.7734C100.113 53.1143 99.985 52.4259 99.5707 51.7082ZM67.6806 97.237C68.7795 96.6026 69.8613 96.4564 70.9261 96.7986C71.9955 97.1231 72.8895 97.9076 73.6082 99.1523L76.774 104.636L73.9146 106.287L70.9721 101.19C70.6096 100.562 70.1653 100.168 69.6395 100.008C69.1136 99.8485 68.5759 99.9272 68.0264 100.244C67.477 100.562 67.14 100.988 67.0155 101.523C66.891 102.059 67.0101 102.64 67.3726 103.268L70.3151 108.365L67.4388 110.025L62.02 100.64L64.8963 98.9791L65.6149 100.224C65.6669 99.6406 65.8716 99.0888 66.2291 98.5685C66.58 98.0369 67.0639 97.5931 67.6806 97.237ZM83.1227 101.15C82.2032 101.681 81.2601 101.963 80.2934 101.998C79.338 102.027 78.4368 101.799 77.5898 101.316C76.7541 100.827 76.0547 100.095 75.4914 99.1191C74.9346 98.1547 74.6589 97.1851 74.6642 96.2102C74.663 95.2241 74.9192 94.3212 75.4327 93.5015C75.9462 92.6817 76.6627 92.0064 77.5822 91.4755C78.5017 90.9446 79.4447 90.6618 80.4114 90.627C81.3781 90.5921 82.2881 90.8218 83.1415 91.3158C83.9885 91.7987 84.6903 92.5223 85.2471 93.4867C85.8038 94.451 86.0772 95.4295 86.0672 96.422C86.0619 97.3969 85.7969 98.2975 85.2722 99.1237C84.7587 99.9435 84.0422 100.619 83.1227 101.15ZM81.6854 98.6603C82.2349 98.3431 82.5837 97.8726 82.7319 97.2488C82.8913 96.6185 82.7541 95.9277 82.3204 95.1764C81.8866 94.4251 81.3626 93.9577 80.7482 93.7741C80.1451 93.5841 79.5689 93.6477 79.0194 93.9649C78.4587 94.2886 78.1099 94.7591 77.9729 95.3764C77.8295 95.9825 77.9779 96.6669 78.4181 97.4294C78.8519 98.1807 79.3647 98.6546 79.9566 98.8511C80.5597 99.0411 81.136 98.9775 81.6854 98.6603ZM97.5365 80.1343L100.415 90.9863L97.2364 92.8217L92.2409 87.5874L94.2256 94.56L91.0635 96.3856L83.088 88.4761L85.9643 86.8155L91.1678 92.7596L88.8741 85.1355L91.9186 83.3778L97.3718 89.1328L94.8285 81.6978L97.5365 80.1343ZM100.777 74.4734L105.092 82.7245L102.653 84.1326L97.665 76.27L100.777 74.4734ZM106.401 87.7102C105.896 88.0015 105.397 88.0953 104.903 87.9915C104.415 87.87 104.044 87.5906 103.791 87.1533C103.533 86.7047 103.473 86.2385 103.612 85.7544C103.762 85.2639 104.09 84.873 104.594 84.5817C105.088 84.2968 105.579 84.2151 106.068 84.3366C106.568 84.4516 106.947 84.7334 107.206 85.1819C107.458 85.6192 107.509 86.0832 107.359 86.5737C107.213 87.0465 106.894 87.4253 106.401 87.7102Z" fill="#FEFEFE" />
                        </svg>
                    </div>
                    {/* subpart of who we are */}
                    <div className='w-full h-auto flex justify-center border-b border-black'>
                        <ul className='w-full h-auto border-r border-black flex flex-col items-start justify-start p-12 gap-y-6'>
                            <li className='text-4xl font-bold text-[#2C488E]'>Food</li>
                            <li className='text-4xl font-bold text-[#838282]'>Marketplace</li>
                            <li className='text-4xl font-bold text-[#838282]'>delivery</li>
                        </ul>
                        <div className='w-full h-auto p-12 gap-y-6 flex flex-col '>
                            <p className='text-lg text-left'>Know everything about what you're eating, and how fresh it is delivered and what those certifications really mean</p>
                            <div className='w-full h-full py-20 bg-[#E5E7EB] self-stretch'></div>
                        </div>
                    </div>
                    {/* why go sub zero */}
                    <div className=' border-b border-black px-12 py-9 flex justify-center items-center'>
                        <p className='text-5xl font-Staatliches'>why go sub zero?</p>
                    </div>
                    {/* difference of fresh and frozen */}
                    <div className=' border-b border-black flex justify-center items-center'>
                        <p className='text-3xl text-start font-semibold px-12 py-6 w-full border-r border-black'>Fresh (~0-12°C)</p>
                        <p className='text-3xl text-start font-semibold px-12 py-6 w-full'>Flash Frozen (-20°C)</p>
                    </div>
                    <div className=' border-b border-black flex justify-center items-center'>
                        <div className=' px-12 py-9 w-full h-auto border-r border-black flex flex-col gap-y-12 justify-evenly items-center'>


                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3015 30.7625L38.1921 1.80798L9.23759 6.69873L8.95539 6.98093C2.56694 13.3694 2.02216 23.4005 7.52416 30.1189L2.15491 35.4882L4.51192 37.8452L22.4286 19.9285L24.512 22.0119L12.3645 34.1594C18.8971 37.7705 27.3783 36.6857 33.0193 31.0447L33.3015 30.7625Z" fill="#030712" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'> Limited Freshness</p>
                                    <p className='text-base'>A lot of produce spoils, decays and must be used quickly</p>
                                </div>
                            </div>



                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1145 15.8678C27.2874 16.868 29.1159 18.488 30.374 20.501L36.6862 11.0329L28.739 4.21216L25.1145 15.8678ZM14.9064 15.8726C12.7349 16.8749 10.9079 18.4962 9.65161 20.5102L3.33337 11.0329L11.2826 4.21919L14.9064 15.8726ZM16.0194 11.0328L13.6252 3.33337H26.3942L24 11.0328H16.0194ZM27.722 3.33929L27.7029 3.33337H27.715L27.722 3.33929ZM29.7219 26.9612C29.7219 32.3217 25.3764 36.6674 20.0159 36.6674C14.6553 36.6674 10.3097 32.3217 10.3097 26.9612C10.3097 21.6007 14.6553 17.255 20.0159 17.255C25.3764 17.255 29.7219 21.6007 29.7219 26.9612ZM20 22.0314L21.8164 25.145L24.93 25.9234L22.8542 28.2587L23.3732 31.8914L20 30.3345L16.6269 31.8914L17.1459 28.2587L15.07 25.9234L18.1837 25.145L20 22.0314Z" fill="#030712" />
                                        <circle cx="20" cy="28" r="6" fill="#030712" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Compromised quality</p>
                                    <p className='text-base'>Lengthy travel conditions often results in preservation through chemicals </p>
                                </div>
                            </div>

                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4767 7.8767C22.2109 8.35615 22.0251 8.87575 21.9267 9.41503C23.5217 8.4317 25.4933 7.6867 27.52 7.5117C29.1367 7.37336 30.8167 7.59503 32.3767 8.37836C33.9417 9.16336 35.3333 10.49 36.4 12.4767C37.7 14.8934 37.7217 17.7234 37.115 20.505C36.5067 23.2934 35.2483 26.1284 33.865 28.6484C32.637 30.8605 31.2674 32.991 29.765 35.0267C29.1242 35.8977 28.4595 36.7508 27.7717 37.585L27.74 37.6217L27.7333 37.6317L27.73 37.6334L27.27 38.1717L20.2083 33.9234L13.145 38.1734L12.6867 37.635L12.6833 37.6317L12.6767 37.6217L12.645 37.585C12.4634 37.3704 12.2856 37.1526 12.1117 36.9317C11.7517 36.4817 11.245 35.8317 10.6533 35.0267C9.15029 32.9911 7.78022 30.8605 6.55167 28.6484C5.16834 26.1284 3.91 23.2934 3.30167 20.505C2.695 17.7217 2.71667 14.895 4.01667 12.4767C5.08334 10.49 6.475 9.16336 8.04 8.3767C9.6 7.59336 11.28 7.37336 12.8967 7.5117C14.9533 7.69003 16.9533 8.45503 18.56 9.45836V9.45503C18.6749 8.33284 19.0157 7.24548 19.5617 6.25836C20.61 4.37503 22.6433 2.44503 26.3733 1.69836L27.0283 4.96836C24.2667 5.52003 23.0533 6.83836 22.4783 7.8767H22.4767Z" fill="#030712" />
                                    </svg>

                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Weakened Nutritional Value</p>
                                    <p className='text-base'>Ambient temperature weakens overall nutritional value of fresh foods</p>
                                </div>
                            </div>


                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 1.6665H37.6105L32.96 37.1873H6.31726L1.66675 1.6665Z" fill="#030712" />
                                        <g clip-path="url(#clip0_2124_9104)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0495 18.3787V10.991H21.6617L20.4905 12.1621L23.5547 15.2263L22.3837 16.3973L21.0728 15.0864L20.4835 14.4971L19.305 15.6756L19.8943 16.2649L21.2052 17.5758L20.1908 18.5902L18.88 17.2793L18.2907 16.6901L17.1122 17.8686L17.7015 18.4579L19.0123 19.7687L18.0181 20.763L16.7074 19.4522L16.1181 18.863L14.9396 20.0415L15.5288 20.6307L16.8396 21.9415L16.2534 22.5276L11.8892 22.247L11.0575 22.1935L10.9506 23.8567L11.7822 23.9102L15.7916 24.168L16.0494 28.1775L16.1029 29.009L17.7661 28.902L17.7127 28.0705L17.432 23.706L18.0181 23.12L19.329 24.4309L19.9182 25.0201L21.0967 23.8416L20.5075 23.2524L19.1965 21.9415L20.1908 20.9472L21.5016 22.258L22.0909 22.8473L23.2694 21.6687L22.6801 21.0795L21.3693 19.7687L22.3837 18.7543L23.6945 20.065L24.2837 20.6543L25.4622 19.4758L24.873 18.8865L23.5622 17.5758L24.7332 16.4048L27.8782 19.5499L29.0495 18.3787Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2124_9104">
                                                <rect width="20" height="20" fill="white" transform="translate(10 9.99988)" />
                                            </clipPath>
                                        </defs>
                                    </svg>



                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Promotes Food Waste</p>
                                    <p className='text-base'>According to multiple sources, India waste's over 50% of the fresh food it produces</p>
                                </div>
                            </div>



                        </div>


                        <div className=' px-12 py-9 w-full h-auto flex flex-col gap-y-12 justify-evenly items-center'>


                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.1922 1.80798L34.8379 21.6667H22.5002V36.1394C19.0244 36.533 15.4739 35.878 12.3646 34.1594L19.5121 27.0119L17.4287 24.9285L4.51205 37.8452L2.15503 35.4882L7.52428 30.1189C2.02228 23.4005 2.56706 13.3694 8.95551 6.98093L9.23771 6.69873L38.1922 1.80798ZM38.3336 24.1667H25.0002V34.1667L31.6669 38.3334L38.3336 34.1667V24.1667Z" fill="#BDC695" />
                                    </svg>

                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Prolonged Freshness</p>
                                    <p className='text-base'>When frozen at peak ripeness, it inhibits spoilage</p>
                                </div>
                            </div>



                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1144 15.8678C27.2873 16.868 29.1158 18.488 30.3739 20.501L36.6861 11.0329L28.7389 4.21216L25.1144 15.8678ZM14.9063 15.8726C12.7348 16.8749 10.9078 18.4962 9.65148 20.5102L3.33325 11.0329L11.2825 4.21919L14.9063 15.8726ZM16.0193 11.0328L13.6251 3.33337H26.3941L23.9999 11.0328H16.0193ZM27.7219 3.33929L27.7028 3.33337H27.7149L27.7219 3.33929ZM29.7218 26.9612C29.7218 32.3217 25.3763 36.6674 20.0158 36.6674C14.6552 36.6674 10.3096 32.3217 10.3096 26.9612C10.3096 21.6007 14.6552 17.255 20.0158 17.255C25.3763 17.255 29.7218 21.6007 29.7218 26.9612ZM19.9999 22.0314L21.8163 25.145L24.9299 25.9234L22.8541 28.2587L23.3731 31.8914L19.9999 30.3345L16.6268 31.8914L17.1458 28.2587L15.0699 25.9234L18.1836 25.145L19.9999 22.0314Z" fill="#BDC695" />
                                    </svg>

                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Free of Preservatives</p>
                                    <p className='text-base'>Use of flash frozen eliminates the need for any unwanted ingredient</p>
                                </div>
                            </div>

                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4765 7.8767C22.2108 8.35615 22.025 8.87575 21.9265 9.41503C23.5215 8.4317 25.4932 7.6867 27.5199 7.5117C29.1365 7.37336 30.8165 7.59503 32.3765 8.37836C33.9415 9.16336 35.3332 10.49 36.3999 12.4767C37.6999 14.8934 37.7215 17.7234 37.1149 20.505C36.5065 23.2934 35.2482 26.1284 33.8649 28.6484C32.6368 30.8605 31.2673 32.991 29.7649 35.0267C29.1241 35.8977 28.4594 36.7508 27.7715 37.585L27.7399 37.6217L27.7332 37.6317L27.7299 37.6334L27.2699 38.1717L20.2082 33.9234L13.1449 38.1734L12.6865 37.635L12.6832 37.6317L12.6765 37.6217L12.6449 37.585C12.4633 37.3704 12.2855 37.1526 12.1115 36.9317C11.7515 36.4817 11.2449 35.8317 10.6532 35.0267C9.15017 32.9911 7.78009 30.8605 6.55155 28.6484C5.16821 26.1284 3.90988 23.2934 3.30155 20.505C2.69488 17.7217 2.71655 14.895 4.01655 12.4767C5.08321 10.49 6.47488 9.16336 8.03988 8.3767C9.59988 7.59336 11.2799 7.37336 12.8965 7.5117C14.9532 7.69003 16.9532 8.45503 18.5599 9.45836V9.45503C18.6748 8.33284 19.0155 7.24548 19.5615 6.25836C20.6099 4.37503 22.6432 2.44503 26.3732 1.69836L27.0282 4.96836C24.2665 5.52003 23.0532 6.83836 22.4782 7.8767H22.4765Z" fill="#BDC695" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3047 17.3619C17.8477 15.9049 15.4855 15.9049 14.0285 17.3619C12.5716 18.8189 12.5715 21.1811 14.0285 22.638L19.9999 28.6094L25.9713 22.638C27.4283 21.1811 27.4283 18.8189 25.9713 17.3619C24.5144 15.9049 22.1521 15.9049 20.6952 17.3619L19.9999 18.0572L19.3047 17.3619Z" fill="white" />
                                    </svg>


                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Guaranteed Nutrients</p>
                                    <p className='text-base'>Freezing at peak ripeness locks in maximum nutrition. And there's already enough research!</p>
                                </div>
                            </div>


                            <div className='w-full flex gap-x-6 justify-start'>
                                <div className='w-[10%] h-full'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 1.6665H37.6105L32.96 37.1873H6.31726L1.66675 1.6665Z" fill="#BDC695" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6666 13C15.5602 13 12.95 15.1246 12.21 18C12.95 20.8754 15.5602 23 18.6666 23C21.1744 23 23.3588 21.6153 24.4969 19.5688L27.3333 22V14L24.4969 16.4312C23.3588 14.3847 21.1744 13 18.6666 13ZM17.1416 20.4749C18.5084 19.1081 18.5084 16.892 17.1416 15.5251L17.8487 14.818C19.606 16.5754 19.606 19.4247 17.8487 21.182L17.1416 20.4749ZM16.3333 16.6667H15V18H16.3333V16.6667Z" fill="white" />
                                        <rect x="14" y="14" width="7" height="8" rx="3" fill="white" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <p className='text-2xl font-medium'>Combats Food Wate</p>
                                    <p className='text-base'>Available data suggest frozen food can be cheaper in the long run too</p>
                                </div>
                            </div>


                        </div>

                    </div>
                    {/* captain skopck */}
                    <div className='w-full py-24 px-12  border-b border-black flex justify-center items-center'>
                        <div className='w-4/6 gap-y-12 flex flex-col justify-center items-center'>
                            <div className='w-full h-auto'>
                                <q className='text-4xl'>insufficient facts always invite danger </q>
                                <p className='text-2xl text-[#838282]'>insufficient facts always invite danger </p>
                            </div>
                            <p className='text-xl'>So we'll happily tell you how we check, taste, curate and deliver at great value. We are building to show you everything we know about food quality, privacy, emissions and how we sell, as we don’t like gatekeepers or green washing.</p>
                        </div>
                    </div>

                    {/* the crew */}
                    <div className=' border-b border-black px-12 py-9 flex justify-center items-center'>
                        <p className='text-5xl font-Staatliches'>the crew</p>
                        <img className='absolute right-0' src={afchatstamp} alt="chat stamp" />

                    </div>

                    <div className='w-full flex border-b border-black'>

                    </div>
                </div>
            </section>

        </section>
    )
}

export default About