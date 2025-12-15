const API_URL = 'http://localhost:5269/api';

export interface Galeria {
    id: number;
    titulo: string;
    midias: Array<{
        id: number;
        url: string;
        tipo: string;
        titulo?: string;
        dataCriacao?: string;
        usuarioId?: number;
        usuario?: {
            id: number;
            nome: string;
            apelido: string;
        };
    }>;
}

export const galeriaService = {
    getGalerias: async (): Promise<Galeria[]> => {
        const response = await fetch(`${API_URL}/Galerias`);
        if (!response.ok) {
            throw new Error('Erro ao buscar galerias');
        }
        return await response.json();
    },

    getGaleriaById: async (id: number): Promise<Galeria> => {
        const response = await fetch(`${API_URL}/Galerias/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar galeria');
        }
        return await response.json();
    },

    createGaleria: async (titulo: string): Promise<Galeria> => {
        const response = await fetch(`${API_URL}/Galerias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Erro ao criar galeria');
        }

        return await response.json();
    },
};
