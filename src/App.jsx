import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ShopListPage from './pages/ListPage/ShopListPage';
import ShopCreatePage from './pages/CreateUpdatePage/ShopCreatePage';
import Header from './components/headers/Header';
import Container from './components/BaseContainer/Container';
import ShopDetailPage from './pages/DetailPage/ShopDetailPage';
import DetailHeader from './components/headers/DetailHeader';
import ShopEditPage from './pages/CreateUpdatePage/ShopEditPage';

function App() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/link/');
  return (
    <>
      {isDetailPage ? <DetailHeader /> : <Header />}
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/list" element={<ShopListPage />} />
          <Route path="/link/:id" element={<ShopDetailPage />} />
          <Route path="/linkpost" element={<ShopCreatePage />} />
          <Route path="/linkpost/:id/edit" element={<ShopEditPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
