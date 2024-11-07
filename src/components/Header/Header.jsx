import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <Link
                to="/"
                className={styles.link}
            >
                <span>Activos</span>
            </Link>
            <Link
                to="/activo/columna"
                className={styles.link}
            >
                <span>Columnas Formulario</span>
            </Link>
        </header>
    );
}

export default Header;