import { AxiosResponse, isAxiosError } from "axios"
import api from "./api"
type LoginApi = {
    email: string
    password: string
}
export const Login = async (email:string, password:string)=> {
    try{
        const userData: AxiosResponse<LoginApi>= await  api.post('api/user/login',
        {
            email,
            password,
        }
        )
        const userPassword = userData.data.password
        const userEmail= userData.data.email
        localStorage.setItem(userPassword, password)
        return userEmail

    }catch(error){
        if(isAxiosError(error)){
            if(error.status===404){
                return "Usuário não encontrado!"
            }if(error.status===401){
                return "Senha incorreta!"
            }if(error.status=== 500){
                return "Erro no servidor!"
            }
            
        }
    }
}
   