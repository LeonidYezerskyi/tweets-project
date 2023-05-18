import cardImg from "../../../assets/CardImg.png"
import css from "./CardImage.module.css"

const CardImage = () => {
    return (
        <img className={css.img} src={cardImg} alt="cardImg" />
    )
}

export default CardImage