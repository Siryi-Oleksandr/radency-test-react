import React, { FC } from 'react';
import {
  TableHead,
  TableHeadTitle,
} from '../TableHeadNotes/TableHeadNotes.styled';

const TableHeadSymmary: FC = () => {
  return (
    <TableHead>
      <tr>
        <TableHeadTitle></TableHeadTitle>
        <TableHeadTitle>Note Category</TableHeadTitle>
        <TableHeadTitle>Active</TableHeadTitle>
        <TableHeadTitle>Archived</TableHeadTitle>
      </tr>
    </TableHead>
  );
};

export default TableHeadSymmary;
