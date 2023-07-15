import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItemStyles = styled.li`
  width: calc((100% - 5px) / 6);
  height: 95vh;
  margin: 8px;
  padding: 10px;
  background-color: ${props =>
    props.selectitem === 'true' ? 'gray' : 'white'};
  border: 1px solid #b6303d;
  border-radius: 5px;

  :hover {
    transform: scale(1.01);
  }
`;

const LinkItem = styled(Link)`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%
  padding: 10px;
  color: #708db3;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`;

const ImageContainerStyles = styled.div`
  width: 200px;
  height: 480px;
  margin-bottom: 20px;
`;

const TitleStyles = styled.h3`
  margin: 0 10px 0 0;
  font-size: 20px;
  text-align: center;
`;

export { ListItemStyles, LinkItem, ImageContainerStyles, TitleStyles };
