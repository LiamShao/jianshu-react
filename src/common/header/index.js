import React from 'react';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem,
  NavSearch,
  Addition,
  Button
 } from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavSearch></NavSearch>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>Aa</NavItem>
      </Nav>
      <Addition>
        <Button className='write'>写文章</Button>
        <Button className='register'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
};

export default Header;