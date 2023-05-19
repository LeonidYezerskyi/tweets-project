import { useLocation, useNavigate } from 'react-router-dom';


import Users from "../../components/Users/Users"
import css from "./TweetsPage.module.css"
import arrow from '../../assets/arrow.svg';

const TweetsPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {


        if (location.state) {
            navigate(location.state.from);
            return;
        }
        navigate('/');
    }

    return (
        <div>
            <button className={css.button} onClick={handleGoBack}>
                <img src={arrow} alt="arrow" width="15" />
                Go back
            </button>
            <Users />
        </div>
    )
}

export default TweetsPage