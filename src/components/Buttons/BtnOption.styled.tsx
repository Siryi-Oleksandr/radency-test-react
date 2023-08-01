import styled from 'styled-components';

export const Btn = styled.button`
  padding: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  transition: ${props => props.theme.transition.hover};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.active};
    transform: scale(1.1);
  }
`;
