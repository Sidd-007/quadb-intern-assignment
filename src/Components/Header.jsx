import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <header className="relative w-full z-30 font-poppins bg-[#1E1E1E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 mr-4 cursor-pointer  flex ">

                        <svg width="50" height="50" viewBox="0 0 1197 1197" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="598.5" cy="598.5" r="598.5" fill="url(#paint0_linear_605_2)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M279.299 468.825V718.2C279.299 790.02 339.149 827.925 369.074 837.9H628.424C692.264 837.9 721.524 758.1 728.174 718.2V468.825C728.174 404.985 661.674 369.075 628.424 359.1H369.074C304.278 381.977 289.102 435.25 282.165 459.602C281.055 463.497 280.156 466.652 279.299 468.825ZM778.054 508.725V688.275C785.086 749.204 844.578 767.404 877.804 768.075C912.457 762.028 921.194 718.519 917.704 698.25V468.825C898.306 392.427 773.452 443.82 778.054 508.725ZM438.899 558.601V658.351C438.899 690.271 478.799 691.601 498.749 688.276L588.524 638.401C616.649 611.503 590.479 571.672 578.549 568.576L498.749 518.701C458.849 502.741 442.224 538.651 438.899 558.601Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_605_2" x1="-1.96199e-05" y1="608.311" x2="1197" y2="608.312" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7B8E" />
                                    <stop offset="1" stop-color="#FF5870" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='text-2xl text-gray-50 font-semibold mt-[7px] ml-2'><span className='text-[#FF6077] text-3xl'>M</span>ovie<span className='text-[#FF6077] text-3xl'>Z</span>illa</span>
                    </Link>
                    <nav className="hidden md:flex md:flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </ul>

                    </nav>

                    <div className="md:hidden">
                        <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                            <span className="sr-only">Menu</span>
                            <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect y="4" width="24" height="2" rx="1" />
                                <rect y="11" width="24" height="2" rx="1" />
                                <rect y="18" width="24" height="2" rx="1" />
                            </svg>
                        </button>

                        <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
                            <ul className="bg-gray-800 px-4 py-2">
                                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
