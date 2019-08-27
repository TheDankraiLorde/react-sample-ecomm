import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from 'firebase'
import {connect} from 'react-redux'
import CartIcon from '../cart/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink className="option" to="/contacts">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                (<OptionDiv onClick={
                    () => auth().signOut()
                 }>
                    Sign Out!
                </OptionDiv>):
                (<OptionLink to='/sign'>Sign In</OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :<CartDropDown/>
        }
    </HeaderContainer>
)

const mstp = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mstp)(Header);