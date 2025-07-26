import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../functions/api/api';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';


export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await api.post('/auth/login', { username, password });
      if (res.data.success) {
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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" style={{ backgroundImage: "url('/bg-login.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <h4 className="text-center mb-4">Login Admin</h4>

        {errorMsg && (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
