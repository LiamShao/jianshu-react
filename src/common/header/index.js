import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

class Header extends Component {
  showTrending(show) {
    const {
      trend,
      page,
      mouseIn,
      totalPage,
      changePage,
      handleMouseEnter,
      handleMouseLeave
    } = this.props;

    if (!show && !mouseIn) return;

    const arr = trend.toJS();
    let shouldShow = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (arr[i]) shouldShow.push(<SearchInfoItem key={i}>{arr[i]}</SearchInfoItem>);
    }
    return (
      <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
        <SearchInfoSwith onClick={() => changePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>换一批
        </SearchInfoSwith>
        </SearchInfoTitle>
        <SearchInfoList>{shouldShow}</SearchInfoList>
      </SearchInfo>
    );
  }

  render() {
    const { focus, trend, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo></Logo>
        </Link>
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
                onFocus={() => handleInputFocus(trend)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focus ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60a;</i>
            {this.showTrending(focus)}
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
  }
};

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    trend: state.getIn(['header', 'trend']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(trend) {
      // immutable 要用size取元素个数
      trend.size < 1 && dispatch(actionCreators.getTrend());
      dispatch(actionCreators.focusOn());
    },

    handleInputBlur() {
      dispatch(actionCreators.focusBlur());
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },

    changePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      originAngle = originAngle ? Number(originAngle) : 0;
      spin.style.transform = `rotate(${originAngle + 360}deg)`;

      const nextPage = page === totalPage ? 1 : page + 1;
      dispatch(actionCreators.changePage(nextPage));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);