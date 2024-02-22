import { useState } from "react";
import { MaterialCommunityIcons} from "@expo/vector-icons"
import {Main, Header, Title, Logo, ButtonSheet} from "./HomeStyles"
import  Sheet  from '../Components/bottomSheet/index';


export default function Home (){

    // função para ver se esta aberto 
    const [ isOpen, setIsOpen ] = useState(false)
    // ve se esta aberto e se esriver ele fecha ou o contrario
    // (sempre vai fazer o inverso do estado atual)
    function toggleSheet() {
        setIsOpen((prevState) => !prevState)
    }
    

    return(
        
            <Main >
                
                <Header>
                <Title>OnFocus</Title>
                <Logo
                    source={require('../Img/Logo.png')}
                />
                </Header>
                <ButtonSheet  activeOpacity={0.7} onPress={toggleSheet}>
                    <MaterialCommunityIcons name="menu" size={24} color="#F1A"/>
                </ButtonSheet>
                {/* ve se estiver aberto na função de cima para assim mostrar o botttom sheet */}
                {isOpen && <Sheet onClose={toggleSheet} />}
            </Main>
    ); 
}