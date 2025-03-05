import { auth, GoogleAuthProvider } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, getAuth  } from "firebase/auth";

/*Criar login */
export const registrarUsuario = async (email, senha) => {
    try{
        const credencialUsuario = await createUserWithEmailAndPassword(auth, email, senha);
        console.log('usuario registrado:', credencialUsuario.user)
        console.log('usuario registrado:', credencialUsuario)
        return credencialUsuario.user;
    }catch(error){
        console.error('erro ao registrar:', error.message);
        throw error
    }
};

/*Acessar Login */
export const acessarLogin = async (email, senha)=>{
    try{
        const credencialUsuario = await signInWithEmailAndPassword(auth, email, senha);
        console.log('usuario logado', credencialUsuario.user)
        console.log('usuario logado:', credencialUsuario)
        return credencialUsuario.user;
    }catch(error){
        console.log('usuario logado:', error.message);
        throw error;
    }
};

/* Sair Login */
export const sairLogin = async ()=>{
    try{
        await auth.signOut();
        console.log('usuario deslogado')
    }catch(error){
        console.error('erro ao deslogar:', error.message);
    }
}

/*verifica se o usuario esta logado */
export const verificarLogin = (callback) =>{
    auth.onAuthStateChanged((user)=>{
        callback(user);
    });
};

/* login Google */
export const loginGoogle = async ()=>{
    const provedor = new GoogleAuthProvider();
    try{
        //abre o pop-up do Google para login
        const resultado = await signInWithPopup(auth, provedor);
        return resultado.user;
    }catch(error){
        console.error('erro ao logar com google:', error.message);
        throw error;
    }
}

/* Redefinir Senha */
export const redefinirSenha = async(email)=>{
    const auth =getAuth();
    try{
        await sendPasswordResetEmail(auth, email); //envia o email de redefinição
        alert('E-mail de redefinição de senha enviado!');
    }catch(error){
        console.error('Erro ao enviar o e-mail de redefinição de senha:', error.message);
        alert('erro ao enviar o e-mail de redefinição de senha:' + error.message);
    }
}

export const loginCadastro = ()=>{
    
}