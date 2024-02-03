import  { StyleSheet, Dimensions} from "react-native"
// nomeando const para o tamanho para não usar numeros aleatorios e me perder na leitura
// o tamanho da objeto sera do tamanho de uma "window" que vem de uma libary
const DIMENSIONS = Dimensions.get("window")
// Tamanho da altura
export const SHEET_HEIGHT = 720
// Responsavel por definir o limite até onde vai o Bottom Sheet
export const SHEET_OVER_DRAG = 20

export const styles = StyleSheet.create({
  container:{
    width: DIMENSIONS.width,
    height: SHEET_HEIGHT,
    backgroundColor: "#1E1F23",

    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 2.3,
  },
  title :{
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    margin: 24,
  },
  DragIcon :{
    marginTop: 16,
    alignSelf: "center",

  },
  
})
  