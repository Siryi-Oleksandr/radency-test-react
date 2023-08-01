import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import {
  Container,
  Modal,
  Table,
  TableBodyNotes,
  TableHeadNotes,
  AddForm,
  TableManager,
  TextBtn,
} from 'components';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showArchive, setShowArchive] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleShowArchive = () => {
    setShowArchive(true);
  };
  const handleShowNotes = () => {
    setShowArchive(false);
  };

  return (
    <Container>
      <GlobalStyle />
      {showArchive ? (
        <Table
          tableHead={<TableHeadNotes type="archive" />}
          tableBody={<TableBodyNotes type="archive" />}
        />
      ) : (
        <Table
          tableHead={<TableHeadNotes type="notes" />}
          tableBody={<TableBodyNotes type="notes" />}
        />
      )}

      <TableManager>
        {showArchive ? (
          <TextBtn text="Show Notes" onClick={handleShowNotes} />
        ) : (
          <TextBtn text="Show Archive" onClick={handleShowArchive} />
        )}

        <TextBtn text="Create Note" onClick={handleShowModal} />
      </TableManager>

      {showModal && (
        <Modal onClose={handleCloseModal} aria-label="Modal window is open">
          <AddForm closeModal={handleCloseModal} />
        </Modal>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}

export default App;
