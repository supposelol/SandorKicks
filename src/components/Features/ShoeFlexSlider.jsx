import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../Featured-Home.css";
import ImageModal from './ShoeFlexSliderDetails';
import { items } from "../Allitems";

const ShoeFlexSlider = () => {
    const hasMounted = useRef(false);
    const swiperRef = useRef(null);
    const [flexItems, setFlexItems] = useState([]);
    const [shuffledFlexItems, setShuffledFlexItems] = useState([]);

    useEffect(() => {
        // useRef to use useEffect only once
        if (!hasMounted.current) {
            // Filter items to include only those with flexImg defined
            const filteredItems = items.filter(item => item.flexImg);
            setFlexItems(filteredItems);
            hasMounted.current = true;
        }
    }, []);

    useEffect(() => {
        // Shuffle the array only once after flexItems is set
        setShuffledFlexItems(shuffleArray(flexItems));
    }, [flexItems]);

    // Shuffle the array randomly
    const shuffleArray = (array) => {
        return array.slice().sort(() => Math.random() - 0.5);
    };

    // Slider arrow buttons 
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // Modal stuff
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setModalOpen(false);
    };

    return (
        <>
            <div className='swiper-container'>
                <div className="flex-text-buttons-wrapper">
                    <div className="flex-text-container">
                        <h4>Style inspiration for your new kicks!</h4>
                        <p>Upload your photo for a chance to be featured</p>
                        <button className='upload-button'>Upload your photo</button>
                    </div>
                    <div className="swiper-nav-buttons">
                        <button onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
                        <button onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    navigation={false}
                    className="mySwiper"
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1441: { slidesPerView: 4 },
                    }}
                >
                    {shuffledFlexItems.map((item, index) => (
                        <SwiperSlide key={index} onClick={() => openModal(item)}>
                            <div className="image-container">
                                <img src={item.flexImg} alt={`Slide ${index}`} />
                                <div className="zoom-icon">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Render ImageModal only when modalOpen is true */}
                {modalOpen && selectedItem && (
                    <ImageModal
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        selectedItem={selectedItem}
                        selectedImage={selectedItem.flexImg}
                    />
                )}
            </div>
        </>
    );
};

export default ShoeFlexSlider;