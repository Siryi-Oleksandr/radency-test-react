import styled from 'styled-components';

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.white};
`;

export const TableHeadTitle = styled.th`
  padding: 8px;
  font-weight: bold;
  text-align: left;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.white};
  border: none;
`;

export const TableOptions = styled.th`
  padding: 8px;
  font-weight: bold;
  text-align: left;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.white};
  border: none;

  display: flex;
  gap: 6px;
  justify-content: end;
  align-items: center;
`;
