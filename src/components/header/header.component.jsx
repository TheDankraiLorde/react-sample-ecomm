import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'
import CartIcon from '../cart/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser, hidden, sos}) => (
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
                    sos
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

const mdtp = (dispatch) => ({
    sos: () => dispatch(signOutStart())
})

export default connect(mstp,mdtp)(Header);