import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import FollowButton from '../FollowButton/FollowButton';
import css from './FollowerCount.module.css';

const FollowerCount = ({ followers, id, followingList, setFollowingList }) => {

    const initialFollowerCount = useMemo(() => {
        const storedFollowerCount = JSON.parse(localStorage.getItem(`followerCount_${id}`));
        return storedFollowerCount !== null ? storedFollowerCount : followers;
    }, [id, followers]);

    const [followerCount, setFollowerCount] = useState(initialFollowerCount);

    const addToFollowing = (cardId) => {
        const updatedList = [...followingList, cardId];
        setFollowingList(updatedList);
        localStorage.setItem('following', JSON.stringify(updatedList));
    };

    const removeFromFollowing = (cardId) => {
        const updatedList = followingList.filter((id) => id !== cardId);
        setFollowingList(updatedList);
        localStorage.setItem('following', JSON.stringify(updatedList));
    };

    const handleButtonClick = (isFollowing) => {
        if (isFollowing === true) {
            setFollowerCount((prevCount) => prevCount + 1);
            addToFollowing(id);
        } else {
            setFollowerCount((prevCount) => prevCount - 1);
            removeFromFollowing(id);
        }
    };

    useEffect(() => {
        localStorage.setItem(`followerCount_${id}`, JSON.stringify(followerCount));
    }, [id, followerCount]);

    const formattedFollowerCount = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(followerCount);

    return (
        <>
            <p className={css.followerInfo}>{formattedFollowerCount} followers</p>
            <FollowButton value={followingList} id={id} handleButtonClick={handleButtonClick} />
        </>
    );
};

FollowerCount.propTypes = {
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    followingList: PropTypes.array.isRequired,
    setFollowingList: PropTypes.func.isRequired,
};

export default FollowerCount;