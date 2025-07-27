import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function FormDialog({ open, handleClose, handleSave, initialData }) {
  const [form, setForm] = useState({ nama: '', stok: 0, satuan: '' });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({ nama: '', stok: 0, satuan: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{initialData ? 'Edit' : 'Tambah'} Stok Bahan</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Nama Bahan" name="nama" value={form.nama} onChange={handleChange} sx={{ mb: 2 }} />
        <TextField fullWidth label="Stok" name="stok" value={form.stok} onChange={handleChange} type="number" sx={{ mb: 2 }} />
        <TextField fullWidth label="Satuan" name="satuan" value={form.satuan} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Batal</Button>
        <Button onClick={() => handleSave(form)} variant="contained">Simpan</Button>
      </DialogActions>
    </Dialog>
  );
}