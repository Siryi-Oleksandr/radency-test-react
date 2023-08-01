import styled from 'styled-components';

export const IconWrapper = styled.div`
  padding: 8px;
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${props => props.theme.radii.round};

  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.white};
`;
