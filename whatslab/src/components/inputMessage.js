import React from 'react';
import styled from 'styled-components';

const ContainerMensagem = styled.div`
    display: flex;
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
        mensagem: ""
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ mensagem: event.target.value })
    }

    onClickAdiciona = () => {

        const nomeMensagem = {
            nome: this.state.nome,
            mensagem: this.state.mensagem
        }
        this.setState({state: nomeMensagem})
        this.setState({mensagem:""})   
        console.log(nomeMensagem)   
        }
    

    render() {
        return (
            <ContainerMensagem>
                <NomeInput type="text" onChange={this.onChangeNome} value={this.state.nome} placeholder={"Nome Usuario"} />
                <MensagemInput type="text" onChange={this.onChangeMensagem} value={this.state.mensagem} placeholder={"Mensagem"} />
                <button onClick={this.onClickAdiciona}>Enviar</button>
            </ContainerMensagem>
        );
    }
}