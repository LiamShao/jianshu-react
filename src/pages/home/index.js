import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';

import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='//upload-images.jianshu.io/upload_images/12708103-51840b198268c703.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/510/format/webp' alt='a' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommand></Recommand>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>^</BackTop> : ''
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeBackTop);
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeBackTop);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreators.initHome());
  },
  changeBackTop(e) {
    const show = document.documentElement.scrollTop > 100 ? true : false;
    dispatch(actionCreators.showScrollButton(show));
  }
});

export default connect(mapState, mapDispatch)(Home);