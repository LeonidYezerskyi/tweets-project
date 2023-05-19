import PropTypes from "prop-types";

import Avatar from "./Avatar/Avatar"
import CardImage from "./CardImage/CardImage"
import FollowerCount from "./FollowerCount/FollowerCount"
import Logo from "./Logo/Logo"
import TweetCount from "./TweetCount/TweetCount"
import css from "./UserCard.module.css"

const UserCard = ({ user, tweets, followers, src, id }) => {
    return (
        <li key={id}>
            <section className={css.container}>
                <Logo />
                <CardImage />
                <Avatar src={src} />
                <TweetCount tweets={tweets} />
                <FollowerCount followers={followers} id={id} />
            </section>
        </li>
    )
}

UserCard.propTypes = {
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default UserCard