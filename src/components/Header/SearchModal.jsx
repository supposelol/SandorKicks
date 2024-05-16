import React, { useState, useEffect } from 'react';
import { items } from "../Allitems";
import Modal from 'react-modal';
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

Modal.setAppElement('#root');

export const SearchModal = ({ isOpen, onRequestClose }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterResults(term);
    };

    const filterResults = (term) => {
        const filtered = items.filter(item =>
            item.brand.toLowerCase().includes(term.toLowerCase()) ||
            item.description.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filtered);
    };

    const handleShoeClick = (item) => {
        navigate(`/${item.type}/${item.brand}/${item.route}`);
        onRequestClose();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleModalOpen = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        };

        handleModalOpen();

        window.addEventListener('modal-open', handleModalOpen);
        window.addEventListener('modal-close', handleModalOpen);

        return () => {
            window.removeEventListener('modal-open', handleModalOpen);
            window.removeEventListener('modal-close', handleModalOpen);
        };
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => {
                onRequestClose();
                window.dispatchEvent(new Event('modal-close'));
            }}
            onAfterOpen={() => {
                window.dispatchEvent(new Event('modal-open'));
            }}
            contentLabel="Search Modal"
            className="search-modal"
            overlayClassName="search-modal-overlay"
        >
            <div className="search-modal-content">
                <Row>
                    <Col lg="12" >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-bar-products"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
                {searchResults.length > 0 && <h3 className='search-product-text'>Products</h3>}
                <ul>
                    {searchResults.map(item => (
                        <li key={item.id}>
                            <Container>
                                <Row>
                                    <Col lg="6" md="12">
                                        <div className='description-container'>
                                            <h5 className="m-item-description">{item.description}</h5>
                                            <p className="m-item-brand">{item.brand}</p>
                                            <p className="m-item-price">${item.price}</p>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="12" className="m-item-image-container">
                                        <img
                                            className="m-item-image"
                                            src={item.img}
                                            alt={item.description}
                                            onClick={() => handleShoeClick(item)}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                    ))}
                </ul>
                {searchResults.length > 0 && (
                    <div className='modal-close-button-container'>
                        <button onClick={onRequestClose} className="modal-close-button">Close</button>
                    </div>
                )}
            </div>
        </Modal>
    );
};