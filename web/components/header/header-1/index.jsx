import Link from "next/link";
import {useEffect, useState} from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import Image from "next/image";

const Header1 = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <>
            <header className={`header ${navbar ? "bg-dark-1 is-sticky" : ""}`}>
                <div className="header__container px-30 sm:px-20">
                    <div className="row justify-between items-center">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <Link href="/" className="header-logo mr-20">
                                    <Image src="/img/general/rexe-light.svg" alt="rexe icon" width={300} height={200}/>
                                    <Image src="/img/general/rexe-dark.svg" alt="rexe icon" width={300} height={200}/>
                                </Link>
                                {/* End logo */}

                                <div className="header-menu">
                                    <div className="header-menu__content">
                                        <MainMenu style="text-white"/>
                                    </div>
                                </div>
                                {/* End header-menu */}
                            </div>
                            {/* End d-flex */}
                        </div>
                        {/* End col */}

                        <div className="col-auto">
                            <div className="d-flex items-center">
                                {/* Start btn-group */}
                                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                                    <Link
                                        href="/others-pages/login"
                                        className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                                {/* End btn-group */}

                                {/* Start mobile menu icon */}
                                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                                    <div>
                                        <Link
                                            href="/others-pages/login"
                                            className="d-flex items-center icon-user text-inherit text-22"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="d-flex items-center icon-menu text-inherit text-20"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="mobile-sidebar_menu"
                                            data-bs-target="#mobile-sidebar_menu"
                                        />

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
                                {/* End mobile menu icon */}
                            </div>
                        </div>
                        {/* End col-auto */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End header_container */}
            </header>
        </>
    );
};

export default Header1;
