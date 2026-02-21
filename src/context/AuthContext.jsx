'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '@/lib/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get('/me');
                if (response.data && response.data.email) {
                    setUser({
                        email: response.data.email,
                        user_id: response.data.user_id
                    });
                }
            } catch (error) {
                console.log("No valid session found.");
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    // Listen for unauthorized events from the API interceptor
    useEffect(() => {
        const handleUnauthorized = () => {
            setUser(null);
            setLoading(false);
        };

        window.addEventListener('auth:unauthorized', handleUnauthorized);
        return () => window.removeEventListener('auth:unauthorized', handleUnauthorized);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await api.post('/login', { email, password });
            const { user_id } = response.data;
            setUser({ email, user_id });
            return { success: true };
        } catch (error) {
            const detail = error.response?.data?.detail;
            return {
                success: false,
                message: typeof detail === 'string' ? detail : (detail?.message || 'Login failed'),
                errorCode: detail?.error
            };
        }
    };

    const signup = async (userId, email, password) => {
        try {
            await api.post('/signup', { user_id: userId, email, password });
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.detail || 'Signup failed'
            };
        }
    };

    const logout = async () => {
        try {
            await api.post('/logout');
        } catch (error) {
            console.error("Error logging out", error);
        } finally {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
