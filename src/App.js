import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './Components/header/header.js';
import fire, { database } from './config/Fire.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegisterPage from './Pages/register-page/register-page.js';
import CreateDogPage from './Pages/create-dog-page/create-dog-page';
import MainPage from './Pages/main-page/main-page.js';
import DogPage from './Pages/dog-page/dog-page.js';
import AuthorizationPage from './Pages/authorization-page/authorization-page.js';

import {AuthDomain} from './DomainModels/auth';


class App extends React.Component {
  state = {
    user: null,
    isAdmin: false,
  }

  logout = () => {
    this.setState({ user: null });
    fire.auth().signOut();
    localStorage.removeItem('user');
  }

  login = (user) => {
    database.ref('users/' + user.uid).once('value').then((snap) => this.setState({ results: snap.val() }));
    this.setState({ user });
    const authDomain  = new AuthDomain(user.uid);
    user && authDomain.isAdmin().then(isAdmin => this.setState({isAdmin}));
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Header logout={this.logout} isLoggedin={Boolean(this.state.user)} isAdmin={this.state.isAdmin}/>
          <Route path='/main' render={() => <MainPage isAdmin={this.state.isAdmin} />} />

          <Route path='/create-dog'
            render={() =>
              <CreateDogPage user={this.state.user} /> 
            }
          />
          <Route path='/register' render={() => <RegisterPage login={this.login} logout={this.logout} />} />
          <Route path='/auth'
            render={() => <AuthorizationPage login={this.login} logout={this.logout} />}
          />
          <Route
            path='/dog/:id'
            render={(props) => <DogPage id={props.match.params.id}
            />
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
