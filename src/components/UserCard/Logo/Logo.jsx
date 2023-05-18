import logo from "../../../assets/Logo.png"

import css from "./Logo.module.css"

const Logo = () => {
    return (
        <img className={css.logo} src={logo} alt="logo" width="76" />
    )
}

export default Logo