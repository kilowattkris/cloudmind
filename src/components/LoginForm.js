import React from 'react';
import {Link} from 'react-router';

import CMInput from './CMInput';

import {ICON_PERSON} from '../constants/iconNames';
import {ICON_LOCK} from '../constants/iconNames';

var LoginForm = React.createClass({
  render: function(){
      return (
        <form>
            <CMInput
                label={ICON_PERSON}
                name="userName"
                className="form-input"
                placeholder="Username"
                onChange={this.props.onChange}
                value={this.props.loginInfo.userName} />
            <br/>
            <CMInput
                label={ICON_LOCK}
                name="password"
                className="form-input"
                placeholder="Password"
                onChange={this.props.onChange}
                value={this.props.loginInfo.password}  />
            <br/>
            <input type="submit" value="Login" className="cm-btn-default" onClick={this.props.onSubmit} />
        </form>
        );
    }
});

export default LoginForm;
