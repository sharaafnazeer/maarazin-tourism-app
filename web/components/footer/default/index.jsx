import Image from "next/image";
import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Link from "next/link";

const index = () => {
  return (
    <footer className="footer -type-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <Link href="/" className="header-logo mr-20">
                <Image
                  width={300}
                  height={300}
                  src={"/img/general/rexe-dark.svg"}
                />
              </Link>
              <div className="text-16 mt-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
              {/* End logo */}
            </div>

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
