//rafce
import React from 'react'
import { auth } from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {connect} from 'react-redux';

import './header.style.scss'
const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
           {
            currentUser ?
                <p> { currentUser.email }</p>  : null
        }
            </Link>
            
            <div className="options">
                <Link className='option' to="/shop">shop</Link>
                <Link className='option' to="/shop">contact</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={ () => auth.signOut()}> sign out </div> :
                    <Link className='option' to='/account'>Sign in</Link>
                }
                 
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);
