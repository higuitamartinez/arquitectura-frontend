import { Link } from "react-router-dom";
import ColumnaActivo from "../../components/ColumnaActivo/ColumnaActivo";
import useColumnasActivo from "../../hooks/useColumnasActivo";


const ColumnasActivo = () => {
    const {activoColumnas} = useColumnasActivo();
    return(
        <main className="container-min">
            <h1 className="title">Columnas de activo</h1>
            <Link
                to="/activo/columna/crear"
                className="btn btn-golden"
                style={{
                    marginBottom: '20px'
                }}
            >Crear Columna</Link>
            <ul>
                {
                    activoColumnas.map(activoColumna => (
                        <ColumnaActivo 
                            key={activoColumna.activo_columna_id}
                            activoColumna={activoColumna}
                        />
                    ))
                }
            </ul>
        </main>
    );
}

export default ColumnasActivo;