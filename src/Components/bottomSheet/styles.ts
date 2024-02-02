// import styled from 'styled-components/native';
import  { StyleSheet, Dimensions} from "react-native"

const DIMENSIONS = Dimensions.get("window")
export const SHEET_HEIGHT = 220

export const Styles = StyleSheet.create({
  container:{
    width: DIMENSIONS.width,
    height: SHEET_HEIGHT,
    backgroundColor: "#1E1F23",

    position: "absolute",
    bottom: 0
  }
  
})
  