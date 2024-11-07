import { createContext, useEffect, useState } from "react";
import {Outlet, useNavigate, useParams} from 'react-router-dom'
import axiosClient from "../config/axios";
import { toast } from "react-toastify";
import { showError } from "../helpers";

export const ActivoFormularioEditarContext = createContext();
const ActivoFormularioEditarProvider = () => {
    const {activo_id} = useParams();
    const navigate = useNavigate();
    const [columnas, setColumnas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [activo, setActivo] = useState(null);

    useEffect(() => {
        if(!activo_id){
            navigate('/');
            return;
        }
        getActivo();
        getInformacionFormulario();
    }, []);

    const getActivo = async() =>{ 
        try{
            const {data} = await axiosClient.get(`/activo/${activo_id}`);
            setActivo(data.activo[0])
        }catch(error){
            showError(error);
        }
    }

    const getInformacionFormulario = async() => {
        try{
            const {data} = await axiosClient.get('/activo/formulario');
            setCategorias(data.categorias);
            setColumnas(data.columnas);
        }catch(error){
            console.log(error);
        }
    }

    const editarActivo = async(activo) => {
        try{
            await axiosClient.put(`/activo/${activo_id}`, activo);
            toast.success('Activo actualizado');
            navigate('/');
        }catch(error){
            showError(error);
        }
    }
    return(
        <ActivoFormularioEditarContext.Provider
            value={{
                categorias,
                activo,
                columnas,
                editarActivo
            }}
        >
            <Outlet />
        </ActivoFormularioEditarContext.Provider>
    );
}

export default ActivoFormularioEditarProvider;