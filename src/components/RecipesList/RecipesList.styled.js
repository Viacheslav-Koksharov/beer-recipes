import styled from 'styled-components';

const ListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const ContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
`;

const BtnStyles = styled.button`
  bottom: 10px;
  left: 50%;
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

const ButtonStyles = styled.button`
  position: sticky;
  bottom: 10px;
  left: 50%;
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
export { ListStyles, ContainerStyles, BtnStyles, ButtonStyles };
