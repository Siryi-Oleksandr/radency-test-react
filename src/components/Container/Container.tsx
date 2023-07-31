import React, { FC } from 'react';
import { ContainerWrapper } from './Container.styled';

type Props = {
  children: React.ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
