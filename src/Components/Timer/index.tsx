import React, { Component } from 'react';
import {Container, ViewOp, Button, ButtonUp,ButtonDown, ViewText, NumberText } from "./styles"

interface State {
  number: number;
}



class Timer extends Component<{}, State> {

  private increaseTimeout: NodeJS.Timeout | null = null;
  private delayTimeout: NodeJS.Timeout | null = null;
  private delayDuration = 500; // Tempo de atraso em milissegundos (1 segundo)


  constructor(props: {}) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increaseHours = () => {
    this.setState((prevState) => ({
      number: prevState.number < 23 ? prevState.number + 1 : 0,

    }));
  };

  decreaseHours = () => {
    this.setState((prevState) => ({
      number: prevState.number > 0 ? prevState.number - 1 : 23,
    }));
  };

  handlePressIn = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.increaseHours();
      }, 150); // Intervalo de aumento
    }, this.delayDuration);
  };
  handlePressDes = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.decreaseHours();
      }, 150); // Intervalo de aumento
    }, this.delayDuration);
  };

  handlePressOut = () => {
    // Limpar os timeouts ao soltar o botão
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
      this.delayTimeout = null;
    }
    if (this.increaseTimeout) {
      clearInterval(this.increaseTimeout);
      this.increaseTimeout = null;
    }
  };



  render() {
    return (
      <Container >
        <ViewOp title='' onPressIn={this.handlePressDes} onPress={this.decreaseHours} onPressOut={this.handlePressOut}>
          <Button >
            <ButtonUp 
            
            source={require('../../Img/upload.png')}
            />
          </Button>
        </ViewOp>

        <ViewText >
          <NumberText>{String(this.state.number).padStart(2, '0')}</NumberText>

        </ViewText>

        {/* <ViewOp onPressIn={this.handlePressIn} onPress={this.increaseHours} onPressOut={this.handlePressOut} >
            <Button >
            <ButtonDown 
            
            source={require('../../Img/Down')}
            />
          </Button>
        </ViewOp> */}
      </Container>
    );
  }
}



export default Timer;