import PropTypes from "prop-types";

import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = ({ onClick }) => {
    return (
        <button onClick={onClick} className={css.loardMoreBtn} type="button">Load more</button>
    )
};

ButtonLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default ButtonLoadMore;