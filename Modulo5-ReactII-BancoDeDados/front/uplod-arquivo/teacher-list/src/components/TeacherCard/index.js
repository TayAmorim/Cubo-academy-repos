import './styles.css';
import Avatar from '../Avatar';
import { useNavigate } from 'react-router-dom';

function TeacherCard({ teacher }) {
  const navigate = useNavigate();

  function handleDetailTeacher() {
    navigate(`/teacher/${teacher.id}`)
  }

  return (
    <div
      className='teacher-card'
      onClick={handleDetailTeacher}
    >
      <Avatar image={teacher.avatar} />
      <h1>{teacher.name}</h1>
    </div>
  )
}

export default TeacherCard;