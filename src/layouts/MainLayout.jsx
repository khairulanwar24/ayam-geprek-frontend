import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box, CssBaseline, AppBar, Toolbar, Typography,
  Drawer, List, ListItem, ListItemText, ListItemIcon
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => navigate('/dashboard')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button onClick={() => navigate('/dashboard/stok')}>
            <ListItemIcon><InventoryIcon /></ListItemIcon>
            <ListItemText primary="Stok Bahan" />
          </ListItem>

          <ListItem button onClick={() => navigate('/login')}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
