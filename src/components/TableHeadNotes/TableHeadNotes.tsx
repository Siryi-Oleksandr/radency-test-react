import React, { FC } from 'react';
import {
  TableHead,
  TableHeadTitle,
  TableOptions,
} from './TableHeadNotes.styled';
import { MdDelete } from 'react-icons/md';
import { RiFolderDownloadFill } from 'react-icons/ri';
import { BtnOption } from 'components';

const TableHeadNotes: FC = () => {
  return (
    <TableHead>
      <tr>
        <TableHeadTitle></TableHeadTitle>
        <TableHeadTitle>Name</TableHeadTitle>
        <TableHeadTitle>Created</TableHeadTitle>
        <TableHeadTitle>Category</TableHeadTitle>
        <TableHeadTitle>Content</TableHeadTitle>
        <TableHeadTitle>Dates</TableHeadTitle>
        <TableOptions>
          <BtnOption icon={<RiFolderDownloadFill size="1.5em" />} />
          <BtnOption icon={<MdDelete size="1.5em" />} />
        </TableOptions>
      </tr>
    </TableHead>
  );
};

export default TableHeadNotes;
