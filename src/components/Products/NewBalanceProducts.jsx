import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { items } from "../Allitems";
import "./Products.css";
import SearchBar from "./productFilters/SearchBar";
import PriceRangeFilter from "./productFilters/PriceRangeFilter";

const NewBalanceProducts = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const MIN = 89;
    const MAX = 129;
    const [values, setValues] = useState([MIN, MAX]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const shoeClick = (item) => {
        // Construct the dynamic route path based on item properties
        const routePath = `/shoes/${item.brand}/${item.route}`; // (1)
        navigate(routePath); // Use useNavigate to navigate to the shoe details page (2)
    };

    // Filter items based on id, price range and search term
    const filterItems = (min, max, term) => {
        const filteredItems = items.filter(
            (item) =>
                6 <= item.id && item.id <= 8 &&
                (min === "" || item.price >= parseFloat(min)) &&
                (max === "" || item.price <= parseFloat(max)) &&
                (term === "" ||
                    item.description.toLowerCase().includes(term.toLowerCase()) ||
                    item.brand.toLowerCase().includes(term.toLowerCase()))
        );
        setFilteredItems(filteredItems);
    };

    // Store filtered items
    const [filteredItems, setFilteredItems] = useState(items);

    // Handle change in price range slider
    const handleChange = (values) => {
        setValues(values);
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
        filterItems(values[0], values[1], searchTerm);
    };

    // Handle change in search bar input
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        filterItems(minPrice, maxPrice, e.target.value);
    };

    // useEffect to handle filtering after price range or search term changes
    useEffect(() => {
        filterItems(minPrice, maxPrice, searchTerm);
    }, [minPrice, maxPrice, searchTerm]);

    return (
        <Container>
            <Row>
                <Col xs="12">
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchTermChange={handleSearchTermChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg="2" md="3" xs="12" className="left-div-filters">
                    <PriceRangeFilter
                        values={values}
                        MIN={MIN}
                        MAX={MAX}
                        onPriceRangeChange={handleChange}
                    />
                </Col>
                <Col lg="10" md="9" xs="12" className="right-div-items">
                    <Row>
                        {filteredItems.map((item) => (
                            <Col key={item.id} xs="12" sm="6" md="4">
                                <div
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => shoeClick(item)}
                                >
                                    <img
                                        className="item-image"
                                        src={
                                            hoveredItem === item.id
                                                ? item.otherImgs[0]
                                                : item.img
                                        }
                                        alt={item.description}
                                    />
                                    <h5 className="item-description">{item.description}</h5>
                                    <p className="item-brand">{item.brand}</p>
                                    <p className="item-price">${item.price}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default NewBalanceProducts;
