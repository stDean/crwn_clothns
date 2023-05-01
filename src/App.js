import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import { Header } from './components';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

import { AuthPage, CheckoutPage, HomePage, ShopPage } from './pages';
import { useAuthListener } from './hooks/useAuthListener';
// import { selectCollectionsForPreview } from './redux/shop/shop.slice';
// import { addCollectionsAndDocuments } from './services/firebase';


function App() {

  const { user } = useAuthListener();
  // const collectionsArray = useSelector(selectCollectionsForPreview)

  // useEffect(() => {
  //   const collectionToAdd = collectionsArray.map(({ title, items }) => ({ title, items }))
  //   // addCollectionsAndDocuments("collections", collectionToAdd)
  // });

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/signin' element={
          user ? <Navigate to="/" /> : <AuthPage />
        } />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
