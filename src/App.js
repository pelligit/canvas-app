import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ButtonClick from './component/ButtonClick';
import List from './component/List';
import listData from './data/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          canvas things
        </header>
        <ButtonClick />
        <List data={listData.nav}/>

        <List data={listData.intro}/>

        <List data={listData.tutor} />

        <List data={listData.game} />
      </div>
    );
  }
}

export default App;
