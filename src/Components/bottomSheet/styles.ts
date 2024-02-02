import  { StyleSheet, Dimensions} from "react-native"

const DIMENSIONS = Dimensions.get("window")
export const SHEET_HEIGHT = 220

export const styles = StyleSheet.create({
  container:{
    width: DIMENSIONS.width,
    height: SHEET_HEIGHT,
    backgroundColor: "#1E1F23",

    position: "absolute",
    bottom: 0,
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
  