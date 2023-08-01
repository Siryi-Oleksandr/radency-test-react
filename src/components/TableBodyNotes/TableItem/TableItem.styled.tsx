import styled from 'styled-components';

export const TableRow = styled.tr`
  background-color: ${props => props.theme.colors.bgTableRow};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.bgHover};
  }
`;

export const TableData = styled.td`
  padding: 8px;
  border: none;
`;

export const TableDataOptions = styled(TableData)`
  display: flex;
  gap: 6px;
  justify-content: end;
  align-items: center;
  color: ${props => props.theme.colors.bg};
`;
