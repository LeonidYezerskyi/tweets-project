import { useState, useEffect } from 'react';

import FollowButton from "../FollowButton/FollowButton"
import css from "./FollowerCount.module.css"

const FollowerCount = ({ followers }) => {
    const [followerCount, setFollowerCount] = useState(100500);
    useEffect(() => {
        const followerCount = JSON.parse(localStorage.getItem('followerCount'));
        if (followerCount === 100501) {
            setFollowerCount(followerCount)
        }

    }, []);

    const handleButtonClick = (isFollowing) => {
        if (isFollowing) {
            setFollowerCount(prevCount => prevCount + 1)
        } else {
            setFollowerCount(prevCount => prevCount - 1)
        }
    }

    useEffect(() => {
        localStorage.setItem('followerCount', JSON.stringify(followerCount));
    }, [followerCount]);

    const formattedFollowerCount = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(followerCount);

    return (
        <>
            <p className={css.followerInfo}>{formattedFollowerCount} followers</p>
            <FollowButton handleButtonClick={handleButtonClick} />
        </>

    )
}

export default FollowerCount