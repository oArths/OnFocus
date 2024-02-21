import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
      <View style={styles.container}>
        <TouchableOpacity onPressIn={this.handlePressDes} onPress={this.decreaseHours} onPressOut={this.handlePressOut}>
          <View style={styles.button}>
            <Image 
            style={styles.buttonUp}
            source={require('../../Img/upload.png')}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.viewText}>
          <Text style={styles.numberText}>{String(this.state.number).padStart(2, '0')}</Text>

        </View>

        <TouchableOpacity onPressIn={this.handlePressIn} onPress={this.increaseHours} onPressOut={this.handlePressOut} style={styles.button}>
            <View style={styles.button}>
            <Image 
            style={styles.buttonDowm}
            source={require('../../Img/Down.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    gap: 10,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    
    width: 70,
    gap: 20,
    borderRadius: 5,
    backgroundColor: "#5AA15D",
  },
  buttonUp: {
    width: 30, // Ajuste o tamanho conforme necessário
    height: 30,
    
  },
  buttonDowm: {
    backgroundColor:"white",
    width: 30, // Ajuste o tamanho conforme necessário
    height: 30,
  },
  viewText:{
    display: 'flex',
    flexDirection: "row",
    
    
  },
  numberText: {
    alignItems: "center",
    textAlign: "center",
    width: 70,
    borderWidth: 1,
    borderColor: "black",
    color: "black",
    height: 70,
    fontSize: 60,
  },
});

export default Timer;