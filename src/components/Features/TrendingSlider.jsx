import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Featured-Home.css";
import { items } from "../Allitems";

function Trending() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const orderedIds = [4, 10, 6, 9, 8, 3, 7, 11];
    const navigate = useNavigate();

    const filteredItems = items.filter(item => orderedIds.includes(item.id));
    //sort the filtered items based on the index of the item's ID in the orderedIds array
    filteredItems.sort((a, b) => orderedIds.indexOf(a.id) - orderedIds.indexOf(b.id));

    //navigation when image is clicked
    const imageClick = (item) => {
        const routePath = `/shoes/${item.brand}/${item.route}`;
        navigate(routePath);
    };

    //scroll to top when navigating
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    const settings = {
        className: "center",
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 892,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                {filteredItems.map(item => (
                    <div key={item.id}>
                        <div
                            className="slider-div-container"
                            onMouseEnter={() => setHoveredItem(item)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <img
                                src={hoveredItem && hoveredItem.id === item.id ? item.otherImgs[0] : item.img}
                                onClick={() => imageClick(item)}
                                style={{ cursor: "pointer" }}
                                alt={item.description}
                            />
                            {hoveredItem && hoveredItem.id === item.id && (
                                <div>
                                    <div className="slider-text-div">
                                        <p className="slider-brand">{item.description}</p>
                                    </div>
                                    <div className="slider-text-div">
                                        <p className="slider-price">${item.price}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Trending;