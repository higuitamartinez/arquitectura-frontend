import styles from './ColumnaActivo.module.css';

const ColumnaActivo = ({activoColumna}) => {
    return(
        <li className={styles.columna}>
            <div className={styles.info}>
                <span className={styles.nombreBd}>{activoColumna.nombre_bd}</span>
                <span className={styles.nombreFrontend}>{activoColumna.nombre_frontend}</span>
            </div>
            <button
                type="button"
                className={styles.borrar}
            >
                Borrar
            </button>
        </li>
    );
}

export default ColumnaActivo;