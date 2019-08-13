import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from "./components/header/header.component"
import {auth,createUserProfileDoc} from './firebase/firebase.utils';
import {setCurUser} from './redux/user/user.actions'
import {connect} from 'react-redux'

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
        console.log(user)
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
          <Route path='/sign' component={SignPage}/>
        </Switch>
      </div>
    );
  }
}

const mdtp = dispatch => ({
  setCurUser: user => dispatch(setCurUser(user))
})

export default connect(null,mdtp)(App);
