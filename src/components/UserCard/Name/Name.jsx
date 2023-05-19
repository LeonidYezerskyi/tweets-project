import PropTypes from "prop-types";
import css from "./Name.module.css";

const Name = ({ user }) => {
    return (
        <p className={css.name}>{user}</p>
    )
}

Name.propTypes = {
    user: PropTypes.string.isRequired,
};

export default Name