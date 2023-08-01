import React, { FC } from 'react';
import TableItem from './TableItem/TableItem';
import { useNotes } from 'hooks/useNotes';

const TableBodyNotes: FC = () => {
  const { notes } = useNotes();

  return (
    <tbody>
      {notes.map(note => (
        <TableItem key={note.id} note={note} />
      ))}
    </tbody>
  );
};

export default TableBodyNotes;
