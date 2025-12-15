"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Usuario {
    id: number;
    nome: string;
    email: string;
    tipoUsuario: 'Leitor' | 'Admin';
    apelido?: string;
    bio?: string;
    fotoPerfil?: string;
}

interface AuthContextType {
    usuario: Usuario | null;
    login: (usuario: Usuario) => void;
    logout: () => void;
    updateProfile: (data: Partial<Usuario>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    // Carregar usuário do localStorage ao iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem('gda_user');
        if (storedUser) {
            setUsuario(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: Usuario) => {
        setUsuario(userData);
        localStorage.setItem('gda_user', JSON.stringify(userData));
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('gda_user');
    };

    const updateProfile = (data: Partial<Usuario>) => {
        if (!usuario) return;
        const updatedUser = { ...usuario, ...data };
        setUsuario(updatedUser);
        localStorage.setItem('gda_user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ usuario, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}
