import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface State {
  number: number;
}



class NumberSelector extends Component<{}, State> {

  private increaseTimeout: NodeJS.Timeout | null = null;
  private delayTimeout: NodeJS.Timeout | null = null;
  private delayDuration = 500; // Tempo de atraso em milissegundos (1 segundo)


  constructor(props: {}) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number < 23 ? prevState.number + 1 : 0,

    }));
  };

  decreaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number > 0 ? prevState.number - 1 : 23,
    }));
  };

  handlePressIn = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.increaseNumber();
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
        <TouchableOpacity onPressIn={this.handlePressIn} onPress={this.decreaseNumber} onPressOut={this.handlePressOut}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.viewText}>
          <Text style={styles.numberText}>{String(this.state.number).padStart(2, '0')}</Text>

        </View>

        <TouchableOpacity onPress={this.increaseNumber} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
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
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  viewText:{
    display: 'flex',
    flexDirection: "row",
  },
  numberText: {
    textAlign: "center",
    width: 80,
    borderWidth: 1,
    borderColor: "black",
    height: 70,
    fontSize: 42,
  },
});

export default NumberSelector;
