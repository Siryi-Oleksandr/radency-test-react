import React, { FC } from 'react';
import { Btn } from './BtnOption.styled';

type Props = {
  icon: JSX.Element;
  onClick: () => void;
};

const BtnOption: FC<Props> = ({ icon, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {icon}
    </Btn>
  );
};

export default BtnOption;
