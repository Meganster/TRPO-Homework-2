import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';

class Header extends React.Component {

    render() {
        const { isLoggedin, logout, isAdmin } = this.props;
        return (
            <div className='header'>
                <div className='logo'>
                    <Link to='/main'>
                        <div className='project-name'>ProjectZero</div>
                    </Link>
                </div>
                <div className='register'>
                    <Link to={'/create-dog'} className='btn-lk'>
                        {isLoggedin && isAdmin ? <Button text={'ДОБАВИТЬ ПИТОМЦА'} type='red' /> : null}
                    </Link>
                    <Link to={isLoggedin ? '/' : '/auth'}>
                        <Button text={isLoggedin ? 'ВЫЙТИ' : 'ВОЙТИ'} type='red' onClick={isLoggedin ? logout : () => { }} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;