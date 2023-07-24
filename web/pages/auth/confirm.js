import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import NotFound from "../../components/common/NotFound";
import CallToActions from "../../components/common/CallToActions";
import ConfirmAccount from "../../components/common/ConfirmAccount";

function DefaultFooter() {
    return null;
}

const index = () => {
    return (
        <>
            <Seo pageTitle="Confirm Account"/>
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <DefaultHeader/>
            {/* End Header 1 */}

            <ConfirmAccount/>
            {/* End 404 section */}

            <CallToActions/>
            {/* End Call To Actions Section */}

            <DefaultFooter/>
            {/* End Call To Actions Section */}
        </>
    );
};

export default dynamic(() => Promise.resolve(index), {ssr: false});
