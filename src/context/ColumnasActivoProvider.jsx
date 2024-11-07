import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { showError } from "../helpers";
import axiosClient from "../config/axios";

export const ColumnasActivoContext = createContext();
const ColumnasActivoProvider = () => {
    const [activoColumnas, setActivoColumnas] = useState([]); 

    useEffect(() => {
        getColumnas();
    }, []);
    const getColumnas = async() => {
        try{
            const {data} = await axiosClient.get('/columna');
            setActivoColumnas(data.columnas);
        }catch(error){
            showError(error);
        }
    }

    return(
        <ColumnasActivoContext.Provider
            value={{
                activoColumnas
            }}
        >
            <Outlet />
        </ColumnasActivoContext.Provider>
    );
}

export default ColumnasActivoProvider;