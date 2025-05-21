import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {


    const { user, loading } = use(AuthContext);
    

    const location = useLocation();
    


    if (loading) {
        return <div>
            <Loader></Loader>
        </div>
    }

    if (user && user?.email) {

        return children;
    }
    return <Navigate state={location.pathname}  to="/auth/login" ></Navigate>


};

export default PrivateRoute;