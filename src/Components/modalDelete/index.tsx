import {
  Container,
  Text,
  Image,
  CloseModal,
  ModalOut,
  ModalIn,
  ContainerButton,
  Delete,
  Cancel,
  ButtonText,
  
} from "./styles";
import { Modal } from "react-native";
import React, { useState } from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}
const ModalDelete: React.FC<Props> = ({ isVisible, onClose }) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <Container >
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <ModalOut >
          <ModalIn>
            
              {/* <CloseModal >
                <Image source={require("../../Img/exit.jpg")} />
              </CloseModal> */}
    

            <Text>Deseja Excluir?</Text>
            <ContainerButton>
            <Cancel onPress={() => {
                      setIsOpen(!isOpen);
                    }}>
                <ButtonText>Não</ButtonText>
              </Cancel>

              <Delete>
                <ButtonText>Sim</ButtonText>
              </Delete>
            </ContainerButton>
          </ModalIn>
        </ModalOut>
      </Modal>

    </Container>
  );
};
export default ModalDelete;
