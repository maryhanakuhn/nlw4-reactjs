import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/20826115?s=400&u=080832a49ef94cf85cb953ea3414eaefc11fc6d3&v=4"
        alt="Maryhana Kuhn"
      />
      <div>
        <strong>Maryhana Kuhn</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
