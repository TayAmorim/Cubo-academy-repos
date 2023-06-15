import styles from "./Teachers.module.css";
import TeachersData from "../data";
import CardTeacher from "../components/CardTeacher";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const [cardClickUser, setCardClickUser] = useState(null);
  const navigate = useNavigate();

  function handleClickCardTeacher(user) {
    setCardClickUser(user);
    navigate(`/teachers-detail/${user.id}`);
  }

  return (
    <section className={styles.wrapperTeachers}>
      <div>
        <img src={Logo} alt="Logo da Cubos Academy" />
      </div>
      <div className={styles.teachers}>
        {TeachersData.map((user) => (
          <CardTeacher
            click={() => handleClickCardTeacher(user)}
            cardClickUser={cardClickUser}
            key={user.id}
            {...user}
          />
        ))}
      </div>
    </section>
  );
}

export default Teachers;
