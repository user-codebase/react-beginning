import styles from './NavBar.module.scss';
import Container from '../Container/Container.js';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <span className="fa fa-tasks" />

          <ul className={styles.menu}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/favorite">Favorite</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
          </ul>

        </div>
      </Container>
    </nav>
  );
};

export default NavBar;