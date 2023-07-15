import { useState,useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import useStore from '../../store/useStore';
import {
  ListItemStyles,
  LinkItem,
  ImageContainerStyles,
  TitleStyles
} from './ReciepesItem.styled';

const RecipesItem = ({ recipe }) => {

  const { id, name, image_url } = recipe;
  const [active, setActive] = useState(false);
  const { selectRecipe, unselectedRecipe } = useStore(
    ({ selectRecipe, unselectedRecipe }) => ({
      selectRecipe,
      unselectedRecipe
    }),
    shallow,
  );

  useEffect(()=>{
    if(!active){
      setActive(active);
    unselectedRecipe(recipe)
    }
  },[active, recipe, unselectedRecipe])

  const onRightButtonClick = (e, recipe) => {
    e.preventDefault();
    if(e.button === 2){
      setActive(!active);
      selectRecipe(recipe)
    }
  }

  return (
    <ListItemStyles
      onContextMenu={e => onRightButtonClick(e, recipe)}
      selectitem={active.toString()}
    >
      <LinkItem to={`/recipes/${id}`}>
      <ImageContainerStyles>
          <img src={image_url} alt={name} />
        </ImageContainerStyles>
        <TitleStyles>{name}</TitleStyles>
      </LinkItem>
    </ListItemStyles>
  );
};

export default RecipesItem;
