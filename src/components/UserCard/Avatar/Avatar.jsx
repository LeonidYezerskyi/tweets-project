import avatar from "../../../assets/Avatar.png"
import css from "./Avatar.module.css"

const Avatar = () => {
    return (
        <div className={css.avatarWrapper}>
            <div className={css.line}></div>
            <div className={css.avatarContainer}>
                <img className={css.avatarImg} src={avatar} alt="avatar" />
            </div>
            <div className={css.line}></div>
        </div>
    )
}

export default Avatar