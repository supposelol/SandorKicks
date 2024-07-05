import Featured from "../components/Features/Featured";
import Trending from "../components/Features/TrendingSlider";
import Homebox from "../components/Features/HomeBox";
import Homelaces from "../components/Features/HomeLaces";
import Newsletter from "./Footer/Newsletter";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="motto"><h3>Kick It, Own It</h3></div>
            <Featured />
            <div className="motto2"><h3>Sneaker Display Box</h3></div>
            <Homebox />
            <div className="motto2"><h3>High quality shoelaces</h3></div>
            <Homelaces />
            <div className="motto2"><h3>Trending Kicks Now</h3></div>
            <Trending />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;