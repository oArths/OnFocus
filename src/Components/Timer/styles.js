import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Main =  styled.View`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    /* width: 100%;
    height: 100%; */
    /* background-color: blue; */
    
`;
export const TextStyles = styled.Text`
    text-align: center;
    justify-content: center;
    font-size: 50px;
    width: 55px;
    height: 50px;
    color: white;
`;

export const NumberButton = styled.TouchableOpacity`
  text-align: center;
  background-color: #3498db;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
`;
export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
export const Entre = styled.Text`
  margin-top: 25px;
  font-size: 60px;
  font-weight: bold;
  color: black;
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
    fontSize: 40,
  },
  optionContainerStyle:{
    marginLeft: 50 ,
    display: "flex",
    alignItems: "center",
    width: 250,
    height: 300,
    // backgroundColor: "",
  },
  cancelStyle:{
    display: "flex",
    alignItems: "center",
    marginLeft: 90 ,
    width: 170,
    height: 50,

  },
  sectionStyle:{
    display: "none",
  },
  sectionTextStyle:{
    fontSize: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff1"
  }
  })
