import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  padding: 4px;

  min-width: 80px;

  border: 1px solid ${props => props.theme.colors.bg};
  border-radius: ${props => props.theme.radii.small};
  cursor: pointer;
  outline: none;

  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.bgTableRow};

  transition: ${props => props.theme.transition.hover};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.bgHover};
    transform: scale(1.05);
  }
`;
