import './styles.css';
import Logo from '../../assets/logo.svg';
import ArrowBack from '../../assets/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

function Header({ showBack }) {
  const navigate = useNavigate();

  return (
    <header>
      {showBack &&
        <img
          src={ArrowBack}
          alt="arrow-back"
          className='arrow-back'
          onClick={() => navigate(-1)}
        />
      }

      <img src={Logo} alt="logo" />
    </header>
  )
}

export default Header;