import { useState } from "react";
import { redefinirSenha } from "./firebaseAutenticacao";
import '../css/redefinirSenha.css'

function RedefinirSenha(){

    const [email, setEmail]=useState('');
    const lidarRedefinicao=async(e)=>{
        e.preventDefault();
        await redefinirSenha(email);
        setEmail('')
    }
    return(
        <>
            <div className="geralSenha">
                <div className="titulo">
                    <h2>Redefinir a senha</h2>
                </div>
                <form>
                    <div className="email">
                        <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="redefinir">
                        <button onClick={lidarRedefinicao}>Redefinir Senha</button>
                    </div>
                </form>
            </div>
        </>
    )
};
export default RedefinirSenha;