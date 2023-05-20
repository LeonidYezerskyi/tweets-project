import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import css from "./FilterDropdown.module.css";

const FilterDropdown = ({ onChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('show all');

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
        onChange(selectedValue);

        localStorage.setItem('selectedFilter', selectedValue);
    };

    useEffect(() => {
        const storedSelectedFilter = localStorage.getItem('selectedFilter');
        if (storedSelectedFilter) {
            setSelectedFilter(storedSelectedFilter);
            onChange(storedSelectedFilter);
        }
    }, []);

    return (
        <div className={css.filterWrapper}>
            <label className={css.label} htmlFor="filter">Filter:</label>
            <select className={css.select} value={selectedFilter} onChange={handleFilterChange}>
                <option className={css.optionName} value="show all">Show All</option>
                <option className={css.optionName} value="follow">Follow</option>
                <option className={css.optionName} value="followings">Followings</option>
            </select>
        </div>
    );
};

FilterDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default FilterDropdown;