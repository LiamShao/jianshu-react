import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '运动健身',
    url: '//upload-images.jianshu.io/upload_images/12708103-51840b198268c703.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/510/format/webp'
  }, {
    id: 2,
    title: '手绘',
    url: '//upload-images.jianshu.io/upload_images/12708103-51840b198268c703.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/510/format/webp'
  }, {
    id: 3,
    title: '电子音乐',
    url: '//upload-images.jianshu.io/upload_images/12708103-51840b198268c703.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/510/format/webp'
  }]
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};