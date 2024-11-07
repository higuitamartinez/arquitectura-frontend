import { createContext, useEffect, useState } from "react";
import {Outlet, useNavigate} from 'react-router-dom'
import axiosClient from "../config/axios";
import { toast } from "react-toastify";
import { showError } from "../helpers";

export const ActivoFormularioContext = createContext();
const ActivoFormularioProvider = () => {
    const navigate = useNavigate();
    const [columnas, setColumnas] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getInformacionFormulario();
    }, []);

    const getInformacionFormulario = async() => {
        try{
            const {data} = await axiosClient.get('/activo/formulario');
            setCategorias(data.categorias);
            setColumnas(data.columnas);
        }catch(error){
            console.log(error);
        }
    }

    const crearActivo = async(activo) => {
        try{
            await axiosClient.post('/activo', activo);
            toast.success('Activo Creado');
            navigate('/');
        }catch(error){
            showError(error);
        }
    }
    return(
        <ActivoFormularioContext.Provider
            value={{
                categorias,
                columnas,
                crearActivo
            }}
        >
            <Outlet />
        </ActivoFormularioContext.Provider>
    );
}

export default ActivoFormularioProvider;