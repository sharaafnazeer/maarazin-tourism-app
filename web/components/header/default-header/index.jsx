import Link from "next/link";
import {useEffect, useState} from "react";
import MainMenu from "../MainMenu";
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
            <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
                <div className="header__container px-30 sm:px-20">
                    <div className="row justify-between items-center">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <Link href="/" className="header-logo mr-20">
                                    <Image src="/img/general/rexe-dark.svg" alt="rexe icon" width={300} height={200}/>
                                    <Image src="/img/general/rexe-light.svg" alt="rexe icon" width={300} height={200}/>
                                </Link>
                                {/* End logo */}

                                <div className="header-menu">
                                    <div className="header-menu__content">
                                        <MainMenu style="text-dark-1"/>
                                    </div>
                                </div>
                                {/* End header-menu */}
                            </div>
                            {/* End d-flex */}
                        </div>
                        {/* End col */}


                    </div>
                    {/* End .row */}
                </div>
                {/* End header_container */}
            </header>
        </>
    );
};

export default Header1;
