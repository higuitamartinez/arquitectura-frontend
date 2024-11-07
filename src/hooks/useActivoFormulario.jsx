import { useContext } from "react"
import { ActivoFormularioContext } from "../context/ActivoFormularioProvider"


const useActivoFormulario = () => {
    return useContext(ActivoFormularioContext);
}

export default useActivoFormulario;