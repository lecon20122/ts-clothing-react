import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import firebase, { auth } from '../../firebase/firebase.util';
import './header.styles.scss';
export interface IHeaderProps {
    currentUser: firebase.User | null;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div onClick={() => auth.signOut()} className="option">
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/login">
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
