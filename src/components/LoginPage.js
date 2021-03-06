import React from 'react';
import {Link} from 'react-router';
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
  loginUser: function(event){
      event.preventDefault();
  },
  render: function (){
    return (
        <div>
        {/*<img className="login-logo" src={LOGO_PATH} />*/}
        <Logo className="login-logo" />
        <h1>Cloud Mind</h1>
        <LoginForm loginInfo={this.state.loginInfo} onChange={this.setLoginState} onSubmit={this.loginUser}/>
        <br/>
        <Link to="./forgot-password">Forgot Password?</Link>
        <br/>
        <Link to="./sign-up">Sign up</Link>
        </div>
    );
  }
});

export default LoginPage;
