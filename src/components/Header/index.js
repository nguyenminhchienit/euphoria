import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../images/logo.svg'
import Heart from '../../images/heart.svg'
import User from '../../images/user.svg'
import Cart from '../../images/cart.svg'
import { FaSearch } from "react-icons/fa";


const cx = classNames.bind(styles);
function Header() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')}>
                    <img src={Logo} alt='logo'></img>
                </Link>

                <ul className={cx('nav')}>
                    <Link className={cx('nav-item')}>Shop</Link>
                    <Link className={cx('nav-item')}>Men</Link>
                    <Link className={cx('nav-item')}>Women</Link>
                    <Link className={cx('nav-item')}>Combos</Link>
                    <Link className={cx('nav-item')}>Joggers</Link>
                </ul>

                <div className={cx('search-wrap')}>
                    <FaSearch className={cx('search-icon')}/>
                    <input className={cx('search-input')} type='text' placeholder='Search ... '/>
                </div>

                <div className={cx('action')}>
                    <img className={cx('action-icon')} src={Heart} alt='heart'></img>
                    <img className={cx('action-icon')} src={User} alt='user'></img>
                    <img className={cx('action-icon')} src={Cart} alt='cart'></img>
                </div>
            </div>
        </div>
     );
}

export default Header;