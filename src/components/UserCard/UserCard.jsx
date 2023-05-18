import Avatar from "./Avatar/Avatar"
import CardImage from "./CardImage/CardImage"
import FollowButton from "./FollowButton/FollowButton"
import FollowerCount from "./FollowerCount/FollowerCount"
import Logo from "./Logo/Logo"
import TweetCount from "./TweetCount/TweetCount"
import css from "./UserCard.module.css"

const UserCard = () => {
    return (
        <section className={css.container}>
            <Logo />
            <CardImage />
            <Avatar />
            <TweetCount />
            <FollowerCount />
            <FollowButton />
        </section>
    )
}

export default UserCard