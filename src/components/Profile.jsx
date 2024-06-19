/* eslint-disable react/prop-types */
import styles from "./Profile.module.css";

export const Profile = (props) => {
  const idStyle = {
    color: "green",
    fontSize: "2rem",
  };
  let user = props.function();
  console.log(user);

  return (
    <div className="row">
      <div className="col-md-4">
        <img
          className="img-fluid"
          src={user.avatar}
          //   src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg"
          alt="Фото пользователя"
        />
      </div>
      <div className="col-md-8">
        <h2 className={styles.name}>
          Фамилия имя:{" "}
          <span>
            {" "}
            {user.lastname} {user.name}{" "}
          </span>
        </h2>
        <p className={styles.email}>
          Email: <span> {user.email} </span>
        </p>
        <p style={idStyle}>
          Id: <span> {user.id} </span>
        </p>
        <p style={{ fontSize: 24, color: "red" }}> Обо мне: {user.about} </p>
      </div>
    </div>
  );
};
