import React from 'react';
import './App.css';
import styled from 'styled-components';
import { InputMessage } from './components/inputMessage.js';


class App extends React.Component {
  render(){
  return(
    <div>
    <h1>Teste</h1>
    <InputMessage />
    </div>
  );
  }
}

export default App;
