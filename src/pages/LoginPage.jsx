import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../functions/api/api';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await api.post('/auth/login', { username, password });
      if (res.data.success) {
        // Optional: simpan token/user info (jika tidak pakai cookie saja)
        // localStorage.setItem('token', res.data.data.token);

        navigate('/dashboard');
      } else {
        setErrorMsg(res.data.message || 'Login gagal');
      }
    } catch (err) {
      const message = err?.response?.data?.message || 'Login gagal';
      setErrorMsg(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login Admin</h2>

        {errorMsg && (
          <div className="text-red-500 text-sm text-center">{errorMsg}</div>
        )}

        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
