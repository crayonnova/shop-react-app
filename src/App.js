import React from 'react';
import {Route, Switch} from 'react-router-dom';
//Switch is used to wrap the link and able run one route at a time
//Link is used to replace <a> tage with  to='route' 
import HomePage from './pages/home-page/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utils'


const NotFound = (props) => {
return (
  <h1>404 Not found!</h1>
  )
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() { 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({currentUser : user })
      
      createUserProfileDocument(user)
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  
  return (<div> 
        <Header currentUser={this.state.currentUser }/>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/account" component={SignInAndSignUp} />
              <Route exact component={NotFound} />
          </Switch>
          </div>)
}
}

export default App;
