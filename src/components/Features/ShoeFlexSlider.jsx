import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "../Featured-Home.css";
import ImageModal from './ShoeFlexSliderDetails';
import { items } from "../Allitems";

const ShoeFlexSlider = () => {
    const hasMounted = useRef(false);
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
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                className="mySwiper"
                breakpoints={{
                    576: {
                        sliderPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }}
            >
                {shuffledFlexItems.map((item, index) => (
                    <SwiperSlide key={index} onClick={() => openModal(item)}>
                        <img src={item.flexImg} alt={`Slide ${index}`} />
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
        </>
    );
};

export default ShoeFlexSlider;
