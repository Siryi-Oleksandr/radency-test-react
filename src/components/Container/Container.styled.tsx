import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  padding: 0 15px;

  margin-left: auto;
  margin-right: auto;

  background-color: transparent;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 40px;
  }
`;
