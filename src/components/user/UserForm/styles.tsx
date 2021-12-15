import styled from 'styled-components';

export const Container = styled.div`
  margin: 3em;
  .ant-table-thead > tr > th {
    font-weight: bold;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  margin-top: 0.5em;
  margin-bottom: 8px;
  text-align: end;
  flex-grow: 8;
  flex-basis: 40%;
`;
