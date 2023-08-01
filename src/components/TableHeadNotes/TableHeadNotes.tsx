import React, { FC, useState } from 'react';
import {
  TableHead,
  TableHeadTitle,
  TableOptions,
} from './TableHeadNotes.styled';
import { MdDelete } from 'react-icons/md';
import { RiFolderDownloadFill } from 'react-icons/ri';
import { BtnOption, Modal, Warning } from 'components';
import { useAppDispatch } from 'hooks/reduxHooks';
import { deleteAllNotes, archiveAllNotes } from 'redux/notesSlice';

type Props = {
  type: 'notes' | 'archive';
};

const TableHeadNotes: FC<Props> = ({ type }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isDeleteAllNotes, setIsDeleteAllNotes] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setIsDeleteAllNotes(false);
  };

  const handleDeleteAllNote = () => {
    dispatch(deleteAllNotes());
    handleCloseModal();
  };
  const handleArchiveAllNote = () => {
    dispatch(archiveAllNotes());
    handleCloseModal();
  };

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
          <BtnOption
            onClick={handleShowModal}
            icon={<RiFolderDownloadFill size="1.5em" />}
          />
          {type === 'notes' && (
            <BtnOption
              onClick={() => {
                setIsDeleteAllNotes(true);
                handleShowModal();
              }}
              icon={<MdDelete size="1.5em" />}
            />
          )}
        </TableOptions>
      </tr>
      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open">
          {isDeleteAllNotes ? (
            <Warning
              action={handleDeleteAllNote}
              cancel={handleCloseModal}
              text="Are you sure you want to delete ALL notes?"
            />
          ) : (
            <Warning
              action={handleArchiveAllNote}
              cancel={handleCloseModal}
              text="Are you sure you want to archive ALL notes?"
            />
          )}
        </Modal>
      )}
    </TableHead>
  );
};

export default TableHeadNotes;
