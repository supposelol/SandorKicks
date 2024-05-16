import React from "react";
import "../Products.css";

const CategoryFilter = ({ categories, selectedCategories, onCategoryFilterChange }) => {
    return (
        <div className="brand-filter">
            <h5>Category</h5>
            <ul>
                {categories.slice(1, 4).map((category, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                value={category}
                                onChange={onCategoryFilterChange}
                                checked={selectedCategories.includes(category)}
                                className="custom-checkbox"
                            />
                            <span className="brand-name">{category}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;
