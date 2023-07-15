import styled from 'styled-components';

const GoBackButton = styled.button`
padding: 15px;
margin-bottom: 20px;
border-radius: 8px;
color:white;
background: #b6303d;
border: none;
cursor: pointer;
font-weight:700;
    font-size: 16px;
  &:hover {
    transform: scale(1.05);
    opacity:0.9
  }
  }`;
const ImageContainerStyles = styled.div`
  min-width: 100px;
  height: 380px;
`;
const RecipeCardStyles = styled.div`
  display: flex;
  gap: 10px;
  max-width: 700px;
  height: 400px;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
`;
const ContentStyles = styled.div`
  padding: 15px;
`;
const TitleStyled = styled.h2`
  margin-bottom: 20px;
  font-weight: 900;
  color: #b6303d;
`;
const TextStyled = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
`;
const BoldText = styled.span`
  font-weight: 900;
  color: #b6303d;
`;
export {
  GoBackButton,
  ImageContainerStyles,
  RecipeCardStyles,
  ContentStyles,
  TitleStyled,
  TextStyled,
  BoldText,
};
