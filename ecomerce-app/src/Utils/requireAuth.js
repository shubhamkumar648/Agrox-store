import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/Auth-context";

const RequireAuth = ({children}) =>{
  const location = useLocation();
  const {user} = useAuth();
  

  return user ? (children) : (<Navigate to='/login'  state={{from : location}} replace/>)
}

export default RequireAuth