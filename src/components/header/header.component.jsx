//rafce
import React from 'react'
import { auth } from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {connect} from 'react-redux';
import ShoppingCart from './../cart/cart'
import CardDropdown from './../card-dropdown/card-dropdown.comp'
import './header.style.scss'
const Header = ({currentUser, isHidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            {
            currentUser ?
                <p> { currentUser.email }</p>  
                :
                 null
            }
            </Link>
            
            <div className="options">
                <Link className='option' to="/shop">shop</Link>
                <Link className='option' to="/shop">contact</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={ () => auth.signOut()}> sign out </div> 
                    :
                    <Link className='option' to='/account'>Sign in</Link>
                }
                 <ShoppingCart /> 
            </div>
            { isHidden? null : <CardDropdown/> }
            
        </div>
    )
}

const mapStateToProps = state =>{ 
    console.log(state) 
    return {
    currentUser     : state.user.currentUser,
    isHidden        : state.cart.isHidden
    }
}

// destructure in parameter
    // const mapStateToProps = ( { user : {currentUser}, cart : {isHidden} }) =>{ 
        
    //     return {
    //     currentUser,
    //     isHidden
    //     }
    // }


export default connect(mapStateToProps,null)(Header);
