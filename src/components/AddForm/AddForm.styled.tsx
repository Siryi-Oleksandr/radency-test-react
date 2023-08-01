import styled from 'styled-components';

export const FormStyled = styled.form`
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.bg};
  border-radius: ${props => props.theme.radii.medium};
`;

export const Label = styled.form`
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  resize: none;
  outline: none;
  /* transition: ${props => props.theme.transtion.hover}; */

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.active};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  resize: none;
  outline: none;
  /* transition: ${props => props.theme.transtion.hover}; */

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.active};
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  resize: none;
  outline: none;
  /* transition: ${props => props.theme.transtion.hover}; */
  resize: none;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.active};
  }
`;

export const BtnSubmit = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 8px;

  width: fit-content;

  border: 1px solid ${props => props.theme.colors.bg};
  border-radius: ${props => props.theme.radii.medium};
  cursor: pointer;
  outline: none;

  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.bgTableRow};

  /* transition: ${props => props.theme.transition.hover}; */

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.bgHover};
    transform: scale(1.05);
  }
`;
