import React, { FC } from 'react';
import {
  TableData,
  TableRow,
} from '../TableBodyNotes/TableItem/TableItem.styled';
import { AiOutlineBulb, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaHeadSideVirus } from 'react-icons/fa';
import Icon from 'components/Icon/Icon';
import { useNotes } from 'hooks/useNotes';

const TableBodySummary: FC = () => {
  const { countNotes, countArchivedNotes } = useNotes();

  return (
    <tbody>
      <TableRow>
        <TableData>
          <Icon>
            <AiOutlineShoppingCart />
          </Icon>
        </TableData>
        <TableData>Task</TableData>
        <TableData>{countNotes.Task}</TableData>
        <TableData>{countArchivedNotes.Task}</TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <Icon>
            <FaHeadSideVirus />
          </Icon>
        </TableData>
        <TableData>Random Thought</TableData>
        <TableData>{countNotes['Random Thought']}</TableData>
        <TableData>{countArchivedNotes['Random Thought']}</TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <Icon>
            <AiOutlineBulb />
          </Icon>
        </TableData>
        <TableData>Idea</TableData>
        <TableData>{countNotes.Idea}</TableData>
        <TableData>{countArchivedNotes.Idea}</TableData>
      </TableRow>
    </tbody>
  );
};

export default TableBodySummary;
