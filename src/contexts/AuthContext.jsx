import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        username: '',
        roles: []
    });

    const [status, setStatus] = useState('no-authenticated'); // authenticated, no-authenticated, checking
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState('');

    const login = async (username, password) => {
        try {
            setStatus('checking');
            const res = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (res.status == 400) {
                const data = await res.json();
                if (data.type) {
                    setErrors(data.errors);
                    setStatus('no-authenticated');
                    return;
                }
                setError(data.message);
                setErrors([]);
                setStatus('no-authenticated');
                return;
            }
            if (res.status == 200) {
                setErrors([]);
                setError('');
                const data = await res.json();
                localStorage.setItem('access_token', data.access_token);
                const decoded = jwtDecode(data.access_token);
                setUser({
                    username: decoded.sub,
                    roles: decoded.role
                });
                setStatus('authenticated');
            }

        } catch (error) {
            console.log(error);
            setStatus('no-authenticated');
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, status, errors, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    return context;
}
