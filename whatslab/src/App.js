import React from 'react';
import './App.css';
import styled from 'styled-components';

const HeaderVerde = styled.div`
  display: flex;
  justify-content: space-around;
  align-items:center;
  width: 37.5rem;
  height: 10%;
  background-color: #25D366;
  position:fixed;
  top:0;
  z-index:4;
  h1{
    font-size:2rem;
    color: white;
  }
  button {
    margin-left:-50px;
    border: none;
  }
  button:focus {
    margin-left:-25px;
    border: none;
    opacity:50%;
  }
  img{
    margin-right:-50px;
    border-radius:50%;
  }
`
const AppContainer = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  box-sizing: border-box;
  width: 37.5rem;
  box-shadow: 5px 5px 15px -5px #000000;
  background-color: #D3D3D3;
  background-image: url("https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25")
`;

const AreaMensagem = styled.div`
  background-image: url("https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25")
  background-color: #D3D3D3;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  max-width: 100%;
  height: 100vh;
  p {
    
    border-radius: 0.5rem;
    padding: 5px;
  }
`;

const textFormulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
 
  button {
    border:1px solid #25692A;
    border-radius:4px;
    display:inline-block;
    cursor:pointer;
    font-family:Verdana;
    font-weight:bold;
    font-size:13px;
    padding:6px 10px;
    text-decoration:none;
}`;

const InputMensagem = styled.input`
  flex: 1;
  border: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 2rem;
  outline: none;
`;
const InputNome = styled.input`
    border: 0;
    width: 9.50rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-left: 3rem;
  outline: none;
`;


class App extends React.Component {
  state = {
    mensagens: [],
    nome: "",
    mensagemUsuario: ""
  };
  // deleta a mensagem na area de texto
  ClickDelete = (msgParaDeletar, index) => {
    const listaMensagens = [...this.state.mensagens];

    const mensagensFiltradas = listaMensagens.filter((mensagem) => {
      return mensagem.mensagem !== msgParaDeletar;
    });

    this.setState({ mensagens: mensagensFiltradas });
    alert("Mensagem deletada!");
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onChangeMensagemUsuario = (event) => {
    this.setState({ mensagemUsuario: event.target.value });
  };

  sendMessage = (event) => {
    event.preventDefault();
    const novaMensagem = {
      nome: this.state.nome,
      mensagem: this.state.mensagemUsuario
    };
// spread do novo array com o atual
    const todasMensagens = [...this.state.mensagens, novaMensagem];
    this.setState({ mensagens: todasMensagens, mensagemUsuario: "" });
  };

  render() {
    return (
      <AppContainer>
        <HeaderVerde>
          
          <h1>Conversas</h1>
          <img src="https://picsum.photos/50" alt="user"></img>
        </HeaderVerde>

        <AreaMensagem>
          {this.state.mensagens.map((mensagem, index) => {
            return (
              <p
                key={index}
                onDoubleClick={() =>
                  this.ClickDelete(mensagem.mensagem, index)
                }
              >
                <strong>{mensagem.nome}</strong>: {mensagem.mensagem}
              </p>
            );
          })}
        </AreaMensagem>

        <textFormulario onSubmit={this.sendMessage}>
          <InputNome
            placeholder={"Nome"}
            onChange={this.onChangeNome}
            value={this.state.nome}

          />
          <InputMensagem
            placeholder={"Mensagem"}
            value={this.state.mensagemUsuario}
            onChange={this.onChangeMensagemUsuario}
          />
          <button onClick={this.sendMessage}>Enviar</button>
        </textFormulario>
      </AppContainer>
    );
  }
}
export default App;