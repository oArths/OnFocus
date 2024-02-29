import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Botton from "./Botton";
import ModalDelete from "../modalDelete/index";


import { Main, VoltarButton, ImageVoltar,ContainerEdit, 
  ImageEdit, ButtonDelete, ContainerTitle, Title, Container, Horus, DateTime, ViewText, NumberText, Entre, Mints, Insert, Des  } from "./Styles";


interface TaskProps {
  navigation: any; 
}

const Task: React.FC<TaskProps> = ({ navigation }) => {


  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [text, setText] = useState("");

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };

  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };
  const handleTextChange = (inputText) => {
    setText(inputText);
  };





  const handlePress = () => {
    navigation.navigate("Home");
  };
 

  return (

      <Main style={styles.task}>

        <VoltarButton onPressIn={handlePress}>
          <ImageVoltar
            style={styles.voltarIcon}
            source={require("../../Img/voltar.png")}
          />
        </VoltarButton>


        <ContainerEdit style={styles.frameParent}>
        

          <ImageEdit
            style={styles.frameIcon}
            source={require("../../Img/edit.png")}
          />

          <ButtonDelete onPress={abrirModalDelete}>
            <ImageEdit
            style={styles.LixoIcon}
            source={require("../../Img/lixo.png")}
          />
          <ModalDelete
                isVisible={modalDeleteVisible}
                onClose={fecharModalDelete}
              />

          </ButtonDelete>

        </ContainerEdit>

        <ContainerTitle style={styles.tituloWrapper}>
          <Title style={[styles.titulo, styles.tituloPosition]}>Titulo</Title>
        </ContainerTitle>

        <Container >
        <DateTime>
        <Horus >
          
          <ViewText >
            <NumberText >10</NumberText>
          </ViewText>

          
        </Horus>
        
          </DateTime>

          <Entre>:</Entre>
          <DateTime>
        <Mints>
          

          <ViewText >
            <NumberText>20</NumberText>
          </ViewText>

          
        </Mints>
        
            </DateTime>
      </Container>

        {/* <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.groupItem, styles.groupShadowBox]} />

          <Text style={styles.horas}>Horas</Text>

          <Text style={[styles.minutos, styles.comecarTypo]}>Minutos</Text>

          <Text style={[styles.text, styles.textTypo]}>2</Text>

          <Text style={[styles.text1, styles.text1flexbox]}>:</Text>

          <Text style={[styles.text2, styles.textTypo]}>20</Text>
        </View> */}

            <Insert>
              <Des
                multiline={true}
                numberOfLines={4}
                editable={false}
                maxLength={150}
                placeholder="Digite aqui..."
                value={text}
                onChangeText={handleTextChange}
                textAlignVertical="top"
              />
            </Insert>
        <TouchableOpacity style={[styles.button, styles.buttonLayout]}>
          <View style={[styles.buttonChild, styles.buttonLayout]} />
          <Text style={[styles.comecar, styles.comecarTypo]}>Começar</Text>
        </TouchableOpacity>

        <View  style={[styles.buttonAction]}>
          <Botton />
        </View>
        
      </Main>
  );
};

export default Task;

const styles = StyleSheet.create({
    groupShadowBox: {
      width: 104,
      borderWidth: 0.3,
      borderColor: Color.green1,
      elevation: 4,
      shadowRadius: 4,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      borderRadius: Border.br_smi,
      borderStyle: "solid",
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      top: 0,
      height: 133,
      position: "absolute",
      backgroundColor: Color.white,
    },
    comecarTypo: {
      width: 83,
      textAlign: "center",
      fontWeight: "600",
      position: "absolute",
    },
    textTypo: {
      height: 82,
      textAlign: "center",
      color: Color.black,
      fontWeight: "600",
      position: "absolute",
    },
    text1flexbox: {
      alignItems: "center",
      display: "flex",
      position: "absolute",
    },
    buttonLayout: {
      height: 63,
      width: 204,
      position: "absolute",
    },
    tituloPosition: {
      top: 0,
      left: 0,
    },
    groupLayout: {
      height: 94,
      width: 215,
      position: "absolute",
    },
    groupChild: {
      left: 0,
    },
    groupItem: {
      left: 137,
    },
    horas: {
      width: 72,
      height: 24,
      textAlign: "center",
      color: Color.black,
      fontWeight: "600",
      letterSpacing: 1.2,
      fontSize: FontSize.size_mini,
      left: 16,
      top: 98,
      position: "absolute",
    },
    minutos: {
      left: 148,
      height: 24,
      color: Color.black,
      letterSpacing: 1.2,
      fontSize: FontSize.size_mini,
      top: 98,
      width: 83,
    },
    text: {
      top: 21,
      left: 31,
      letterSpacing: 5.1,
      width: 43,
      fontSize: FontSize.size_45xl,
    },
    text1: {
      top: 62,
      left: 106,
      fontWeight: "700",
      color: "#363232",
      justifyContent: "center",
      width: 28,
      fontSize: FontSize.size_45xl,
      textAlign: "center",
    },
    text2: {
      top: 22,
      left: 138,
      fontSize: 63,
      letterSpacing: 5,
      width: 103,
    },
    rectangleParent: {
      top: 257,
      left: 58,
      width: 241,
      height: 133,
      position: "absolute",
    },
    buttonChild: {
      borderRadius: 15,
      backgroundColor: Color.green1,
      left: 0,
      top: 0,
    },
    comecar: {
      top: 20,
      left: 62,
      fontSize: 17,
      letterSpacing: 1.4,
      color: Color.white,
      height: 19,
    },
    button: {
      top: 591,
      left: 77,
    },
    voltarIcon: {
      top: 29,
      left: 18,
      width: 39,
      height: 40,
      position: "absolute",
      overflow: "hidden",
    },
    titulo: {
      fontSize: 42,
      fontWeight: "800",
      textAlign: "center",
      color: Color.black,
      left: 0,
      position: "absolute",
    },
    tituloWrapper: {
      top: 111,
      left: 42,
      width: 122,
      height: 51,
      position: "absolute",
    },
    frameIcon: {
      height: "100%",
      width: "43.91%",
      top: "8%",
      right: "56.09%",
      bottom: "8%",
      left: "6%",
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    LixoIcon: {
      top: 2,
      left: 33,
      width: 22,
      height: 24,
      position: "absolute",
      overflow: "hidden",
    },
    frameParent: {
      height: "3.25%",
      width: "15.06%",
      top: "15.5%",
      right: "9.39%",
      bottom: "81.25%",
      left: "75.56%",
      position: "absolute",
    },
    groupInner: {
      borderRadius: 10,
      backgroundColor: "#f2f2f2",
      borderColor: "#afafaf",
      borderWidth: 1,
      borderStyle: "solid",
      width: 215,
      left: 0,
      top: 8,
    },
    escrevaUmBom: {
      top: 8,
      fontSize: FontSize.size_xs,
      color: "rgba(0, 0, 0, 0.4)",
      textAlign: "left",
      width: 149,
      height: 31,
      left: 16,
      alignItems: "center",
      display: "flex",
    },
    rectangleGroup: {
      top: 431,
      left: 71,
      shadowColor: "rgba(0, 0, 0, 0.1)",
      shadowRadius: 15,
      elevation: 15,
      width: 215,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    task: {
      flex: 1,
      width: "100%",
      height: 800,
      overflow: "hidden",
    },
    buttonAction: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
    }
  });
  