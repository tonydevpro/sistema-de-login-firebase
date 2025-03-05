import { useEffect, useState } from "react";
import { registrarUsuario, verificarLogin, sairLogin, loginGoogle } from "./firebaseAutenticacao";
import '../css/cadastro.css'

function Cadastro(){
    const [email, setEmail]=useState('');
    const [senha, setSenha]=useState('');
    const [usuario, setUsuario]=useState(null);

    useEffect(()=>{
        verificarLogin(setUsuario)
    }, []);

    const lidarLoginGoogle = async ()=>{
        try{
            const user=await loginGoogle();
            setUsuario(user);
        }catch(error){
            alert('erro no login com Google:'+ error.message);
        }
    }

    const lidarRegistro = async()=>{
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página
            try{
                await registrarUsuario(email, senha);
            }catch(error){
                alert(error.message);
            }
        };

    return(
        <section>
            <div className="menuGeral">
                <div className="menuTitulo">
                <h2>{usuario ? `Seja Bem-vindo, ${usuario.email}` : 'Faça Cadastro'}</h2>
                </div>
                <div className="menuLogin">
                    {usuario ? '':
                    <form>
                        <div className="loginUsuario">
                            <input type="email" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="loginSenha">
                            <input type="password" placeholder="Senha" onChange={(e)=>setSenha(e.target.value)}/>
                        </div>
                        
                        <div className='loginBt'>
                            <button onClick={lidarRegistro}>Registrar</button>
                        </div>
                        <div className="google">
                            <a href="#" onClick={lidarLoginGoogle}>google</a>
                            
                        </div>
                    </form>}
                    {usuario? <button type="button" onClick={sairLogin}>Sair</button>:''}
                    
                </div>
                
            </div>
        </section>
    )//final returne
};//final funçao menu

export default Cadastro;