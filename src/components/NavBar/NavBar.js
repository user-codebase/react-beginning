import styles from './NavBar.module.scss';
import Container from '../Container/Container.js';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.wrapper}>
          <span className="fa fa-tasks" />

          <ul className={styles.menu}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? styles.linkActive : undefined)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" className={({ isActive }) => (isActive ? styles.linkActive : undefined)}>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? styles.linkActive : undefined)}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;