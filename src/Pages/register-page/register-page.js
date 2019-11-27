import './register-page.css';

import React from 'react';
import {Redirect} from 'react-router-dom';
import fire from './../../config/Fire.js';
import Register from './../../Components/register/register.js';

class RegisterPage extends React.Component {
    constructor() {
        super();
        this.state = ({
          user: null,
        });
        this.authListener = this.authListener.bind(this);
      }
    
      componentDidMount() {
        this.authListener();
      }
    
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
            this.props.login(user);
            localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null });
            this.props.logout();
            localStorage.removeItem('user');
          }
        });
      }

    render() {
        return(
            <div className='register-page'>
              <div>
                {this.state.user ? (<Redirect to='/home' />) : (<Register />)}
                </div>
            </div>
        );
    }
}

export default RegisterPage;