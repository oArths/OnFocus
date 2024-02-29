import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Main = styled.View`
    display: flex;
    justify-content: center;
`;
export const VoltarButton = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
`;
export const ImageVoltar = styled.Image`
    width: 40px;
    height: 40px;
`;
export const ContainerEdit = styled.View`
   display: flex;
   flex-direction: row;
   gap: 20px;
`;
export const ImageEdit = styled.Image`
    width: 40px;
    height: 40px;
`;
export const ButtonDelete = styled(TouchableOpacity)`
    width: 40px;
    height: 40px;
`;
export const ContainerTitle = styled.View`
    width: 122px ;
    height: 51px;
`;
export const Title = styled.Text`
    width: 122px ;
    height: 51px;
`;




export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Horus = styled.View`

`;
export const Mints = styled.View`

`;
export const Entre = styled.Text`
    margin-bottom: 65px;
    font-size: 80px;
`;


export const ViewOpUp = styled(TouchableOpacity)`
    background-color:  #ffff;
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-color: #585353b1;
    border-bottom-width:0.5px ;
    
`;
export const ViewOpDo = styled(TouchableOpacity)`
    background-color: #fff;
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-color: #585353b1;
    border-top-width:0.5px ;
   
    
`;


export const ButtonUp = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ButtonDown = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ViewText = styled.View`
  display: flex;
  flex-direction: row;
  
`;

export const NumberText = styled.Text`
  align-items: center;
  text-align: center;
  width: 90px;
  color: black;
  height: 70px;
  font-size: 60px;
  border-width: 1px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-color: #585353b1;

  `;
  export const DateTimeText = styled.Text`
  display: flex;
  font-size: 16px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 0.5px;
  border-color: black;
  border-radius: 7px;
`;
export const DateTime = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Button = styled(TouchableOpacity)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
export const Insert = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Des = styled.TextInput`
  font-size: 19px;
  width: 250px;
  height: 150px;
  border-width: 0.5px;
  border-color: #ccc;
  border-radius: 7px;
  padding: 8px;
 
`;