import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import { Header } from './components';
import { AuthPage, HomePage, ShopPage } from './pages';
import { useAuthListener } from './components/hooks/useAuthListener';


function App() {

  const { currentUser } = useAuthListener()
  console.log(currentUser);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
