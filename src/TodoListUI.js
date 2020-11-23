import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: 10, marginLeft: 10 }}>
      <Input
        placeholder='input here'
        style={{ width: 300, marginRight: 10 }}
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type='primary' onClick={props.handleBtnClick}>提交</Button>
      <List
        bordered
        style={{ marginTop: 10, width: 300 }}
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.handleItemDel(index) }}>{item}</List.Item>
        )}
      />
    </div>
  )
};

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: 10, marginLeft: 10 }}>
//         <Input
//           placeholder='input here'
//           style={{ width: 300, marginRight: 10 }}
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type='primary' onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           bordered
//           style={{ marginTop: 10, width: 300 }}
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => { this.props.handleItemDel(index) }}>{item}</List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI;