import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import css from "./FollowButton.module.css";

const FollowButton = ({ handleButtonClick }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const storedIsFollowing = JSON.parse(localStorage.getItem('isFollowing'));
        if (storedIsFollowing) {
            setIsFollowing(storedIsFollowing);
        }
    }, []);

    const onFollow = (e) => {
        e.preventDefault();
        setIsFollowing(!isFollowing)
        handleButtonClick(!isFollowing)
    }

    useEffect(() => {
        localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
    }, [isFollowing]);

    return (
        <button className={css.btn} style={{ background: isFollowing ? '#5CD3A8' : '#EBD8FF' }} type="button" onClick={onFollow}>
            {isFollowing ? 'Following' : 'Follow'}
        </button>
    )
}

FollowButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired,
};

export default FollowButton