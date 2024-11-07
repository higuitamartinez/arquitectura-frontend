import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useActivoFormulario from '../hooks/useActivoFormulario';
import { toast } from "react-toastify";


const ActivoFormulario = () => {
    const {categorias, columnas, crearActivo} = useActivoFormulario();
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [columnasFormulario, setColumnasFormulario] = useState({});

    useEffect(() => {
        if(columnas.length > 0){
            let copyColumnas = {};
            for(let columna of columnas){
                copyColumnas[columna.nombre_bd] = '';
            }
            setColumnasFormulario(copyColumnas);
        }
    }, [columnas]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(codigo.trim() === '' || nombre.trim() === '' || categoriaId === ''){
            toast.error('Error al insertar');
            return;
        }
        if(Object.keys(columnasFormulario).length === 0){
            crearActivo({
                codigo,
                nombre,
                categoria_id: categoriaId
            });
        }else{
            crearActivo({
                codigo,
                nombre,
                categoria_id: categoriaId,
                ...columnasFormulario
            });
        }
    }
    return(
        <form 
            className="container-min"
            onSubmit={handleSubmit}
        >
            <h1 className="title">Crear Activo</h1>
            <div className="field">
                <label htmlFor="codigo">Código</label>
                <input 
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Escribe el código"
                    autoFocus={true}
                />
            </div>
            <div className="field">
                <label htmlFor="codigo">Nombre</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Escribe el nombre"
                />
            </div>
            <div className="field">
                <label htmlFor="codigo">Categoría</label>
                <select
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                >
                    <option value="" disabled>-- Seleccionar --</option>
                    {
                        categorias.map(categoria => (
                            <option
                                key={categoria.categoria_id}
                                value={categoria.categoria_id}
                            >{categoria.nombre}</option>
                        ))
                    }
                </select>
            </div>
            {
                Object.keys(columnasFormulario).length > 0 &&
                columnas.map(columna => (
                    <div
                        key={columna.nombre_bd} 
                        className="field">
                        <label htmlFor="codigo">{columna.nombre_frontend}</label>
                        <input 
                            type="text"
                            value={columnasFormulario[columna.nombre_bd]}
                            onChange={(e) => {
                                setColumnasFormulario({
                                    ...columnasFormulario,
                                    [columna.nombre_bd]: e.target.value
                                })
                            }}
                            placeholder={`Escribe ${columna.nombre_frontend}`}
                        />
                    </div>
                ))
            }
            <div className="container-btn">
                <Link
                    to="/"
                    className="btn btn-gray-light"
                >
                    Regresar
                </Link>
                <button
                    type="submit"
                    className="btn btn-golden"
                >Crear Activo</button>
            </div>
        </form>
    );
}

export default ActivoFormulario;