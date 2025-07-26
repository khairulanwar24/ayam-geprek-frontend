import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout'; // ganti dari DashboardLayout
import Dashboard from './pages/Dashboard';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Route lainnya bisa ditambahkan di sini juga, dengan MainLayout */}

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
