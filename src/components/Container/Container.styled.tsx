import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  padding: 0 15px;

  margin-left: auto;
  margin-right: auto;

  background-color: transparent;

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: ${props => props.theme.breakpoints.tablet};
    padding: 0 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: ${props => props.theme.breakpoints.desktop};
    padding: 0 40px;
  }
`;
