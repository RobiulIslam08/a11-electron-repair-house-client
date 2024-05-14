/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const ManageServiceProtected = ({children}) => {
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

export default ManageServiceProtected;