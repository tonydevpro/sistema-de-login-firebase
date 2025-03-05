import {useState, useEffect} from "react";
import { acessarLogin, sairLogin, verificarLogin, loginGoogle } from "./firebaseAutenticacao";
import Cadastro from "./Cadastro";
import RedefinirSenha from "./RedefinirSenha";
import '../css/login.css'

const Login =()=>{
    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('');
    const [usuario, setUsuario]=useState(null);
    const [mostrarCadastro,setMostrarCadastro]=useState(false)
    const [resetSenha, setResetSenha ]=useState(false)

    useEffect(()=>{
        verificarLogin(setUsuario);
    }, []);

    const lidarLogin = async()=>{
        try{
            await acessarLogin(email, senha);
        }catch(error){
            alert(error.message);
        }
    };
    const lidarLoginGoogle = async ()=>{
            try{
                const user=await loginGoogle();
                setUsuario(user);
            }catch(error){
                alert('erro no login com Google:'+ error.message);
            }
        }
    
    

    return(
        <>
        {mostrarCadastro? (<Cadastro/>) : resetSenha? (<RedefinirSenha/>) : 
        <div className="geralRegistro">
            <h2>{usuario ? `Bem-vindo, ${usuario.email}` : 'Faça Login'}</h2>
            {!usuario ? (
                <div className="registro">
                    <input type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" onChange={(e)=>setSenha(e.target.value)}/>
                    <div className="loginReset">
                            <a href="#" onClick={()=>setResetSenha(!resetSenha)}><p><u>Esqueceu senha?</u></p></a>
                    </div>
                    <div className="bt">
                        <button onClick={lidarLogin}>Login</button>
                        <button onClick={()=>setMostrarCadastro(!mostrarCadastro)}>Registrar</button>
                    </div>
                    <div className="google">
                    <a href="#" onClick={lidarLoginGoogle}>google</a>
                    </div>
                </div>
            ) : (
                <button onClick={sairLogin}>Sair</button>
            )
        }
        </div>}
        </>
    )

}
export default Login;