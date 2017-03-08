import React from 'react';
import {Link} from 'react-router';
import {LOGO_PATH} from '../constants/mediaConsts';
import Logo from './Logo';
import LoginForm from './LoginForm';

var LoginPage = React.createClass({
  getInitialState: function (){
    return {
      loginInfo: { id: '', userName: '', password: ''}
    };
  },
  setLoginState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.loginInfo[field] = value;
    return this.setState({loginInfo: this.state.loginInfo});
  },
  render: function (){
    return (
        <div>
        {/*<img className="login-logo" src={LOGO_PATH} />*/}
        <Logo className="login-logo" />
        <h1>Cloud Mind</h1>
        <LoginForm loginInfo={this.state.loginInfo}/>
        <br/>
        <Link to="./forgot-password">Forgot Password?</Link>
        <br/>
        <Link to="./sign-up">Sign up</Link>
        </div>
    );
  }
});

export default LoginPage;
