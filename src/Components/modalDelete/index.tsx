import { Container, Text,Image,CloseModal, ModlOut,ModalIn, 
    ContainerButton, Delete, Cancel, ButtonText } from './styles';
import { Modal } from 'react-native';


interface Props {
    isVisible: boolean;
    onClose: () => void;
  }
 const ModalDelete: React.FC<Props> = ({ isVisible, onClose }) => {



    return(
        <Container>
             <Modal
                visible={isVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={onClose}
                >
                <ModlOut >
                    <ModalIn>
                        <CloseModal onPress={onClose}>
                            <Image
                            source={require('../../Img/exit.jpg')}
                            
                            />
                        </CloseModal>
                        <Text >Deseja Mesmo Excluir?</Text>
                        <ContainerButton>
                            <Delete>
                                <ButtonText>Sim</ButtonText>
                            </Delete>

                            <Cancel >
                                <ButtonText onPress={onClose}>Não</ButtonText>
                            </Cancel>
                        </ContainerButton>
                    
                    </ModalIn>
                </ModlOut>
            </Modal>
            

        </Container>

    );

};
export default ModalDelete;