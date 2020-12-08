import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends PureComponent {
  render() {
    const { list, loadMoreArticle } = this.props;
    /**
     * 动态路由 /detail/:id
     * 直接传参数 /detail?id=1
     */
    return (
      <div>
        {
          list.map((item, index) => (
            <Link to={`/detail/${item.get('id')}`} key={index}>
              <ListItem>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
                <img className='pic' src={item.get('url')} alt='pic' />
              </ListItem>
            </Link>
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