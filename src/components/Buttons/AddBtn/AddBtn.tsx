import React, { FC } from 'react';
import { Btn } from './AddBtn.styled';

interface IProps {
  openModal: () => void;
}

const AddBtn: FC<IProps> = ({ openModal }) => {
  return <Btn onClick={openModal}>Create Note</Btn>;
};

export default AddBtn;
