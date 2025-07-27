import api from './api'; 


export const getStokBahan = () => api.get('/stok-bahan?limit=100&offset=0');
export const createStokBahan = (data) => api.post('/stok-bahan', data);
export const updateStokBahan = (id, data) => api.put(`/stok-bahan/${id}`, data);
export const deleteStokBahan = (id) => api.delete(`/stok-bahan/${id}`);