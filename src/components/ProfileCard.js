import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ avatar, email, registerDate, name, totalRecipes }) => {
  return (
    <div className={styles.Container}>
      <img src={avatar} alt="avatar" className={styles.Avatar} />
      <p className={styles.RegisterDate}>
        Usuário desde: <strong>{registerDate}</strong>
      </p>
      <p className={styles.Name}>{name}</p>
      <p className={styles.Email}>{email}</p>
      <p className={styles.RecipesNumber}>
        Total de receitas: <strong>{totalRecipes}</strong>
      </p>
    </div>
  );
};

export default ProfileCard;
