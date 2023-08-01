import React, { FC } from 'react';
import { TableData, TableRow, TableDataOptions } from './TableItem.styled';
import { BtnOption, Icon } from 'components';
import { HiPencil } from 'react-icons/hi';
import { RiFolderDownloadFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { INote } from 'types/INote';
import { getIcon, cutString, showDates } from 'services';

interface Props {
  note: INote;
}

const TableItem: FC<Props> = ({ note }) => {
  const { name, created, category, content, dates } = note;
  return (
    <TableRow>
      <TableData>
        <Icon>{getIcon(category)}</Icon>
      </TableData>
      <TableData>{cutString(name)}</TableData>
      <TableData>{created}</TableData>
      <TableData>{category}</TableData>
      <TableData>{cutString(content)}</TableData>
      <TableData>{showDates(dates)}</TableData>
      <TableDataOptions>
        <BtnOption icon={<HiPencil size="1.5em" />} />
        <BtnOption icon={<RiFolderDownloadFill size="1.5em" />} />
        <BtnOption icon={<MdDelete size="1.5em" />} />
      </TableDataOptions>
    </TableRow>
  );
};

export default TableItem;
