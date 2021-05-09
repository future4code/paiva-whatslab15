import React from 'react';
import './App.css';
import styled from 'styled-components';
//import bg from './src/bg.jpeg'

//import { InputMessage } from './components/inputMessage.js';
//export default () => <img src={bg.jpeg}/>

const HeaderVerde = styled.div`
  display: flex;
  justify-content: space-around;
  align-items:center;
  width: 37.5rem;
  height: 10%;
  background-color: #25D366;
  position:fixed;
  top:0;
  z-index:3;
  h1{
    font-size:2rem;
    color: white;
  }
  button {
    margin-left:-50px;
    border: none;
  }

  button:focus {
    margin-left:-50px;
    border: none;
    opacity:50%;
  }
  img{
    margin-right:-50px;
    border-radius:50%;
  }
`
const ContainerAreaMensagem = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  box-sizing: border-box;
  width: 37.5rem;
  box-shadow: 5px 5px 15px -5px #000000;
  background-image: url("https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25")
`
const AreaMensagem = styled.div`
  
  background-image: url("https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25")
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  max-width: 100%;
  height: 100vh;
  p {
    
    border-radius: 0.5rem;
    padding: 5px;
  }
`;
const AreaForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    width: 3rem; 
    margin-left:3em;  
    background-color:#89CFF0;
    border-radius:50%; 
  }
  img{
    width:1rem;
    height:3rem;
  }
`;
const InputMensagem = styled.input`
  flex: 1;
  border: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
  outline: none;

`;
const InputNome = styled.input`
  width: 6.25rem;
  border: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 3rem;
  outline: none;

`;


class App extends React.Component {
  state = {
    mensagens: [],
    nome: "",
    mensagemUsuario: ""
  };

  doubleClickDeletar = (msgParaDeletar, index) => {
    const listaMensagens = [...this.state.mensagens];

    const mensagensFiltradas = listaMensagens.filter((mensagem) => {
      return mensagem.mensagem !== msgParaDeletar;
    });

    this.setState({ mensagens: mensagensFiltradas });
    alert("A mensagem foi deletada!");
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onChangeMensagemUsuario = (event) => {
    this.setState({ mensagemUsuario: event.target.value });
  };

  enviarMensagem = (event) => {
    event.preventDefault();
    const novaMensagem = {
      nome: this.state.nome,
      mensagem: this.state.mensagemUsuario
    };

    const todasMensagens = [...this.state.mensagens, novaMensagem];
    this.setState({ mensagens: todasMensagens, mensagemUsuario: "" });
  };

  render() {
    return (
      <ContainerAreaMensagem>
        <HeaderVerde>
          <button><img src="https://www.flaticon.com/svg/vstatic/svg/271/271220.svg?token=exp=1620586064~hmac=e29f4627fd84b76dd8c203f15de95a1a" 
          alt="my image" onClick={this.myfunction} /></button>
          <h1>Conversas</h1>
          <img src="https://picsum.photos/50" alt="user"></img>
        </HeaderVerde>
        <AreaMensagem>
          {this.state.mensagens.map((mensagem, index) => {
            return (
              <p
                key={index}
                onDoubleClick={() =>
                  this.doubleClickDeletar(mensagem.mensagem, index)
                }
              >
                <strong>{mensagem.nome}</strong>: {mensagem.mensagem}
              </p>
            );
          })}
        </AreaMensagem>
        <AreaForm onSubmit={this.enviarMensagem}>
          <InputNome
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.onChangeNome}
          />
          <InputMensagem
            placeholder={"Mensagem"}
            value={this.state.mensagemUsuario}
            onChange={this.onChangeMensagemUsuario}
          />
          <button><img src="https://www.flaticon.com/svg/vstatic/svg/876/876777.svg?token=exp=1620586676~hmac=a1108d6a1b6580c77950bf3e6f05e0ce" 
          alt="mymyimage" onClick={this.enviarMensagem}/></button>
        </AreaForm>
      </ContainerAreaMensagem>
    );
  }
}
export default App;

