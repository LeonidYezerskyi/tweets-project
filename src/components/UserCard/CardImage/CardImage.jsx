import css from "./CardImage.module.css"
import cardImg from "../../../assets/CardImg.png"

const CardImage = () => {
    return (
        <img className={css.img} src={cardImg} alt="cardImg" />
    )
}

export default CardImage