import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export async function SendMemories(stateData) {
    const formData = new FormData()

    formData.append('nome', stateData.nome);
    formData.append('titulo', stateData.titulo);
    formData.append('texto', stateData.texto);
    formData.append('data', stateData.data);
    formData.append('local', stateData.local);
    formData.append('email', stateData.email);
    formData.append('contato', stateData.contato);
    formData.append('tags', JSON.stringify(stateData.tags));
    formData.append('imagem', stateData.imagem)

    const res = await api.post('/memories', formData);
    return res.data;
}