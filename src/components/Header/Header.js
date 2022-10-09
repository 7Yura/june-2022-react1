import css from './Header.module.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    return (
        <div>
            <div className={css.Header}>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'users'}>Users</Link></div>
                <div><Link to={'posts'}>Posts</Link></div>
                {currentUser&&currentUser.name}
            </div>

        </div>

    );
};

export {Header};