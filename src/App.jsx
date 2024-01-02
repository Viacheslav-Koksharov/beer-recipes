import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Loader from './components/Loader/Loader';
import useStore from './store/useStore';
const Homepage = lazy(
  () => import('./views/HomePage/HomePage' /* webpackChunkName: 'HomePage' */),
);
const RecipePage = lazy(
  () => import('./views/RecipePage/RecipePage' /* webpackChunkName: 'RecipePage' */),
);

useStore.getState().fetchRecipes();

const App = () => {

  return (
    <Container>
     <Suspense fallback={<Loader/>}>
                <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/recipes/:recipeId' element={<RecipePage />}/>
                </Routes>
              </Suspense>
    </Container>
  );
};

export default App;
