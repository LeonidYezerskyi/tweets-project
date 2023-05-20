import { useState } from 'react';
import PropTypes from "prop-types";

import css from "./FilterDropdown.module.css";

const FilterDropdown = ({ onChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('show all');

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
        onChange(selectedValue);
    };

    return (
        <div className={css.filterWrapper}>
            <label className={css.label} htmlFor="filter">Filter:</label>
            <select className={css.select} value={selectedFilter} onChange={handleFilterChange}>
                <option value="show all">Show All</option>
                <option value="follow">Follow</option>
                <option value="followings">Followings</option>
            </select>
        </div>
    );
};

FilterDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default FilterDropdown;