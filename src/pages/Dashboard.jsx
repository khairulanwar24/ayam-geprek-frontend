
import { Grid, Typography, Paper } from '@mui/material';

export default function DashboardPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Selamat datang di Dashboard!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="subtitle1">Total User</Typography>
            <Typography variant="h5">123</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="subtitle1">Transaksi Hari Ini</Typography>
            <Typography variant="h5">57</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="subtitle1">Total Saldo</Typography>
            <Typography variant="h5">Rp 12.500.000</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
