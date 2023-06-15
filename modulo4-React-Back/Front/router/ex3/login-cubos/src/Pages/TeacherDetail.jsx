import { useNavigate, useParams } from "react-router-dom";
import styles from "./TeacherDetail.module.css";
import Logo from "../assets/logo.png";
import ArrowLeft from "../assets/arrow-left.png";
import { useEffect, useState } from "react";
import DataTeacher from "../data";

function TeacherDetail() {
  const params = useParams().id;
  const [teacherFind, setTeacherFind] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTeacherFind(
      DataTeacher.find((teacher) => teacher.id === Number(params))
    );
  }, [teacherFind, params]);

  if (teacherFind === null) return;
  const { name, avatar, stack, bio } = teacherFind;

  function backPage() {
    navigate("/teachers");
  }
  return (
    <div className={styles.wrapperDeatailTeacher}>
      <div className={styles.header}>
        <img
          onClick={backPage}
          className={styles.arrowLeft}
          src={ArrowLeft}
          alt="Seta para voltar para página anterior"
        />
        <img className={styles.logo} src={Logo} alt="Logo da cubo Academy" />
      </div>
      <section className={styles.cardTeacher}>
        <div className={styles.teacherInfo}>
          <img className={styles.user} src={avatar} alt="" />
          <h1 className={styles.name}>{name}</h1>
          <p>{stack}</p>
        </div>
        <div className={styles.bio}>
          <h3 className={styles.tituloBio}>Bio</h3>
          <p className={styles.bioInfo}>{bio}</p>
        </div>
      </section>
    </div>
  );
}

export default TeacherDetail;
