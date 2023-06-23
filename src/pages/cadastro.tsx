import { FundoAzul,Titulo1,Titulo2 } from "../componentes/Componentes";
import  { useState} from 'react'
import { EnvioCadastro } from "../servicos/envioCadastro";
import {useNavigate} from 'react-router-dom';
function Cadastro(){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [password1, setPassword1]= useState("")
    const navigate = useNavigate();
      const validacaoSenha  = () =>{
        if(password === password1){
            EnvioCadastro(email,password,name);
            alert('Usuário criado com sucesso');
            navigate('/')
            console.log('até aqui roda')
             
        }
        else{
            alert('As senhas precisam ser iguais nos dois campos.')
        }
      }
    return(
     
        <FundoAzul>
            <Titulo1>Arnia Trello</Titulo1>
            <Titulo2>Cadastro</Titulo2>
                <form>
                    <label htmlFor="name">   
                    Nome   
                    <input type="text" value= {name}
                    onChange= {(event) => setName(event.target.value)}/>
                                  
                    </label>
                    <label htmlFor="email">   
                    E-mail  
                    <input type="email" id="email" value= {email}
                    onChange= {(event) => setEmail(event.target.value)} />                  
                    </label>
                    
                    <label htmlFor="password">
                    Senha 
                    <input type="password" id="password" value= {password}
                    onChange= {(event) => setPassword(event.target.value)}/>                
                    </label>
                    
                    <label htmlFor="password1">
                    Repita sua Senha   
                    <input type="password" id="password1" value= {password1}
                    onChange= {(event) => setPassword1(event.target.value)}/>              
                    </label>
                    
                </form>
            <button onClick= {validacaoSenha}>Cadastrar</button>           
       
        </FundoAzul>
       
    )
}

export default Cadastro