import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Users from "../../components/Users/Users"
import FilterDropdown from "../../components/Users/FilterDropdown/FilterDropdown"
import css from "./TweetsPage.module.css"
import arrow from '../../assets/arrow.svg';

const TweetsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState('show all');

    const handleGoBack = () => {
        if (location.state) {
            navigate(location.state.from);
        } else {
            navigate('/');
        }
    }

    const handleFilterChange = (selectedValue) => {
        setSelectedFilter(selectedValue);
    };

    return (
        <div>
            <div className={css.btnWrapper}>
                <button className={css.button} onClick={handleGoBack}>
                    <img src={arrow} alt="arrow" width="15" />
                    Go back
                </button>
                <FilterDropdown onChange={handleFilterChange} />
            </div>
            <Users filter={selectedFilter} />
        </div>
    )
}

export default TweetsPage;