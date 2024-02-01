import { StyleSheet, View, Image,Text } from 'react-native';
import { Logo, Titulo, Container, Header } from '../Components/HomeStyles';


export default function Home (){
    return(
        <Container>
            <Header>
                <Logo
                source={require('../img/Logo.png')}
                />
                <Titulo>OnFocus</Titulo>

            </Header>
        </Container>
    ); 
}