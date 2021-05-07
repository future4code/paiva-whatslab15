import React from 'react';
import './App.css';
import styled from 'styled-components';
import { InputMessage } from './components/inputMessage.js';


class App extends React.Component {
  render(){
  return(
    <div>
    <InputMessage />
    </div>
  );
  }
}

export default App;
