/* eslint-disable react/prop-types */
import styles from "./CardTeacher.module.css";

function CardTeacher({ name, avatar }) {
  return (
    <div className={styles.wrapperCard}>
      <div>
        <img
          className={styles.img}
          src={avatar}
          alt={`Foto do professor ${name}`}
        />
        <h1 className={styles.nome}>{name}</h1>
      </div>
    </div>
  );
}

export default CardTeacher;
