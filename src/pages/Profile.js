import React from "react";
import styles from "./Profile.module.css";
import { user } from "../mocks/user";

import ProfileCard from "../components/ProfileCard";

function Profile() {
  return (
    <div className={styles.Container}>
      <ProfileCard
        avatar={user.avatar}
        name={user.name}
        email={user.email}
        registerDate={user.registerDate}
        totalRecipes={user.totalRecipes}
      />
    </div>
  );
}

export default Profile;
