import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import './App.css';
import ButtonClick from './component/ButtonClick';
import List from './component/List';
import Canvas from './component/Canvas';
import listData from './data/nav';
import Clock from './component/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          canvas things
        </header>

        <Clock />

        <ButtonClick />
        <List data={listData.nav}/>

        <List data={listData.intro}/>

        <List data={listData.tutor} />

        <List data={listData.game} />

        <Canvas />
      </div>
    );
  }
}

export default App;
