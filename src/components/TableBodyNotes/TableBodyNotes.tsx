import React, { FC } from 'react';
import TableItem from './TableItem/TableItem';
import { useNotes } from 'hooks/useNotes';
import { TableType } from 'types/TableType';
import { INote } from 'types/INote';

interface Props {
  type: TableType;
}

const TableBodyNotes: FC<Props> = ({ type }) => {
  const { notes, archivedNotes } = useNotes();

  return (
    <>
      {type === 'notes' ? (
        <tbody>
          {notes.map(note => (
            <TableItem key={note.id} note={note} type="notes" />
          ))}
        </tbody>
      ) : (
        <tbody>
          {archivedNotes.map((note: INote) => (
            <TableItem key={note.id} note={note} type="archive" />
          ))}
        </tbody>
      )}
    </>
  );
};

export default TableBodyNotes;
