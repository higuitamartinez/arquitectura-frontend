import { act, createContext, useEffect, useState } from "react";
import {Outlet} from 'react-router-dom'
import { showError } from "../helpers";
import axiosClient from "../config/axios";

export const ActivoContext = createContext();
const ActivoProvider = () => {
    const [columnas, setColumnas] = useState([]);
    const [activos, setActivos] = useState([]);

    useEffect(() => {
        getColumnas();
        getActivos();
    }, []);
    const getActivos = async() => {
        try{
            const {data} = await axiosClient.get('/activo');
            setActivos(data.activos);
        }catch(error){
            showError(error);
        }
    }

    const getColumnas = async() => {
        try{
            const {data} = await axiosClient.get('/columna');
            setColumnas(data.columnas)
        }catch(error){  
            showError(error);
        }
    }
    
    return(
        <ActivoContext.Provider
            value={{
                activos,
                columnas
            }}
        >
            <Outlet />
        </ActivoContext.Provider>
    );
}

export default ActivoProvider;