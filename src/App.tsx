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

  return (
    <Container>
      <GlobalStyle />
      {showArchive ? (
        <Table tableHead={<TableHeadNotes />} tableBody={<TableBodyNotes />} />
      ) : (
        <Table tableHead={<TableHeadNotes />} tableBody={<TableBodyNotes />} />
      )}

      <TableManager>
        {showArchive ? (
          <TextBtn text="Show Archive" onClick={() => setShowArchive(true)} />
        ) : (
          <TextBtn text="Show Notes" onClick={() => setShowArchive(false)} />
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
