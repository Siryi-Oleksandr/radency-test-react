import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import {
  Container,
  Modal,
  Table,
  TableBodyNotes,
  TableHeadNotes,
  AddBtn,
  AddForm,
} from 'components';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

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
      <Table tableHead={<TableHeadNotes />} tableBody={<TableBodyNotes />} />
      <AddBtn openModal={handleShowModal} />

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
