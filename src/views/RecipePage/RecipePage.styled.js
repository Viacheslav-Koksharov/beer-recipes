import styled from 'styled-components';

const button = {
  marginBottom: '20px',
};

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
  button,
  ImageContainerStyles,
  RecipeCardStyles,
  ContentStyles,
  TitleStyled,
  TextStyled,
  BoldText,
};
