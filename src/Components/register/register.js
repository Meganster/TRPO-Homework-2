import './register.css'

import React from 'react';
import Button from './../../Components/button/button.js';
import fire from '../../config/Fire.js';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      error: false,
      isPitomnik: false,
      number: '',
      adress: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
      })
      .catch((error) => {
        this.setState({ error });
      })
  }

  render() {
    return (
      <div className='registration'>
        <div className='registration-title'>Регистрация</div>
        <label className='vasha-pochta'>Ваша почта*:</label>
        <input
          value={this.state.email}
          onChange={this.handleChange}
          type='email'
          name='email'
          className='login'
          placeholder="Почта"
        />
        <label className='vash-parol'>Пароль*:</label>
        <input
          value={this.state.password}
          onChange={this.handleChange}
          type='password' name='password'
          className='password'
          placeholder='Пароль'
        />
        <Button onClick={this.signup} type='red' text='РЕГИСТРАЦИЯ' />
      </div>
    );
  }
}
export default Register;