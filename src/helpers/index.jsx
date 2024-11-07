import { Bounce, toast } from "react-toastify"

export const showError = (error) => {
    if(error && error.response){
        if(error.response.data){
            if(error.response.data.errors){
                error.response.data.errors.forEach(msg => toast.error(msg));
            }else{
                toast.error(error.response.data.msg);
            }
        }else{
            toast.error('Ocurrió un error en el servidor');
        }
    }else{
        toast.error('Ocurrió un error en el servidor');
    }
}