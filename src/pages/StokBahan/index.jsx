import { useEffect, useState } from 'react';
import { getStokBahan, createStokBahan, updateStokBahan, deleteStokBahan } from '../../functions/api/stokBahanApi';
import { Button, Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import FormDialog from './FormDialog';

export default function StokBahanPage() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getStokBahan();
      console.log("Response backend:", response.data);
      setData(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setSelected(null);
    setOpen(true);
  };

  const handleEdit = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    await deleteStokBahan(id);
    fetchData();
  };

  const handleSave = async (formData) => {
    if (selected) {
      await updateStokBahan(selected.id_stok_bahan, formData);
    } else {
      await createStokBahan(formData);
    }
    setOpen(false);
    fetchData();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Manajemen Stok Bahan</Typography>
      <Button variant="contained" onClick={handleAdd}>Tambah Bahan</Button>

      <Table sx={{ mt: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Nama</TableCell>
            <TableCell>Stok</TableCell>
            <TableCell>Satuan</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id_stok_bahan}>
              <TableCell>{row.nama_bahan}</TableCell>
              <TableCell>{row.stok}</TableCell>
              <TableCell>{row.satuan}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(row)}><Edit /></IconButton>
                <IconButton onClick={() => handleDelete(row.id_stok_bahan)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FormDialog open={open} handleClose={() => setOpen(false)} handleSave={handleSave} initialData={selected} />
    </Container>
  );
}
