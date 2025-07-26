// src/constants/menuItems.js
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

export const menuItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Stok Bahan', path: '/stok-bahan', icon: <Inventory2Icon /> },
  { label: 'Transaksi', path: '/transaksi', icon: <AttachMoneyIcon /> },
  { label: 'Laporan', path: '/laporan', icon: <BarChartIcon /> },
  { label: 'Outlet', path: '/outlet', icon: <StorefrontIcon /> },
  { label: 'Pengguna', path: '/pengguna', icon: <PeopleIcon /> },
  { label: 'Logout', path: '/logout', icon: <LogoutIcon /> },
];
