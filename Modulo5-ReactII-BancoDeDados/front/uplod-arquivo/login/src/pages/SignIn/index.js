import { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        console.log("Preencha todos os campos!");
        return;
      }
      const response = await api.post('/login', {
        email,
        password
      });

      const { token } = response.data;
      setItem('token', token);
      navigate('/main');

    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    const token = getItem('token');

    if (token) {
      navigate('/main');
    }
  }, []);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
