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
    },

    createPost: async (postData: any) => {
        const response = await fetch(`${API_URL}/Postagens`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao criar post');
        }

        return await response.json();
    },

    getPosts: async () => {
        const response = await fetch(`${API_URL}/Postagens`);
        if (!response.ok) {
            throw new Error('Erro ao buscar posts');
        }
        return await response.json();
    },

    getPostsByUserId: async (usuarioId: number) => {
        const response = await fetch(`${API_URL}/Postagens/usuario/${usuarioId}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar posts do usuário');
        }
        return await response.json();
    },

    getEventos: async () => {
        const response = await fetch(`${API_URL}/Eventos`);
        if (!response.ok) {
            throw new Error('Erro ao buscar eventos');
        }
        return await response.json();
    },

    getPostById: async (id: string) => {
        const response = await fetch(`${API_URL}/Postagens/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar post');
        }
        return await response.json();
    },

    createEvento: async (eventoData: any) => {
        const response = await fetch(`${API_URL}/Eventos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventoData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao criar evento');
        }

        return await response.json();
    },

    deletePost: async (id: number) => {
        const response = await fetch(`${API_URL}/Postagens/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao deletar post');
        }

        return true;
    },

    updateUsuarioProfile: async (id: number, profileData: any) => {
        const response = await fetch(`${API_URL}/Usuarios/${id}/perfil`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao atualizar perfil');
        }

        return true;
    }
};
