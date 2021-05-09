import React from 'react';
import './App.css';
import styled from 'styled-components';
//import bg from './src/bg.jpeg'

//import { InputMessage } from './components/inputMessage.js';
//export default () => <img src={bg.jpeg}/>


const ContainerAreaMensagem = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  box-sizing: border-box;
  width: 37.5rem;
  box-shadow: 5px 5px 15px -5px #000000;
  background-color: yellowgreen


`;
const AreaMensagem = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  max-width: 50%;
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
    padding: 1rem;
    margin: 0 auto;
    background: transparent;
    border: 0;
    width: 3rem;
  }
`;
const InputMensagem = styled.input`
  flex: 1;
  border: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
  outline: none;
  //background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
`;
const InputNome = styled.input`
  width: 6.25rem;
  border: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 3rem;
  outline: none;
  //background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
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
          <button onClick={this.enviarMensagem}>Enviar</button>
        </AreaForm>
      </ContainerAreaMensagem>
    );
  }
}
export default App;

