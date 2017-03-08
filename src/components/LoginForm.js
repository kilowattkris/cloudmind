import React from 'react';
import {Link} from 'react-router';

const LoginForm = () => {
  return (
    <form>
        <label htmlFor="userName">Username</label>
        <input type="text"
            name="userName"
            className="login-form-username"
            placeholder="Username"
            ref="userName"
            value={this.props.loginInfo.userName} />
        <br/>

        <label htmlFor="password">Password</label>
        <input type="text"
            name="password"
            className="login-form-password"
            placeholder="Password"
            ref="password"
            value={this.props.loginInfo.password}  />
        <br/>

        <input type="submit" value="Login" className="cm-btn-default" />
    </form>
  );
};

export default LoginForm;
