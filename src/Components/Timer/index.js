import React, { useState } from "react";
import ModalSelector from 'react-native-modal-selector'
import { Main, TextStyles, NumberButton, Text,Entre } from "./styles";
import { modalSelectorStyles } from './styles';


export default function Timer(){

  const [selectedHoras, setSelectedHoras] = useState(0);
  const [selectedMin, setSelectedMin] = useState(0);



const Horas = [
  { key: 0, section: true, label: 'Horas' },
  ...Array.from({ length: 24 }, (_, index) => ({ key: index + 1, label: `${index}` })),
];

const handleHorasSelection = (option) => {
  setSelectedHoras(option.label);
};




const Min = [
  { key: 0, section: true, label: 'Minutos' },
  ...Array.from({ length: 60 }, (_, index) => ({ key: index + 1, label: `${index}` })),
];

const handleMinSelection = (option) => {
  setSelectedMin(option.label);
};




  return(
    <Main>

        <ModalSelector
          data={Horas}
          // initValue="Select an option"
          onChange={handleHorasSelection}
          animationType="fade"
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          showsVerticalScrollIndicator={false}
          optionStyle={modalSelectorStyles.optionStyle}
          optionTextStyle={modalSelectorStyles.optionTextStyle}
          optionContainerStyle={modalSelectorStyles.optionContainerStyle}
          cancelStyle={modalSelectorStyles.cancelStyle}
          sectionStyle={modalSelectorStyles.sectionStyle}
          sectionTextStyle={modalSelectorStyles.sectionTextStyle}
        >        
        <NumberButton >
          <TextStyles>{selectedHoras}</TextStyles>
          <Text>Horas</Text>
        </NumberButton>

      </ModalSelector>

      <Entre>:</Entre>

        <ModalSelector
          data={Min}
          // initValue="Select an option"
          onChange={handleMinSelection}
          animationType="fade"
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          showsVerticalScrollIndicator={false}
          optionStyle={modalSelectorStyles.optionStyle}
          optionTextStyle={modalSelectorStyles.optionTextStyle}
          optionContainerStyle={modalSelectorStyles.optionContainerStyle}
          cancelStyle={modalSelectorStyles.cancelStyle}
          sectionStyle={modalSelectorStyles.sectionStyle}
          sectionTextStyle={modalSelectorStyles.sectionTextStyle}
        >        
        <NumberButton >
          <TextStyles>{selectedMin}</TextStyles>
          <Text>Minutos</Text>
        </NumberButton>

      </ModalSelector>

      
      
      
      
    </Main>

  );
}

