import  styled  from "styled-components/native"
// import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;


export const ViewOp = styled.Button`
    background-color: #5AA15D;
    width: 200px;
    height: 63px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    
`;

export const Button = styled.View`
  width: 20px; // Adjust size as needed
  height: 20px;
`;
export const ButtonUp = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ButtonDown = styled.Image`
  width: 30px; 
  height: 30px;
`;

export const ViewText = styled.View`
  display: flex;
  flex-direction: row;
`;

export const NumberText = styled.Text`
  align-items: center;
  text-align: center;
  width: 70px;
  border-width: 1px;
  border-color: black;
  color: black;
  height: 70px;
  font-size: 60px;
  `