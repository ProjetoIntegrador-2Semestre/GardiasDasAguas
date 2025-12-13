const API_URL = 'http://localhost:5269/api';

export const api = {
    login: async (email: string, senha: string) => {
        const response = await fetch(`${API_URL}/Usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao fazer login');
        }

        return await response.json();
    },

    register: async (userData: any) => {
         const response = await fetch(`${API_URL}/Usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
           const errorText = await response.text();
           throw new Error(errorText || 'Erro ao cadastrar');
        }
        
        return await response.json();
    }
};
