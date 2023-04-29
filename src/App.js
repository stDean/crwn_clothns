import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import { Header } from './components';
import { HomePage, ShopPage } from './pages';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
