import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../authenticator/AuthContext';
import '../CSS/LoginAndRegister.css';

const API_URL = 'http://localhost:3001/users';

export default function LoginAndRegister() {
  const [view, setView] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {login, logout} = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async () => {
    const res = await fetch(`${API_URL}?username=${username}&password=${password}`);
    const users = await res.json();
    if (users.length > 0) {
      setCurrentUser(users[0]);
      localStorage.setItem('user', JSON.stringify(users[0]));
      setMessage(`Welcome, ${users[0].username}`);
      login();
    } else {
      setMessage('Invalid username or password');
    }
  };

  const handleRegister = async () => {
    const res = await fetch(`${API_URL}?username=${username}`);
    const existing = await res.json();
    if (existing.length > 0) {
      setMessage('Username already exists.');
    } else {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      setMessage('Registration successful!');
      setView('login');
    }
  }
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    setMessage('Logged out successfully');
    logout();
  };

  return (
    <div className="auth-wrapper">
      {currentUser ? (
        <div className="auth-box">
          <h2>Welcome, {currentUser.username}!</h2>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div className="auth-box">
          <h2>{view === 'login' ? 'Login' : 'Register'}</h2>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={view === 'login' ? handleLogin : handleRegister}>
            {view === 'login' ? 'Log In' : 'Register'}
          </button>
          <p>{message}</p>
          <p>
            {view === 'login' ? (
              <button onClick={() => setView('register')}>Switch to Register</button>
            ) : (
              <button onClick={() => setView('login')}>Switch to Login</button>
            )}
          </p>
        </div>
      )}
    </div>
  );
}