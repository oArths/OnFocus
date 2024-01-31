import { Button } from 'react-native-ui-lib';
import { StyleSheet, View, Image,Text } from 'react-native';


export default function App() {
  return (
    <View style={css.container}  >
      <Text style={css.text}>
        Muito texto,pouco conteudo 

      </Text>
      <Image style={css.img} 
      source={require('./src/img/big.png')}
      />

      <Button borderRadius={60} style={css.botao} label={'Press'}/>

      

      
      </View>
  );
}


const css = StyleSheet.create({
  text:{
    bottom: 10,
    fontSize:  64

  },
  
  img:{
    width: 70,
    height: 70

  },
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  botao:{
    top:10,
    backgroundColor: "red",
    width: 300,
    height: 100
  }
})
