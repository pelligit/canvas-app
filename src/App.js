import React, { Component } from 'react';
import './App.css';
import ButtonClick from './component/ButtonClick';
import List from './component/List';
import listData from './data/nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonClick />
        <List data={listData.nav}/>
      </div>
    );
  }
}

export default App;
