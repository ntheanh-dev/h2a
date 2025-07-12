import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
    // const { data } = useSelector((state) => state.user);
    const data = {
        username: 'test',
    }

    return data.username ? children : <Navigate to="/login" />;
};

export default RequiredAuth;
