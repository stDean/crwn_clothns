import { Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import { Header } from './components';
import { AuthPage, HomePage, ShopPage } from './pages';
import { useAuthListener } from './/hooks/useAuthListener';


function App() {

  const { user } = useAuthListener();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={
          user ? <Navigate to="/" /> : <AuthPage />
        } />
      </Routes>
    </>
  );
}

export default App;
