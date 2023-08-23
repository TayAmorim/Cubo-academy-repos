import './styles.css';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import { useState } from 'react';
import { teachers } from '../../data';

function Main() {
  const [allTeachers, setAllTeachers] = useState([...teachers]);

  return (
    <div className='container main'>
      <Header />

      <div className='main-teachers'>
        {allTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;