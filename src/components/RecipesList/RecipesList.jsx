import { shallow } from 'zustand/shallow';
import useStore from "../../store/useStore";
import  RecipesItem  from '../RecipesItem/RecipesItem'
import Button from '../Button/Button';
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';
import {ListStyles,ContainerStyles,button} from './RecipesList.styled'

const RecipesList = () => {

const { recipes,removeSelectedRecipes,selectedRecipes,numPage,nextPage,prevPage } = useStore(
  ({ recipes,removeSelectedRecipes,selectedRecipes,numPage,nextPage,prevPage }) => ({
    recipes,removeSelectedRecipes,selectedRecipes,numPage,nextPage,prevPage
  }),
  shallow,
);

const next=()=>{
  nextPage();
  useStore.getState().fetchRecipes();
  scrollTo();
}

const prev=()=>{
  if(numPage<2) return
  prevPage();
  useStore.getState().fetchRecipes();
  scrollTo();
}

const scrollTo = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

 return (
  <>
     <ListStyles >
       {recipes?.slice(0, 15).map((recipe) => (
         <RecipesItem key={recipe.id} recipe={recipe} />
       ))}
     </ListStyles>
     <ContainerStyles>
     <Button  onClick={prev}>PrevPage</Button>
     <Button  onClick={next}>NextPage</Button>
     </ContainerStyles>
     <ScrollTopButton />
     {selectedRecipes.length>0 ?
      (<Button style={button} onClick={()=>removeSelectedRecipes()}>Delete Recipes</Button>):null}
 </>
 )
}

export default RecipesList;
