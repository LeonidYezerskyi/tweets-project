import css from "./TweetCount.module.css"
const TweetCount = ({ tweets }) => {
    return (
        <p className={css.tweetInfo}>{tweets} tweets</p>
    )
}

export default TweetCount