import { useLocation, useNavigate } from 'react-router-dom';
import css from "./ButtonGoBack.module.css";
import arrow from '../../../assets/arrow.svg';

const ButtonGoBack = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (location.state) {
            navigate(location.state.from);
        } else {
            navigate('/');
        }
    }

    return (
        <button className={css.button} onClick={handleGoBack} type='button'>
            <img src={arrow} alt="arrow" width="15" />
            Go back
        </button>
    )
}

export default ButtonGoBack