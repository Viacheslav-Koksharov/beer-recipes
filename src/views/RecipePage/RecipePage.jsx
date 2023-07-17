import useStore from '../../store/useStore';
import { useNavigate, useParams} from "react-router-dom";
import Button from '../../components/Button/Button';
import {button,RecipeCardStyles,ImageContainerStyles,ContentStyles,TitleStyled,TextStyled,BoldText} from './RecipePage.styled'

const RecipePage = () => {
  const { recipeId } = useParams();
  const { recipes } = useStore();
  const navigate = useNavigate();

  const recipe = recipes.find((recipe) => recipe.id === Number(recipeId));

  const handleClick=() =>{
    navigate("/");
  }
    return (
      <>
        <Button style={button} onClick={handleClick}> Go Back</Button>
      {recipe ? (
        <RecipeCardStyles>
          <ImageContainerStyles>
          <img src={recipe.image_url} alt="item" />
          </ImageContainerStyles>
          <ContentStyles>
          <TitleStyled>{recipe.name}</TitleStyled>
          <TextStyled><BoldText>First brewed:</BoldText>{recipe.first_brewed}</TextStyled>
          <TextStyled><BoldText>Description:</BoldText>{recipe.description}</TextStyled>
          </ContentStyles>
        </RecipeCardStyles>
      ) : (
        <div>Recipe not found.</div>
      )}
    </>
  );
};

  export default RecipePage;
