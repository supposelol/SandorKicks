import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { items } from "../Allitems";
import "./Products.css";
import SearchBar from "./productFilters/SearchBar";
import BrandFilter from "./productFilters/BrandFilter";
import PriceRangeFilter from "./productFilters/PriceRangeFilter";

const AllShoeProducts = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const MIN = 89;
    const MAX = 590;
    const [values, setValues] = useState([MIN, MAX]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleShoeClick = (item) => {
        // Construct the dynamic route path based on item properties
        const routePath = `/shoes/${item.brand}/${item.route}`; // (1)
        navigate(routePath); // Use useNavigate to navigate to the shoe details page (2)
    };

    // Handle brand filter checkbox changes
    const handleBrandFilter = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedBrands((prevState) => [...prevState, value]);
        } else {
            setSelectedBrands((prevState) => prevState.filter((brand) => brand !== value));
        }
    };

    // Handle change in min price input
    const handleMinPriceChange = (value) => {
        setMinPrice(value);
    };

    // Handle change in max price input
    const handleMaxPriceChange = (value) => {
        setMaxPrice(value);
    };

    // Filter items based on selected brand, price range, and search term
    const filterItems = (min, max, term) => {
        const filteredItems = items.filter(
            (item) =>
                item.id <= 11 &&
                (selectedBrands.length === 0 ||
                    selectedBrands.includes(item.brand)) &&
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
    const handlePriceChange = (values) => {
        setValues(values);
        handleMinPriceChange(values[0]);
        handleMaxPriceChange(values[1]);
    };

    // Handle change in search bar input
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        filterItems(minPrice, maxPrice, e.target.value);
    };

    // useEffect to handle filtering after brand selection changes
    useEffect(() => {
        filterItems(minPrice, maxPrice, searchTerm);
    }, [selectedBrands, minPrice, maxPrice, searchTerm]);


    return (
        <Container style={{
            marginBottom: '20px'
        }}>
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
                    <BrandFilter
                        brands={[...new Set(items.map((item) => item.brand))]}
                        selectedBrands={selectedBrands}
                        onBrandFilterChange={handleBrandFilter}
                    />
                    <PriceRangeFilter
                        values={values}
                        MIN={MIN}
                        MAX={MAX}
                        onPriceRangeChange={handlePriceChange}
                    />
                </Col>
                <Col lg="10" md="9" xs="12" className="right-div-items">
                    <Row>
                        {filteredItems.map((item) => (
                            <Col key={item.id} xs="12" sm="6" md="4">
                                <div
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    onClick={() => handleShoeClick(item)}
                                >
                                    <div className="item-image-container">
                                        <img
                                            className="item-image"
                                            src={
                                                hoveredItem === item.id
                                                    ? item.otherImgs[0]
                                                    : item.img
                                            }
                                            alt={item.description}
                                        />
                                    </div>
                                    <h5 className="item-description">{item.description}</h5>
                                    <p className="item-brand">{item.brand}</p>
                                    <p className="item-price">${item.price}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container >
    );
};

export default AllShoeProducts;