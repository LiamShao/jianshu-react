import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  
  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>
            <i className='iconfont'>&#xe60c;</i>
            首页
        </NavItem>
          <NavItem className='left'>
            <i className='iconfont'>&#xe61a;</i>
            下载APP
        </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focus}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={this.state.focus ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.state.focus ? 'focused iconfont' : 'iconfont'}>&#xe60a;</i>
          </SearchWrapper>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className='write'>
            <i className='iconfont'>&#xe708;</i>
            写文章
        </Button>
          <Button className='register'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState({
      focus: true
    });
  }

  handleInputBlur() {
    this.setState({
      focus: false
    });
  }
};

export default Header;