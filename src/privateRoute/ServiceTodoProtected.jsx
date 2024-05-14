import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const ServiceTodoProtected = ({children}) => {
	const {user, loading} = useAuth()

	if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default ServiceTodoProtected;