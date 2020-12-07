import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component {
  render() {
    const { list, loadMoreArticle } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            <ListItem key={index}>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
              <img className='pic' src={item.get('url')} alt='pic' />
            </ListItem>
          ))
        }
        <LoadMore onClick={loadMoreArticle}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
});

const mapDispatch = (dispatch) => ({
  loadMoreArticle() {
    dispatch(actionCreators.getMoreArticle());
  }
});

export default connect(mapState, mapDispatch)(List);