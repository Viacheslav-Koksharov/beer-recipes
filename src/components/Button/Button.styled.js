import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 15px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: white;
  background-color: #b6303d;
  border-radius: 8px;
  border: none;
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export { ButtonStyled };
