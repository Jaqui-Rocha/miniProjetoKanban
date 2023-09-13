import { FundoAzul,Titulo1,Fonte24 } from "../componentes/Componentes";
import {useState} from 'react'
import { login } from "../services/Login";
import { TokenContext } from "../Context/TokenContext";
import { Link } from "react-router-dom"
function Home () {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const doLogin = async () => {
        const token = await login(email, password)
        setToken(token)
      }
    return(
        <TokenContext.Provider value={{ token }}>
        <FundoAzul>
            <Titulo1>Arnia Trello</Titulo1>
                <form>
                    <label htmlFor="email">   
                    E-mail
                    
                    </label>
                    <input type="email" value= {email}
                    onChange= {(event) => setEmail(event.target.value)}/>
                    <label htmlFor="password">
                    Senha
                    
                    </label>
                    <input type="password" value= {password}
                    onChange= {(event) => setPassword(event.target.value)}/>
                </form>
            <button onClick={doLogin}>Entrar</button>
            <Link to="cadastro"><Fonte24>Cadastre-se</Fonte24></Link>
            
        </FundoAzul>
        </TokenContext.Provider>
    )
}

export default Home