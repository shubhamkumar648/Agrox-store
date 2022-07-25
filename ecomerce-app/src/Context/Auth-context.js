import { createContext,useState ,useContext} from "react";

const Authcontext = createContext()

  const  AuthProvider = ({children}) => {

    const encodedToken = localStorage.getItem("token")

    const [user, setUser] = useState(null)

   return (

    <Authcontext.Provider value={{user , setUser, encodedToken}}>
       {children}
    </Authcontext.Provider>

     )
}

  const useAuth = () => useContext(Authcontext)

 export {useAuth,AuthProvider}