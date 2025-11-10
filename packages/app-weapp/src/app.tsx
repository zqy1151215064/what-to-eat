import { Component, PropsWithChildren } from 'react';
import './app.scss';

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    console.log('WhatToEat WeChat Mini Program Started');
  }

  render() {
    return this.props.children;
  }
}

export default App;
