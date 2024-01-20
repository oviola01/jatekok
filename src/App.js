
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LigthOn from './pages/LigthOn';
import TicTacToe from './pages/TicTacToe';
import Layout from './Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TicTacToe />} />
       
        <Route path="lighton" element={<LigthOn />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
