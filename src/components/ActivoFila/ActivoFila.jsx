import { useNavigate } from 'react-router-dom';
import useActivo from '../../hooks/useActivo';
import styles from './ActivoFila.module.css';

const ActivoFila = ({activo}) => {
    const navigate = useNavigate();
    const {columnas} = useActivo();
    const handleEditar = () => {
        navigate(`/activo/editar/${activo.activo_id}`)
    }
    return(
        <tr>
            <td className={styles.codigo}>
                <div className={styles.opciones}>
                    <button
                        type="button"
                        className={styles.editar}
                        onClick={handleEditar}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className={styles.eliminar}
                    >
                        Eliminar
                    </button>
                </div>
                <span>{activo.codigo}</span>
            </td>
            <td>{activo.nombre}</td>
            <td>{activo.categoriaNombre}</td>
            {
                columnas.map(columna => (
                    <td
                        key={columna.activo_columna_id}
                    >
                        {activo[columna.nombre_bd] ? activo[columna.nombre_bd] : ''}
                    </td>
                ))
            }
        </tr>
    );
}

export default ActivoFila;