import React, { FC } from 'react';
import { Wrapper } from './TableManager.styled';

type Props = {
  children: React.ReactNode;
};

const TableManager: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default TableManager;
