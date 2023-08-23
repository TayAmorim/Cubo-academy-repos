import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.css';
import { sum } from './functions';

function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let name = 'daniel';

    name = 'João';

    name = 'Pedro';

    console.log(name);

    const values = sum(11, 2);

    console.log(values);

    navigate('/main');
  }

  return (
    <div className='container'>
      <form className='form-login' onSubmit={handleSubmit}>
        <img src={Logo} alt="logo" />

        <div className='form-body'>
          <input type="text" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <span>Não tem cadastro? Clique aqui!</span>
        </div>

        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default SignIn;