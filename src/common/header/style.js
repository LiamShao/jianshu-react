import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 80px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #888;
      color: white
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  :focus {
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
  width: 160px;
  height: 38px;
  color: #666;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  border-radius: 19px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  &.focused {
    width: 250px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: white;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 14px;
  color: #888;
`

export const SearchInfoSwith = styled.span`
  float: right;
  font-size: 14px;
  color: #888;
  cursor: pointer;
  .spin {
    display:  block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  color: #888;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.register {
    color: #ec6149;
  }
  &.write {
    color: white;
    background: #ec6149;
  }
`