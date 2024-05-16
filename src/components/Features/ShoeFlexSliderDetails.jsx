import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "../Featured-Home.css";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ImageModal = ({ isOpen, onRequestClose, selectedItem, selectedImage }) => {
    const navigate = useNavigate();
    // reset the body overflow when the modal is closed
    const resetBodyOverflow = () => {
        document.body.style.overflow = 'auto'; // Set body overflow to auto when modal is closed
    };

    const handleClose = () => {
        onRequestClose();
        resetBodyOverflow(); // resets the body overflow to allow scrolling after the modal is closed
    };
    // Set body overflow to hidden when modal is open
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    }
    // navigate to the corresponding shoe page and close the modal and take back to the top
    const handleShoeClick = () => {
        navigate(`/shoes/${selectedItem.brand}/${selectedItem.route}`);
        handleClose();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // only load the long description on large screens
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Image Modal"
            ariaHideApp={false}
        >
            <div className="image-modal-content">
                <img className="modal-img" src={selectedImage} alt="Selected Image" />
                <Container className="modal-right-div">
                    <Row>
                        <div className='m-close-button-container'>
                            <h5>In This Look</h5>
                            <button onClick={handleClose} className="m-close-button">&#10007;</button>
                        </div>
                    </Row>
                    <Row>
                        <Col lg="6" md="12">
                            <div className='description-container'>
                                <h5 className="m-item-description">{selectedItem.description}</h5>
                                <p className="m-item-brand">{selectedItem.brand}</p>
                                <p className="m-item-price">${selectedItem.price}</p>
                            </div>
                        </Col>
                        <Col lg="6" md="12" className="m-item-image-container">
                            <img
                                className="m-item-image"
                                src={selectedItem.img}
                                alt={selectedItem.description}
                                onClick={handleShoeClick}
                            />
                        </Col>
                    </Row>
                    {isLargeScreen && (
                        <Row>
                            <Col>
                                <p className="m-item-longtext">{selectedItem.longDescription}</p>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
        </Modal >
    );
};

export default ImageModal;