import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';


class Home extends Component {
  render() {
    return(
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
      </HomeWrapper>
    )
  }
}

export default Home;