import React from 'react'
import { StylesWrapper } from './style';

interface Props {
  text: string;
  className?: string;
}

const CustomButton: React.FC<Props> = (props) => {
  const { text, className } = props;
  return (
    <StylesWrapper className={className}>{text}</StylesWrapper>
  )
}

export default CustomButton;