import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import axios from 'axios';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [1, 2, 3]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
  }

  // 组件即将被挂载到页面
  // componentWillMount() {
  // }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 10 }}>
        {/* <label htmlFor='inputArea'>输入内容:</label>
          <input
            id='inputArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>submit</button> */}
        <Input placeholder='input here' style={{ width: 300, marginRight: 10 }} />
        <Button type='primary'>提交</Button>
        <List
          bordered
          style={{ marginTop: 10, width: 300 }}
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  // 组件已经被挂载到页面
  // 初始化数据请求最好放在这个钩子中
  componentDidMount() {
    axios.get('/api/todolist')
      .then(res => {
        console.log(res.data);
        this.setState(() => ({
          list: [...res.data]
        }));
      })
      .catch(e => {
        console.log(e);
      });
  }

  // // 页面更新前
  // shouldComponentUpdate() {
  //   // false 不更新页面
  //   return true;
  // }

  // // 在 shouldComponentUpdate 返回 true 之后调用，false 则不继续
  // componentWillUpdate() {
  // }

  // // 组件更新完成后执行
  // componentDidUpdate() {
  // }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          delItem={this.handleItemDel}
        />
      )
    })
  }

  handleInputChange(e) {
    const val = e.target.value;
    this.setState(() => ({
      inputValue: val
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDel(index) {
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
