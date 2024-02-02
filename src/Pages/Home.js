import { StyleSheet, View, Image,Text } from 'react-native';
import { Logo, Name, Container, Header } from './HomeStyles';


export default function Home (){
    return(
        <Container>
            <Header>
                <Logo
                source={require('../img/Logo.png')}
                />
                <Name>OnFocuAAAAAAAs</Name>

            </Header>
        </Container>
    ); 
}