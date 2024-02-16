import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Main =  styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;
export const ModalSelector = styled.View`
    border-color: aliceblue;
    border-width: 1;
    
`;
export const TextStyles = styled.Text`
    text-align: center;
    justify-content: center;
    font-size: 50px;
    width: 50px;
    height: 50px;
    color: white;
`;

export const NumberButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
`;

export const modalSelectorStyles = StyleSheet.create({
  optionStyle: {
    // Estilos para cada opção na lista
    width: 200,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
  },
  optionTextStyle: {
    // Estilos para o texto de cada opção
    color: 'black',
    fontSize: 20,
  },
  optionContainerStyle:{
    display: "flex",
    alignItems: "center",
    width: 170,
    height: 300,
    backgroundColor: "black",
  },
  cancelStyle:{
    display: "flex",
    alignItems: "center",
    width: 170,
    height: 80,
    backgroundColor: "black",
  }
  })
