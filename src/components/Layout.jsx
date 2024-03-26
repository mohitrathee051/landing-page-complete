import NavBar from "./NavBar";
import Page1 from "./Page1";
import Page1End from "./Page1End";
import BelowImg from "./BelowImg";
import FormSec from "./FormSec";
import FaqAbove from "./FaqAbove";
import Faq from "./Faq";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="px-8">
            <NavBar />
            <Page1 />
            <Page1End />
            <BelowImg />
            <FormSec />
            <FaqAbove />
            <Faq />
            <Footer />
        </div>
    );
}

export default Layout;
