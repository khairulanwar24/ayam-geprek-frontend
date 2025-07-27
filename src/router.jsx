import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout'; 
import Dashboard from './pages/Dashboard';
import StokBahan from './pages/StokBahan/index'; 

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="stok" element={<StokBahan />} />
          

        </Route>
        

        {/* Route lainnya bisa ditambahkan di sini juga, dengan MainLayout */}

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
