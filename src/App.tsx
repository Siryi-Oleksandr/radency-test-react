import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container, Table, TableBodyNotes, TableHeadNotes } from 'components';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <h1>Hello world</h1>
      <Table tableHead={<TableHeadNotes />} tableBody={<TableBodyNotes />} />
    </Container>
  );
}

export default App;
