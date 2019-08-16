import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import Header from "./components/header/header.component"

import {auth,createUserProfileDoc} from './firebase/firebase.utils';

import {setCurUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'

import CheckOutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.css';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount()
  {
    const {setCurUser}=this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const uRef=await createUserProfileDoc(user)
        uRef.onSnapshot(snapshot => {
            setCurUser({
              id: snapshot.id,
              ...snapshot.data()
            })

        });
      }
      else {
        setCurUser(user)
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log("Unsubscribed!")
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path='/sign' render={() => 
              this.props.currentUser?
              (<Redirect to="/"/>):<SignPage/>}/>
          <Route exact path="/checkout" component={CheckOutPage}/>
        </Switch>
      </div>
    );
  }
}

const mstp = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mdtp = dispatch => ({
  setCurUser: user => dispatch(setCurUser(user))
})

export default connect(mstp,mdtp)(App);
