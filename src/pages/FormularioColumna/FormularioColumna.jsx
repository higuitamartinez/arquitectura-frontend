import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useFormularioColumna from "../../hooks/useFormularioColumna";

const FormularioColumna = () => {
    const {crearColumna} = useFormularioColumna();
    const [nombreBd, setNombreBd] = useState('');
    const [nombreFrontend, setNombreFrontend] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombreBd.trim() === '' || nombreFrontend.trim() === ''){
            toast.error('Todos los campos son obligatorios');
            return;
        }
        crearColumna({
            nombre_bd: nombreBd,
            nombre_frontend: nombreFrontend
        });
    }
    return(
        <main className="container-min">
            <h1 className="title">Crear columna</h1>
            <form
                onSubmit={handleSubmit}
            >
                <div className="field">
                    <label>Nombre de la columna en base de datos</label>
                    <input 
                        type="text"
                        value={nombreBd}
                        onChange={(e) => setNombreBd(e.target.value)}
                        placeholder="Escribe el nombre en base de datos"
                        autoFocus={true}
                    />
                </div>
                <div className="field">
                    <label>Nombre de la columna en el frontend</label>
                    <input 
                        type="text"
                        value={nombreFrontend}
                        onChange={(e) => setNombreFrontend(e.target.value)}
                        placeholder="Escribe el nombre en el frontend"
                    />
                </div>
                <div className="container-btn">
                    <Link
                        to="/activo/columna"
                        className="btn btn-gray-light"
                    >Regresar</Link>
                    <button
                        type="submit"
                        className="btn btn-golden"
                    >Crear columna</button>
                </div>
            </form>
        </main>
    );
}

export default FormularioColumna;