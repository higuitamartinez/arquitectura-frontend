import { useContext } from "react"
import { ColumnasActivoContext } from "../context/ColumnasActivoProvider"

const useColumnasActivo = () => {
    return useContext(ColumnasActivoContext);
}

export default useColumnasActivo;