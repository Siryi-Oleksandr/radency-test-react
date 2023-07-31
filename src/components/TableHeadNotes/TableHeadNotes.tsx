import React, { FC } from 'react';
import {
  TableHeadRow,
  TableHeadTitle,
  TableOptions,
} from './TableHeadNotes.styled';
// import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { RiFolderDownloadFill } from 'react-icons/ri';
import { BtnOption } from 'components';

const TableHeadNotes: FC = () => {
  return (
    <thead>
      <TableHeadRow>
        <TableHeadTitle></TableHeadTitle>
        <TableHeadTitle>Name</TableHeadTitle>
        <TableHeadTitle>Created</TableHeadTitle>
        <TableHeadTitle>Category</TableHeadTitle>
        <TableHeadTitle>Content</TableHeadTitle>
        <TableHeadTitle>Dates</TableHeadTitle>
        <TableOptions>
          <BtnOption icon={<MdDelete size="1.5em" />} />
          <BtnOption icon={<RiFolderDownloadFill size="1.5em" />} />
        </TableOptions>
      </TableHeadRow>
    </thead>
  );
};

export default TableHeadNotes;
