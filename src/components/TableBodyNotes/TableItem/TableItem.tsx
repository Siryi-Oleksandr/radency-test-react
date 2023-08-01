import React, { FC, useState } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { deleteNote } from 'redux/notesSlice';
import { TableData, TableRow, TableDataOptions } from './TableItem.styled';
import { BtnOption, Icon, Modal, Warning, EditForm } from 'components';
import { HiPencil } from 'react-icons/hi';
import { RiFolderDownloadFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { INote } from 'types/INote';
import { getIcon, cutString, showDates } from 'services';

interface Props {
  note: INote;
}

const TableItem: FC<Props> = ({ note }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEditNote, setIsEditNote] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setIsEditNote(false);
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(note.id));
    handleCloseModal();
  };

  const handleEditNote = () => {
    handleShowModal();
    setIsEditNote(true);
  };

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
        <BtnOption onClick={handleEditNote} icon={<HiPencil size="1.5em" />} />
        <BtnOption
          onClick={handleShowModal}
          icon={<RiFolderDownloadFill size="1.5em" />}
        />
        <BtnOption onClick={handleShowModal} icon={<MdDelete size="1.5em" />} />
      </TableDataOptions>
      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open">
          {isEditNote ? (
            <EditForm note={note} closeModal={handleCloseModal} />
          ) : (
            <Warning
              action={handleDeleteNote}
              cancel={handleCloseModal}
              text="Are you sure you want to delete the note?"
            />
          )}
        </Modal>
      )}
    </TableRow>
  );
};

export default TableItem;
