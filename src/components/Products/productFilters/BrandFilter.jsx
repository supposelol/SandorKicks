import React from "react";
import "../Products.css";

const BrandFilter = ({ brands, selectedBrands, onBrandFilterChange }) => {
    return (
        <div className="brand-filter">
            <h5>Brand</h5>
            <ul>
                {brands.slice(0, 3).map((brand, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                value={brand}
                                onChange={onBrandFilterChange}
                                checked={selectedBrands.includes(brand)}
                                className="custom-checkbox"
                            />
                            <span className="brand-name">{brand}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandFilter;
