import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from 'firebase'
import {connect} from 'react-redux'
import CartIcon from '../cart/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? 
                (<div className="option" onClick={
                    () => auth().signOut()
                 }>
                    Sign Out!
                </div>):
                (<Link className='option' to='/sign'>Sign In</Link>)
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :<CartDropDown/>
        }
    </div>
)

const mstp = ({user: { currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mstp)(Header);