import React from 'react'
import { StylesWrapper } from './style';

interface Props {
  text: string;
}

const CustomButton: React.FC<Props> = (props) => {
  const { text } = props;
  return (
    <StylesWrapper>{text}</StylesWrapper>
  )
}

export default CustomButton;