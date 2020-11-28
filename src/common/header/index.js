import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwith,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

const showAdvice = (show) => {
  if (!show) return;
  return (
    <SearchInfo>
      <SearchInfoTitle>
        热门搜索
      <SearchInfoSwith>换一批</SearchInfoSwith>
      </SearchInfoTitle>
      <SearchInfoList>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
      </SearchInfoList>
    </SearchInfo>
  );
}

const Header = (props) => {
  const { focus, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='left active'>
          <i className='iconfont'>&#xe60c;</i>首页
        </NavItem>
        <NavItem className='left'>
          <i className='iconfont'>&#xe61a;</i>下载APP
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focus}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={focus ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i className={focus ? 'focused iconfont' : 'iconfont'}>&#xe60a;</i>
          {showAdvice(focus)}
        </SearchWrapper>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
      </Nav>
      <Addition>
        <Button className='write'>
          <i className='iconfont'>&#xe708;</i>写文章
        </Button>
        <Button className='register'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.focusOn());
    },
    handleInputBlur() {
      dispatch(actionCreators.focusBlur())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);