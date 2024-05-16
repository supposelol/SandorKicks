import React, { useState, useContext } from "react";
import { CartContext } from '../Cart/CartContext';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { items } from "../Allitems";
import "./Products.css";
import SizeModal from './SizeModal';
import ShoeFlexSlider from "../Features/ShoeFlexSlider";
import Trending from "../Features/TrendingSlider";
import Newsletter from "../Footer/Newsletter";
import Footer from "../Footer/Footer";

const AccessoryDetails = () => {
    const { addToCart } = useContext(CartContext);
    const { route } = useParams();
    // Find the accessory data based on category and route
    const accessory = items.find(
        (item) =>
            item.category &&
            item.route.toLowerCase() === route.toLowerCase()
    );

    if (!accessory) {
        return <div>Accessory not found</div>;
    }
    // Logic to keep track of the selected size
    const [selectedSize, setSelectedSize] = useState(null);
    const [showSizeError, setShowSizeError] = useState(false);
    const sizeButtonClick = (size) => {
        setSelectedSize(size);
        setShowSizeError(false); // Reset size error when a size is selected
    };
    // Logic to keep track of Size Modal
    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const openSizeGuide = () => {
        setIsGuideOpen(true);
    };
    const closeSizeGuide = () => {
        setIsGuideOpen(false);
    };

    // Logic to handle the image swaps and zoom
    const [displayedImage, setDisplayedImage] = useState(accessory.img);
    const [enlargedImage, setEnlargedImage] = useState(null);
    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };
    // Update the image in the second col when clicked, enlarges if image is in second col already
    const imageClick = (imageSrc, isSecondColumn) => {
        if (isSecondColumn) {
            setEnlargedImage(imageSrc);
        } else {
            setDisplayedImage(imageSrc);
        }
    };

    // Alert notification 
    const [notify, setNotify] = useState(false);
    const showNotify = () => {
        setNotify(true);
        setTimeout(() => {
            setNotify(false);
        }, 4000);
    };
    const handleAddToCart = () => {
        if (selectedSize) {
            const cartItem = {
                id: accessory.id,
                description: accessory.description,
                price: accessory.price,
                quantity: 1,
                size: selectedSize,
                image: accessory.img,
                isAccessory: true,
            };
            addToCart(cartItem);
            showNotify();
        } else {
            setShowSizeError(true);
        }
    };
    return (
        <>
            <div
                onAnimationEnd={() => setNotify(false)}
                className={`notify ${notify ? "slide-in" : ""}`}
            >
                <p className="notify-text">{accessory.description} added to your cart &nbsp;✅</p>
            </div>
            <div className="motto"><h3>{accessory.category}</h3></div>
            <Container style={{ padding: '48px 0' }}>
                <Row>
                    <Col lg="2" xs="4">
                        <img src={accessory.img}
                            onClick={() => imageClick(accessory.img, false)}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "160px",
                                objectFit: "cover",
                            }}
                            alt={accessory.description}
                        />
                        {accessory.otherImgs.map((img, index) => (
                            <img key={index} src={img}
                                onClick={() => imageClick(img, false)}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: "160px",
                                    objectFit: "cover",
                                    paddingTop: "16px",
                                }}
                                alt={accessory.description}
                            />
                        ))}
                    </Col>
                    <Col lg="6" xs="8" className="d-flex align-items-center justify-content-center">
                        <img
                            src={displayedImage}
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                marginLeft: "4px",
                                marginRight: "12px",
                                cursor: "pointer",
                            }}
                            alt={accessory.description}
                            // Pass the image source and a flag indicating it's from the second col to imageClick 
                            onClick={() => imageClick(displayedImage, true)}
                        />
                    </Col>
                    <Col lg="4" xs="12">
                        <Row>
                            <Col xs="12">
                                <h4 className="detail-description">{accessory.description}</h4>
                                <p className="detail-brand">{accessory.brand}</p>
                                <p className="detail-price">${accessory.price}</p>
                            </Col>
                            <Col xs="12">
                                <div className="select-size-div">
                                    <p className="select-size">Select Size</p>
                                    <p className="size-guide" onClick={openSizeGuide}>Size Guide</p>
                                    <SizeModal isOpen={isGuideOpen} onRequestClose={closeSizeGuide} />
                                </div>
                                <div className="add-size-button-container">
                                    <div className="size-buttons-container">
                                        {accessory.size.map(size => (
                                            <button
                                                key={size}
                                                className={`size_button ${selectedSize === size ? 'clicked' : ''} ${showSizeError ? 'size-error' : ''}`}
                                                onClick={() => sizeButtonClick(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                    <button className="add-to-cart_button" onClick={handleAddToCart}>Add to Cart</button>
                                </div>
                            </Col>
                            <Col xs="12">
                                <div className="item-info-container">
                                    {accessory.info.map((infoItem, index) => (
                                        <React.Fragment key={index}>
                                            <p className="item-info">{infoItem}</p>
                                            {/* Add a line break after the first item if it's a shoelace */}
                                            {index === 0 && accessory.type === "shoelace" && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="flex-row-reverse">
                    <Col lg="4">
                        {showSizeError && <p className="select-size-alert">Please select a size</p>}
                    </Col>
                </Row>
            </Container>
            {/* Display large image */}
            {enlargedImage && (
                <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
                    <img
                        src={enlargedImage}
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            maxWidth: "90%",
                            maxHeight: "90%",
                        }}
                        alt="Enlarged"
                    />
                </div>
            )}
            <div className="motto2"><h3>How others are wearing it</h3></div>
            <ShoeFlexSlider />
            <div className="motto2"><h3>More Kicks For You</h3></div>
            <Trending />
            <br />
            <Newsletter />
            <Footer />
        </>
    );
};

export default AccessoryDetails;
