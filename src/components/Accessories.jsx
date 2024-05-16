import Newsletter from "./Footer/Newsletter";
import Footer from "./Footer/Footer";
import AllAccessories from "./Products/AllAccessories";
import ShoeFlexSlider from "./Features/ShoeFlexSlider";
import TrendingSlider from "./Features/TrendingSlider";

const Accessories = () => {
    return (
        <>
            <div className="motto"><h3>Accessories hub</h3></div>
            <AllAccessories />
            <div className="motto2"><h3>How others are wearing it</h3></div>
            <ShoeFlexSlider />
            <div className="motto2"><h3>You might like these</h3></div>
            <TrendingSlider />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Accessories;