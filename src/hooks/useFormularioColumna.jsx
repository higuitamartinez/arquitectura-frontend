import { useContext } from "react"
import { FormularioColumnaContext } from "../context/FormularioColumnaProvider";

const useFormularioColumna = () => {
    return useContext(FormularioColumnaContext);
}

export default useFormularioColumna;