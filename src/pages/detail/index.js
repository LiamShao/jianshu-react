import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { DetailWrapper, Title, Content } from './style';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Title>{this.props.title}</Title>
        <Content dangerouslySetInnerHTML={{__html: this.props.htmlContent}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    // 获取动态路由携带的参数
    console.log(this.props.match.params);
    // this.props.location.search
  }
};

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  htmlContent: state.getIn(['detail', 'htmlContent']),
});

export default connect(mapState, null)(withRouter(Detail));