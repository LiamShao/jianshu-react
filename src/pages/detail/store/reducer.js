import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '我是标题',
  htmlContent: `
  <img src='https://upload-images.jianshu.io/upload_images/4872563-77d88d91276d180e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' alt='' />
  <p>
    <b>加粗加粗加粗</b>
    aaaaaaaa
  </p>
  <p>
    bbbbbbbb
  </p>`
});

// reducer 可以接收state但是不能修改
// 必须是纯函数: 固定输入，固定输出，不能有副作用
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};