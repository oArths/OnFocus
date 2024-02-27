import { TouchableOpacity } from "react-native-gesture-handler";
import  styled  from "styled-components/native"

export const Container  = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const ModlOut  = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color:  rgba(0, 0, 0, 0.096);

`;
export const ModalIn  = styled.View`
    background-color: white;
    padding: 20px;
    border-radius: 20px;

`;
export const Text  = styled.Text`

    font-size: 20px;

`;
export const Image  = styled.Image`
    width: 20px;
    height: 20px;
`;
export const CloseModal  = styled(TouchableOpacity)`
    
`;
export const ContainerButton = styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export const Cancel = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5AA15D;
    border-radius: 10px;
    width: 84px;
    height: 39px;
    
`;
export const Delete = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D34646;
    border-radius: 10px;
    width: 84px;
    height: 39px;
`;
export const ButtonText = styled.Text`
    color: white;
    
`;
