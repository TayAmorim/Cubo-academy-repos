import styles from "./Teachers.module.css";
import TeachersData from "../data";
import CardTeacher from "../components/CardTeacher";
import Logo from "../assets/logo.png";

function Teachers() {
  return (
    <section className={styles.wrapperTeachers}>
      <div>
        <img src={Logo} alt="Logo da Cubos Academy" />
      </div>
      <div className={styles.teachers}>
        {TeachersData.map((user) => (
          <CardTeacher  key={user.id} {...user} />
        ))}
      </div>
    </section>
  );
}

export default Teachers;
