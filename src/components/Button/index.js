import styled from 'styled-components';

const Button = styled.button`
    margin-top: 24px;
  margin-bottom: 24px;
  padding:0.5em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
  border-radius: 4px;
  overflow: hidden;
  color:white;

`;





export default Button;