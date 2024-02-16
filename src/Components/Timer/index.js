import React, { useState } from "react";
import ModalSelector from 'react-native-modal-selector'
import { Main, TextStyles, NumberButton } from "./styles";
import { modalSelectorStyles } from './styles';

export default function Timer(){

  const [selectedNumber, setSelectedNumber] = useState(0);

const data = [
  { key: 0, section: true, label: 'Hours' },
  ...Array.from({ length: 24 }, (_, index) => ({ key: index + 1, label: `${index}` })),
];

const handleNumberSelection = (option) => {
  setSelectedNumber(option.label);
};




  return(
    <Main>
        <ModalSelector
        data={data}
        initValue="Select an option"
        onChange={handleNumberSelection}
        animationType="fade"
        overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        optionStyle={modalSelectorStyles.optionStyle}
        optionTextStyle={modalSelectorStyles.optionTextStyle}
        optionContainerStyle={modalSelectorStyles.optionContainerStyle}
        cancelStyle={modalSelectorStyles.cancelStyle}
      >
        <NumberButton>
          <TextStyles>{selectedNumber}</TextStyles>
        </NumberButton>

        
      </ModalSelector>

      
      
      
      
    </Main>

  );
}

