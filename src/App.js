import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store/index';
import Header from './common/header/index';
import Home from './pages/home';
import login from './pages/login';
import Detail from './pages/detail/loadable';
import Write from './pages/write';

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={login}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/write' exact component={Write}></Route>
      </BrowserRouter>
    </Provider>
  )
};

export default App;