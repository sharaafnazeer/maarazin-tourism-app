import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import MobileMenu from "../MobileMenu";
import dynamic from "next/dynamic";

const HeaderDashBoard = () => {
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        const body = document.querySelector("body");
        if (isOpen) {
            body.classList.add("-is-sidebar-open");
        } else {
            body.classList.remove("-is-sidebar-open");
        }
    }, [isOpen]);

    return (
        <>
            <header
                className={`header -dashboard ${navbar ? "is-sticky bg-white" : ""}`}
            >
                <div className="header__container px-30 sm:px-20">
                    <div className="-left-side">
                        <Link href="/" className="header-logo">
                            <Image src="/img/general/rexe-dark.svg" alt="logo icon" width={300} height={200}/>
                        </Link>
                        {/* End logo */}
                    </div>
                    {/* End _left-side */}

                    <div className="row justify-between items-center pl-60 lg:pl-20">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <button className="d-flex" onClick={handleToggle}>
                                    <i className="icon-menu-2 text-20"></i>
                                </button>
                            </div>
                        </div>
                        {/* End .col-auto */}

                        <div className="col-auto">
                            <div className="d-flex items-center">

                                <div className="row items-center x-gap-5 y-gap-20 pl-20 lg:d-none">
                                    <div className="col-auto">
                                        <button className="button -blue-1-05 size-50 rounded-22 flex-center">
                                            {/* <i className="icon-email-2 text-20"></i> */}

                                        </button>
                                    </div>
                                    {/* End col-auto */}

                                    <div className="col-auto">
                                        <button className="button -blue-1-05 size-50 rounded-22 flex-center">
                                            <i className="icon-notification text-20"></i>
                                        </button>
                                    </div>
                                    {/* End col-auto */}
                                </div>
                                {/* End .row */}

                                <div className="pl-15">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/avatars/3.png"
                                        alt="image"
                                        className="size-50 rounded-22 object-cover"
                                    />
                                </div>

                                <div className="d-none xl:d-flex x-gap-20 items-center pl-20">
                                    <div>
                                        <button
                                            className="d-flex items-center icon-menu text-20"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="mobile-sidebar_menu"
                                            data-bs-target="#mobile-sidebar_menu"
                                        ></button>
                                    </div>

                                    <div
                                        className="offcanvas offcanvas-start  mobile_menu-contnet "
                                        tabIndex="-1"
                                        id="mobile-sidebar_menu"
                                        aria-labelledby="offcanvasMenuLabel"
                                        data-bs-scroll="true"
                                    >
                                        <MobileMenu/>
                                        {/* End MobileMenu */}
                                    </div>
                                </div>
                            </div>
                            {/* End -flex items-center */}
                        </div>
                        {/* End col-auto */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End header_container */}
            </header>
            {/* End header */}
        </>
    );
};

export default dynamic(() => Promise.resolve(HeaderDashBoard), {ssr: false});
