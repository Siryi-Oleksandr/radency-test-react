import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  margin-left: auto;
  padding: 4px;

  width: fit-content;

  border: 1px solid $bg-btn-active-color;
  border-radius: 4px;
  cursor: pointer;

  color: $txt-black-color;
  background-color: ${props => props.theme.color.bgTableRow};

  transition: ${props => props.theme.transition.hover};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color.bgHover};
    transform: scale(1.05);
  }
`;
