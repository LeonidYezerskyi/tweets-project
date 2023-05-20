import PropTypes from "prop-types";
import css from "./TweetCount.module.css"

const TweetCount = ({ tweets }) => {
    return (
        <p className={css.tweetInfo}>{tweets} tweets</p>
    )
}

TweetCount.propTypes = {
    tweets: PropTypes.number.isRequired,
};

export default TweetCount