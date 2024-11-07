import { Link } from "react-router-dom";
import ActivoFila from "../components/ActivoFila/ActivoFila";
import useActivo from "../hooks/useActivo";

const ActivoTabla = () => {
    const {activos, columnas} = useActivo();
    return(
        <main className="container">
            <h1 className="title">Activos</h1>
            <div className="contenedor-tabla-btn">
                <button
                    type="button"
                    className="btn btn-gray-table"
                >
                    Subir excel
                </button>
                <Link 
                    to="/activo/crear"
                    className="btn btn-golden"
                >Crear Activo</Link>
            </div>
            <div className="contenedor-tabla">
                <table
                    className="tabla"
                >
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            {
                                columnas.length > 0 &&
                                columnas.map(columna => (
                                    <th
                                        key={columna.activo_columna_id}
                                    >{columna.nombre_frontend}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activos.map(activo => (
                                <ActivoFila 
                                    key={activo.activo_id}
                                    activo={activo}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );  
}

export default ActivoTabla;