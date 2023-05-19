import PropTypes from "prop-types";

// import avatar from "../../../assets/Avatar.png"
import css from "./Avatar.module.css"

const Avatar = ({ src }) => {
    return (
        <div className={css.avatarWrapper}>
            <div className={css.line}></div>
            <div className={css.avatarContainer}>
                <img className={css.avatarImg} src={src} alt="avatar" />
            </div>
            <div className={css.line}></div>
        </div>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
};

export default Avatar