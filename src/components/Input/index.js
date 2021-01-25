import styled from 'styled-components';

const Input = styled.input`
    margin-top: 24px;
  margin-bottom: 24px;
  padding:0.5em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  color:white;

`;





export default Input;