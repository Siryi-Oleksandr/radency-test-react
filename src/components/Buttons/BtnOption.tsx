import React, { FC } from 'react';
import { Btn } from './BtnOption.styled';

type Props = {
  icon: JSX.Element;
};

const BtnOption: FC<Props> = ({ icon }) => {
  return <Btn type="button">{icon}</Btn>;
};

export default BtnOption;
