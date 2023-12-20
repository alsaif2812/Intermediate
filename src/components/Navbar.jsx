'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import witLogo from '../../public/images/wit-logo.png';
import Link from 'next/link';
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import navbarData from '@/textContent/navbar/data.json';

function Nav({ data, title }) {
    const [openMenu, setOpenMenu] = useState(false);
    console.log('data', data);
    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover={true}>
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center text-base font-bold capitalize bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                >
                    {title}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform bg-sky-blue hover:bg-light-purple duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${openMenu ? 'rotate-180' : '/'
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="hidden bg-white w-auto grid grid-cols-2">
                {data.map((item) => (
                    <NavItem key={data.heading} {...item} />
                ))}
            </MenuList>
        </Menu>
    );
}

function NavItem({ caption, color, heading, icon, link }) {
    return (
        <Link
            href={link}
            className={`border-none px-2.5 py-4 w-2/3 hover:bg-${color}-50 rounded-2xl transition duration-200`}
        >
            <div className="flex">
                <div className="mr-2">
                    <i
                        className={`${icon} mr-[0.3vw] text-${color}-400 text-left text-xl`}
                    ></i>
                </div>
                <div className="">
                    <p className="font-semibold text-md">{heading}</p>
                    <p className="mt-2 font-medium text-xs opacity-75">
                        {caption}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function Navbar({ showDefaultButtonColors }) {
    const navbarDataKeys = Object.keys(navbarData);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
        const mobileMenu = document.querySelector('#mobileMenu');
        if (mobileMenu) {
            if (isMobileMenuOpen) {
                mobileMenu.style.height = 'auto'; // Open the menu
            } else {
                mobileMenu.style.height = '0'; // Close the menu
            }
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <div
                id="navbar"
                className="px-6 md:px-10 flex items-center justify-between py-6"
            >
                <div id="nav1">
                    <Image
                        src={witLogo}
                        style={{ width: '80px' }}
                        id="logo"
                        alt="wahni it solutions logo"
                    />
                </div>
                <div
                    id="nav2"
                    className="hidden md:flex items-center justify-center gap-7 font-bold text-[#20262e]"
                >
                    <Link
                        href="/"
                        className="mt-0.5 font-extrabold bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                    >
                        Home
                    </Link>

                    {navbarDataKeys.map((key) => (
                        <Nav
                            key={key}
                            title={key}
                            data={navbarData[key].items}
                        />
                    ))}

                    <Link
                        href="/careers"
                        className="mt-0.5 font-extrabold bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                    >
                        Careers
                    </Link>
                </div>
                <div
                    id="nav3"
                    className="hidden md:flex items-center justify-between gap-2"
                >
                    <button
                        className={`${showDefaultButtonColors
                            ? 'bg-white'
                            : 'bg-[#26C3FE] text-white'
                            } py-2 px-4 bg-[#47CCFE] rounded-lg font-bold text-blue-400 bg-opacity-90 transition hover:bg-blue-500 hover:text-white hover:scale-105 hover:mt-[0.1vw] duration-300`}
                    >
                        Free Demo
                    </button>
                    <Link href="/contact-sales">
                        <button
                            className={`${showDefaultButtonColors
                                ? 'bg-white text-white hover:bg-blue-500'
                                : 'bg-gray-600 text-[#5b5858]'
                                } py-2 px-4  rounded-lg font-bold bg-opacity-20  transition   hover:scale-105 hover:mt-[0.1vw] duration-300`}
                        >
                            Contact Sales
                        </button>
                    </Link>
                </div>
                <div id="mobileMenu" className="md:hidden relative ">
                    <button
                        id="menuToggle"
                        className={`block text-gray-600 hover:text-gray-900 focus:outline-none ${isMobileMenuOpen ? 'hidden' : ''
                            }`}
                        onClick={handleMenu}
                    >
                        <i
                            id="menuIcon"
                            className="ri-menu-3-line text-3xl"
                        ></i>
                    </button>
                    <div
                        id="menu"
                        className={`${isMobileMenuOpen ? 'block' : 'hidden'
                            } fixed inset-0 max-w-full max-h-[150vw] z-50 shadow-lg p-[1vw] md:p-[2vw] flex flex-col items-center bg-[#fff] pt-[20vw] justify-start`}
                    >
                        <button
                            id="closeMenu"
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none pr-[8vw] pt-[11vw]"
                            onClick={handleMenu}
                        >
                            <i className="ri-close-line text-2xl"></i>
                        </button>
                        <Link
                            href="/"
                            className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200"
                        >
                            Home
                        </Link>
                        <a className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200">
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        variant="text"
                                        className="flex items-center gap-1 text-base font-normal capitalize tracking-normal transition duration-300 ease-in-out transform my-[-2vw]"
                                    >
                                        Solutions{' '}
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`h-3.5 w-3.5 transition-transform  duration-300 ease-in-out transform  ${openMenu ? 'rotate-180' : '/'
                                                }`}
                                        />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <Link href="/solutions/retail">
                                        <MenuItem>Retail</MenuItem>
                                    </Link>
                                    <Link href="/solutions/services">
                                        <MenuItem>Services</MenuItem>
                                    </Link>
                                    <Link href="/solutions/healthcare">
                                        <MenuItem>Healthcare</MenuItem>
                                    </Link>
                                    <Link href="/solutions/manufacturing">
                                        <MenuItem>Manufacturing</MenuItem>
                                    </Link>
                                    <Link href="/solutions/real-estate">
                                        <MenuItem>Real Estate</MenuItem>
                                    </Link>
                                    <Link href="/solutions/distribution">
                                        <MenuItem>Distribution</MenuItem>
                                    </Link>
                                    <Link href="/solutions/agriculture">
                                        <MenuItem>Agriculture</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </a>
                        <a className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200">
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        variant="text"
                                        className="flex items-center gap-1 text-base font-normal capitalize transition duration-300 ease-in-out transform my-[-2vw]"
                                    >
                                        Products{' '}
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`h-3.5 w-3.5 transition-transform  duration-300 ease-in-out transform  ${openMenu ? 'rotate-180' : '/'
                                                }`}
                                        />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <Link href="/products/erpnext">
                                        <MenuItem>ERPNext</MenuItem>
                                    </Link>
                                    <Link href="/products/mobileapp">
                                        <MenuItem>Mobile App</MenuItem>
                                    </Link>
                                    <Link href="/products/neupos">
                                        <MenuItem>Neu POS</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </a>
                        <a className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200">
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        variant="text"
                                        className="flex items-center gap-1 text-base font-normal capitalize transition duration-300 ease-in-out transform my-[-2vw]"
                                    >
                                        Services{' '}
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`h-3.5 w-3.5 transition-transform  duration-300 ease-in-out transform  ${openMenu ? 'rotate-180' : '/'
                                                }`}
                                        />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <Link href="/services/business-consulting">
                                        <MenuItem>Business Consulting</MenuItem>
                                    </Link>
                                    <Link href="/services/e-commerce">
                                        <MenuItem>E-commerce</MenuItem>
                                    </Link>
                                    <Link href="/services/erp-implementation">
                                        <MenuItem>ERP Implementation</MenuItem>
                                    </Link>
                                    <Link href="/services/workflow-automation">
                                        <MenuItem>Workflow automation</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </a>
                        <Link
                            href="/about"
                            className="flex items-center justify-center py-3 pr-8 text-gray-800 hover:bg-gray-200 "
                        >
                            About
                        </Link>
                        <Link
                            href="/learn"
                            className="flex items-center justify-center py-3 pr-8 text-gray-800 hover:bg-gray-200 "
                        >
                            Learn
                        </Link>
                        <Link
                            href="/careers"
                            className="block py-3 pr-7 text-gray-800 hover:bg-gray-200 "
                        >
                            Careers
                        </Link>
                        <button className="capitalize my-[1.9vw] ml-[-3vw] px-[4vw] py-[2vw] bg-deep-purple-300 rounded-lg font-semibold text-sm text-[#212121]">
                            free demo
                        </button>
                        <Link href="/contact-sales" className="capitalize my-[1.9vw] ml-[-3vw] px-[4vw] py-[2vw] bg-deep-purple-300 rounded-lg font-semibold text-sm text-[#212121]">
                            Contact sales
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}
export default Navbar;
