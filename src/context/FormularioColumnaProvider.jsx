import { createContext, useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { showError } from "../helpers";
import axiosClient from "../config/axios";
import { toast } from "react-toastify";

export const FormularioColumnaContext = createContext();
const FormularioColumnaProvider = () => {
    const navigate = useNavigate();
    const crearColumna = async(columna) => {
        try{
            await axiosClient.post('/columna', columna);
            toast.success('Columna creada');
            navigate('/activo/columna');
        }catch(error){
            showError(error);
        }
    }
    return(
        <FormularioColumnaContext.Provider
            value={{
                crearColumna
            }}
        >
            <Outlet />
        </FormularioColumnaContext.Provider>
    );  
}

export default FormularioColumnaProvider;