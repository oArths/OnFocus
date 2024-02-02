import { styles } from './styles';
import {View, Text} from "react-native"
import { MaterialCommunityIcons} from "@expo/vector-icons"


export default function Sheet (){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons
            name="drag-horizontal"
            color="#999"
            size={24}
            style={styles.DragIcon}

            />
            <Text style={styles.title}>Opções</Text>

        </View>
        
    ); 
}