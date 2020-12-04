import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommandWrapper, RecommandItem } from '../style';

class Recommand extends Component {
  render() {
    const { list } = this.props;
    return(
      <RecommandWrapper>
        {
          list.map(item => (
            <RecommandItem key={item.get('id')} imgUrl={item.get('url')}></RecommandItem>
          ))
        }
      </RecommandWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommand'])
});

export default connect(mapState, null)(Recommand);