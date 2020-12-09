import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { actionCreators } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder='account'
              ref={(input) => { this.account = input }}
            />
            <Input
              type='password'
              placeholder='password'
              ref={(input) => { this.password = input }}
            />
            <Button onClick={() => this.props.login(this.account, this.password)}>sign in</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'></Redirect>
    }
  }
};

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accountDom, passDom) {
    dispatch(actionCreators.login(accountDom.value, passDom.value))
  }
});

export default connect(mapState, mapDispatch)(Login);