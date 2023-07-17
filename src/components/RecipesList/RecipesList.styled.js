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

const button = {
  position: 'sticky',
  bottom: '10px',
  left: '50%',
};

export { ListStyles, ContainerStyles, button };
