import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends Component {
  render() {
    return(
      <WriterWrapper>
        <WriterItem></WriterItem>
      </WriterWrapper>
    )
  }
}

export default Writer;