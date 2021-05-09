import React from 'react';
import styled from 'styled-components';

/*const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`*/
const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const ContainerMensagem = styled.div`
    display: flex;
    flex-direction: column;
margin: auto;
height: 100vh;
border: 1px solid;
box-sizing: border-box;
width: 45%;flex-direction: column;
margin: auto;
height: 100vh;
border: 1px solid;
box-sizing: border-box;
width: 45%;
`
const NomeInput = styled.input`
    width:30%;
`
const MensagemInput = styled.input`
    width:70%;
`

export class InputMessage extends React.Component {
    state = {
        nome: "",
        mensagem: [],
        mensagemUsuario: ""
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value });
    };

    onChangemensagemUsuario = (event) => {
        this.setState({ mensagemUsuario: event.target.value });
    };

    onClickAdiciona = () => {

        const nomeMensagem = {

            nome: this.state.nome,
            mensagem: this.state.mensagemUsuario
        };
    }


    render() {
        return (
            //<AppContainer>
            <ContainerMensagem>
                <NomeInput type="text" onChange={this.onChangeNome} value={this.state.nome} placeholder={"Nome Usuario"} />
                <MensagemInput type="text" onChange={this.onChangeMensagem} value={this.state.mensagem} placeholder={"Mensagem"} />
                <button onClick={this.onClickAdiciona}>Enviar</button>
            </ContainerMensagem>
            //</AppContainer>
        );
    }
}