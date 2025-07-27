import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function FormDialog({ open, handleClose, handleSave, initialData }) {
  const [form, setForm] = useState({
    nama_bahan: '',
    stok: 0,
    satuan: '',
    deskripsi: '',
    kategori: ''
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        nama_bahan: initialData.nama_bahan || '',
        stok: initialData.stok || 0,
        satuan: initialData.satuan || '',
        deskripsi: initialData.deskripsi || '',
        kategori: initialData.kategori || ''
      });
    } else {
      setForm({
        nama_bahan: '',
        stok: 0,
        satuan: '',
        deskripsi: '',
        kategori: ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'stok' ? Number(value) : value });
  };

  const handleSubmit = () => {
    handleSave(form);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{initialData ? 'Edit' : 'Tambah'} Stok Bahan</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Nama Bahan"
          name="nama_bahan"
          value={form.nama_bahan}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Stok"
          name="stok"
          type="number"
          value={form.stok}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Satuan (kg/liter/pcs)"
          name="satuan"
          value={form.satuan}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Deskripsi"
          name="deskripsi"
          value={form.deskripsi}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Kategori"
          name="kategori"
          value={form.kategori}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Batal</Button>
        <Button onClick={handleSubmit} variant="contained">Simpan</Button>
      </DialogActions>
    </Dialog>
  );
}
