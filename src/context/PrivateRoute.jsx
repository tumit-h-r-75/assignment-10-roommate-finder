import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {


    const { user, loading } = use(AuthContext);
    

    const location = useLocation();
    


    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-xl text-primary"></span>
        </div>
    }

    if (user && user?.email) {

        return children;
    }
    return <Navigate state={location.pathname}  to="/auth/login" ></Navigate>


};

export default PrivateRoute;