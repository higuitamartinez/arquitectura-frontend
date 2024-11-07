import { useContext } from "react"
import { ActivoFormularioEditarContext } from "../context/ActivoFormularioEditarProvider"


const useActivoFormularioEditar = () => {
    return useContext(ActivoFormularioEditarContext);
}

export default useActivoFormularioEditar;