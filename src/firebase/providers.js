import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const singInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, uid} = result.user
        return{
            ok: true,
            displayName, email, uid 
        }
    } catch (error) {
        const errorMessage=error.message;
        return{
            ok : false,
            errorMessage
            
        }
    }
}

export const singInWithFacebook = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, facebookProvider);
        const {displayName, email, uid} = result.user
        return{
            ok: true,
            displayName, email, uid 
        }
    } catch (error) {
        const errorMessage=error.message;
        return{
            ok : false,
            errorMessage
            
        }
    }
}

export const logoutFirebase = async()=>{
    return await FirebaseAuth.signOut();

}