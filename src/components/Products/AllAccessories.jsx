import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { items } from "../Allitems";
import "./Products.css";
import SearchBar from "./productFilters/SearchBar";
import CategoryFilter from "./productFilters/CategoryFilter";
import PriceRangeFilter from "./productFilters/PriceRangeFilter";

const AllAccessories = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const MIN = 5;
    const MAX = 35;
    const [values, setValues] = useState([MIN, MAX]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const accessoryClick = (item) => {
        // Construct the dynamic route path based on item properties
        const routePath = `/accessories/${item.category}/${item.route}`; // (1)
        navigate(routePath); // Use useNavigate to navigate to the accessory details page (2)
    };

    // Handle category filter checkbox changes
    const handleCategoryFilter = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories((prevState) => [...prevState, value]);
        } else {
            setSelectedCategories((prevState) => prevState.filter((category) => category !== value));
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

    // Filter items based on selected category, price range, and search term
    const filterItems = (min, max, term) => {
        const filteredItems = items.filter(
            (item) =>
                item.id >= 12 &&
                (selectedCategories.length === 0 ||
                    selectedCategories.includes(item.category)) &&
                (min === "" || item.price >= parseFloat(min)) &&
                (max === "" || item.price <= parseFloat(max)) &&
                (term === "" ||
                    item.description.toLowerCase().includes(term.toLowerCase()) ||
                    item.category.toLowerCase().includes(term.toLowerCase()))
        );
        setFilteredItems(filteredItems);
    };

    // Store filtered items
    const [filteredItems, setFilteredItems] = useState(items);

    // Handle change in price range slider
    const handleChange = (values) => {
        setValues(values);
        handleMinPriceChange(values[0]);
        handleMaxPriceChange(values[1]);
    };

    // Handle change in search bar input
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        filterItems(minPrice, maxPrice, e.target.value);
    };

    // useEffect to handle filtering after category selection changes
    useEffect(() => {
        filterItems(minPrice, maxPrice, searchTerm);
    }, [selectedCategories, minPrice, maxPrice, searchTerm]);

    //scroll to top when navigating
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

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
                    <CategoryFilter
                        categories={[...new Set(items.map((item) => item.category))]}
                        selectedCategories={selectedCategories}
                        onCategoryFilterChange={handleCategoryFilter}
                    />
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
                                    onClick={() => accessoryClick(item)}
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

export default AllAccessories;