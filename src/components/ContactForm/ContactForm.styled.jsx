import styled from '@emotion/styled';

export const ConteinerForm = styled.div`
  width: 300px;
  padding: 20px;
  display: block;
  border: 1px solid #477405;
`;

export const Button = styled.button`
  margin: 5px 10px;
  background-color: #0a0131ab;
  color: white;
  border-radius: 7px;
  border-color: #201068ab;
  &:hover {
    background-color: #5b5bbee6;
    color: #0a0131ab;
    border-color: #0a0131ab;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;
