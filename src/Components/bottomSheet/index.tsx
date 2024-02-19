import { styles, SHEET_HEIGHT, SHEET_OVER_DRAG, Main } from './styles';
import {Title, Container, Insert} from "./styles"
import Timer from "../Timer/index.js"
import React, { useState } from "react";
// import DateTimePicker from '@react-native-community/datetimepicker';





// Onde pego os Icons
import { MaterialCommunityIcons} from "@expo/vector-icons"

// é usado para detectar o movimento e qual movimento esta sendo feito, respectivamente
import { GestureDetector, Gesture } from "react-native-gesture-handler"


// vai ser usado para a anaimação do bottom sheet
// runOnJS é usado para definir onde sera rodado a tread, no caso no javascript
import Animated, { 
    useSharedValue, 
    withSpring, 
    withTiming, 
    runOnJS, 
    useAnimatedStyle,
    SlideInDown,
    SlideOutDown
} from "react-native-reanimated"

// função para o fechamento do bottom sheet
type Props = {
    onClose: () => void;
}


export default function Sheet ({onClose}: Props){



    const [date, setDate] = useState(new Date())

    // definir valor iniciar do bottom sheet, essa var vai ser reutilizada para fazer a animação
    const offset = useSharedValue(0)

    // função responsavel por chamar a função que fecha o bottom sheet
    function close(){
        offset.value = 0
        onClose()
    }



    // const com função de detectar qual movimento e sua posição para realizar a animação
    const pan = Gesture.Pan().onChange((event) => {
        const offsetDelta = event.changeY + offset.value
        const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta)

        // linha responsavel por verificar se ele passou do tamanho limite 
        // e fazendo ter a animaçao de voltar, não o deixando ficar solto
        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    })

    // responsavel o calculo de onde ele esta e se eestiver 1/3 da altura ele fecha
    // runOnjs é usado para ele fazer o  calculo da movimentação no javascript ou enves da ui do usuario
    .onFinalize(() => {
        if(offset.value < SHEET_HEIGHT / 3){
            offset.value = withSpring(0)
        }else{
            offset.value = withTiming(SHEET_HEIGHT, {}, () =>{
                runOnJS(close)()

            })
        }
    })

    // responsavel por fazer o calculo vertical e passar oara animação onde ele esta
    const translateY = useAnimatedStyle(() =>({
        transform: [{translateY: offset.value}]
    }))
   
   



    return(
        <GestureDetector gesture={pan}>
            <Animated.View 
            style={[styles.Detector, translateY]}
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
            
            >
                
                <MaterialCommunityIcons
                name="drag-horizontal"
                color="#999"
                size={24}
                style={styles.DragIcon}

                />
                {/* <Text style={styles.title}>Opções</Text> */}
                <Container>
                    <Main>
                        <Title placeholder='Digite o titulo'></Title>
                        <Timer/>
                            <Insert>
                            
                        
                            </Insert>
                    </Main>   
                </Container>
            </Animated.View>
        </GestureDetector>
        
    ); 
}