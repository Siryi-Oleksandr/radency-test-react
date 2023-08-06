import React, { FC } from 'react';
import { TableMain } from './Table.styled';

type Props = {
  tableHead: React.ReactNode;
  tableBody: React.ReactNode;
};

const Table: FC<Props> = ({ tableHead, tableBody }) => {
  return (
    <TableMain>
      {tableHead}
      {tableBody}
    </TableMain>
  );
};

export default Table;
