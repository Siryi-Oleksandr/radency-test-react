import React, { FC } from 'react';
import { IconWrapper } from './Icon.styled';

type Props = {
  children: JSX.Element;
};

const Icon: FC<Props> = ({ children }) => {
  return <IconWrapper>{children}</IconWrapper>;
};

export default Icon;
