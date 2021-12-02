import React,{UseContext} from 'react'
import {auth} from '../firebase'
const AuthContext=React.createContext();
export function useAuth(){
    return useContext(AuthContext)
}
export  function AuthProvider({children}) {
    const [CurrentUser, setCurrentUser] = useState=();
    function signup(email,password){
        auth.create
    }
    const value={
        CurrentUser
    }
    return {
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    }
}
 