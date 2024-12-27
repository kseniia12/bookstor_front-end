import React from 'react'
import { StylesWrapper } from './style';

interface Props {
  placeholder: string;
}

const CustomInput: React.FC<Props> = (props) => {
  return (
    <StylesWrapper width={630} placeholder={props.placeholder}>
    </StylesWrapper>
  )
}
export default CustomInput;