import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container, Table, TableBodyNotes, TableHeadNotes } from 'components';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Table tableHead={<TableHeadNotes />} tableBody={<TableBodyNotes />} />
    </Container>
  );
}

export default App;
