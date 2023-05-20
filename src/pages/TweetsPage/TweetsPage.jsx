import { useState } from 'react'
import css from "./TweetsPage.module.css"
import Users from "../../components/Users/Users"
import FilterDropdown from "../../components/Users/FilterDropdown/FilterDropdown"
import ButtonGoBack from '../../components/Users/ButtonGoBack/ButtonGoBack'

const TweetsPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('show all');

    const handleFilterChange = (selectedValue) => {
        setSelectedFilter(selectedValue);
    };

    return (
        <div >
            <div className={css.btnWrapper}>
                <ButtonGoBack />
                <FilterDropdown onChange={handleFilterChange} />
            </div>
            <Users filter={selectedFilter} />
        </div>
    )
}

export default TweetsPage;