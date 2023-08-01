import React, { FC } from 'react';
import { Btn } from './TextBtn.styled';

interface IProps {
  text: string;
  onClick: () => void;
}

const TextBtn: FC<IProps> = ({ text, onClick }) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

export default TextBtn;
