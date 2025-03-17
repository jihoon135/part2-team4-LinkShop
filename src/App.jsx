import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        {/* <Route path="/list" element={<MainPage />} /> */} {/* 추후 메인페이지 추가 시 수정 필요 */}
        <Route path=":urlId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
