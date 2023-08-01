import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
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
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    </Container>
  );
}

export default App;
