import { useLocation } from "react-router-dom";
import Newsletter from "../components/Footer/Newsletter"
import Footer from "../components/Footer/Footer"
import AllShoeProducts from "./Products/AllShoeProducts";
import NikeProducts from "./Products/NikeProducts";
import AdidasProducts from "./Products/AdidasProducts";
import NewBalanceProducts from "./Products/NewBalanceProducts";
import ShoeFlexSlider from "./Features/ShoeFlexSlider";
import TrendingSlider from "./Features/TrendingSlider";

const Shoes = () => {
    const location = useLocation();

    // Check if the current path is '/shoes/nike', '/shoes/adidas' or '/shoes/newbalance'
    const isNikePage = location.pathname === '/shoes/nike';
    const isAdidasPage = location.pathname === '/shoes/adidas';
    const isNewBalancePage = location.pathname === '/shoes/newbalance';

    // h3 text based on the current route
    let h3text;
    if (isNikePage) {
        h3text = "Nike";
    } else if (isAdidasPage) {
        h3text = "Adidas";
    } else if (isNewBalancePage) {
        h3text = "New Balance";
    } else {
        h3text = "Kicks Hub";
    }

    return (
        <>
            <div className="motto"><h3>{h3text}</h3></div>
            {/* Conditionally render different content based on the current path */}
            {isNikePage && <NikeProducts />}
            {isAdidasPage && <AdidasProducts />}
            {isNewBalancePage && <NewBalanceProducts />}
            {/* Render AllShoeProducts if none of the specific routes match */}
            {!isNikePage && !isAdidasPage && !isNewBalancePage && <AllShoeProducts />}
            <div className="motto2"><h3>How others are wearing it</h3></div>
            <ShoeFlexSlider />
            <div className="motto2"><h3>You might like these</h3></div>
            <TrendingSlider />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Shoes;
