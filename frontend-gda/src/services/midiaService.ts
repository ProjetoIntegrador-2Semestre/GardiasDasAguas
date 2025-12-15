const API_URL = 'http://localhost:5269/api';

export interface Midia {
    id: number;
    url: string;
    tipo: string;
    titulo?: string;
    dataCriacao?: string;
    galeriaId: number;
    usuarioId?: number;
    usuario?: {
        id: number;
        nome: string;
        apelido: string;
    };
}

export interface CreateMidiaData {
    url: string;
    tipo: string;
    titulo?: string;
    dataCriacao?: string;
    galeriaId: number;
    usuarioId: number;
}

export const midiaService = {
    getMidias: async (): Promise<Midia[]> => {
        const response = await fetch(`${API_URL}/Midias`);
        if (!response.ok) {
            throw new Error('Erro ao buscar mídias');
        }
        return await response.json();
    },

    getMidiaById: async (id: number): Promise<Midia> => {
        const response = await fetch(`${API_URL}/Midias/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar mídia');
        }
        return await response.json();
    },

    createMidia: async (formData: FormData, usuarioId: number, tipoUsuario: string): Promise<Midia> => {
        const response = await fetch(`${API_URL}/Midias`, {
            method: 'POST',
            headers: {
                'X-Usuario-Id': usuarioId.toString(),
                'X-Usuario-Tipo': tipoUsuario,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao criar mídia');
        }

        return await response.json();
    },

    updateMidia: async (id: number, midiaData: Partial<Midia>, usuarioId: number, tipoUsuario: string): Promise<void> => {
        const response = await fetch(`${API_URL}/Midias/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Usuario-Id': usuarioId.toString(),
                'X-Usuario-Tipo': tipoUsuario,
            },
            body: JSON.stringify({ ...midiaData, id }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao atualizar mídia');
        }
    },

    deleteMidia: async (id: number, usuarioId: number, tipoUsuario: string): Promise<void> => {
        const response = await fetch(`${API_URL}/Midias/${id}`, {
            method: 'DELETE',
            headers: {
                'X-Usuario-Id': usuarioId.toString(),
                'X-Usuario-Tipo': tipoUsuario,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao deletar mídia');
        }
    },
};
