import { shallow } from 'zustand/shallow';
import useStore from "../../store/useStore";
import  RecipesItem  from '../RecipesItem/RecipesItem'
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';
import {ListStyles,ContainerStyles,BtnStyles,ButtonStyles} from './RecipesList.styled'

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
     <BtnStyles onClick={prev}>PrevPage</BtnStyles>
     <BtnStyles onClick={next}>NextPage</BtnStyles>
     </ContainerStyles>
     <ScrollTopButton />
     {selectedRecipes.length>0 ?
      (<ButtonStyles onClick={()=>removeSelectedRecipes()}>Delete Recipes</ButtonStyles>):null}
 </>
 )
}

export default RecipesList;
