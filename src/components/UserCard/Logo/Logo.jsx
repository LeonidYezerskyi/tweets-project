import css from "./Logo.module.css"
import logo from "../../../assets/Logo.png"

const Logo = () => {
    return (
        <img className={css.logo} src={logo} alt="logo" width="76" />
    )
}

export default Logo