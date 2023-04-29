import { Routes, Route } from 'react-router-dom';

import './App.css';
import { GlobalStyle } from './globalStyles';
import { Header } from './components';
import { HomePage } from './pages';


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
