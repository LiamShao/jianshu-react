import React, { Component } from 'react';
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
        <SearchInfoSwith onClick={() => changePage(page, totalPage)}>换一批</SearchInfoSwith>
        </SearchInfoTitle>
        <SearchInfoList>{shouldShow}</SearchInfoList>
      </SearchInfo>
    );
  }

  render() {
    const { focus, handleInputFocus, handleInputBlur } = this.props;
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
    handleInputFocus() {
      dispatch(actionCreators.focusOn());
      dispatch(actionCreators.getTrend());
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

    changePage(page, totalPage) {
      console.log('????', page, totalPage);
      const nextPage = page === totalPage ? 1 : page + 1;
      dispatch(actionCreators.changePage(nextPage));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);