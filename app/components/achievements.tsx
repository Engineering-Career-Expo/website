import AchievementStyles from './css/achievements.module.css';

const Achievements = () => {
  return (
    <section className={AchievementStyles.achievements}>
      <h2>Achievements</h2>

      <ul className={AchievementStyles.achievements_list}>
        <li className={AchievementStyles.achievements_item}>
          <h3>6700+</h3>
          <p>Registered students</p>
        </li>
        <li className={AchievementStyles.achievements_item}>
          <h3>2300+</h3>
          <p>Trained students</p>
        </li>
        <li className={AchievementStyles.achievements_item}>
          <h3>900+</h3>
          <p>Certified students</p>
        </li>
      </ul>
    </section>
  )
}
export default Achievements;
