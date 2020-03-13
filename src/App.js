import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
//Switch is used to wrap the link and able run one route at a time
//Link is used to replace <a> tage with  to='route' 
import './App.css';

// pages
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import Checkout from './pages/checkout/checkout.component'

// components
import Header from './components/header/header.component';

// authentication
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/UserSelect'

// redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const NotFound = (props) => {
return (
  <h1>404 Not found!</h1>
  )
}

class App extends React.Component {


  unsubscribeFromAuth = null;
  
  componentDidMount() { 
    
    
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.count('Auth watcher')
      // console.log('auth change work!',userAuth)
     if(userAuth){
      // console.log('there is auth')
       const userRef = await createUserProfileDocument(userAuth);
        
        
      userRef.onSnapshot(snapShot => {

        setCurrentUser({
          id : snapShot.id,
          ...snapShot.data()
        });
      })
     }

     setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    
  return (<div> 
        <Header/>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/checkout" component={Checkout} />
              <Route exact path="/account" render={ () => this.props.currentUser? (<Redirect to='/'/>) : (<SignInAndSignUp />) } />
              <Route exact component={NotFound} />

          </Switch>
          </div>)
}
}
const mapStateToProps = (state) =>{
  return {
    currentUser : selectCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
