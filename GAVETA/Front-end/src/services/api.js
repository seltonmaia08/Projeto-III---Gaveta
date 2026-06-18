import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { memo } from "react";

export async function SendMemories(dados) {

    try {

        const formDataCloudinary = new FormData();
        formDataCloudinary.append("file", dados.imagem);
        formDataCloudinary.append("upload_preset", "gaveta_preset");
        const respostaCloudinary = await fetch(
            "https://api.cloudinary.com/v1_1/dy1ve7sgm/image/upload",
            { method: "POST", body: formDataCloudinary }
        );

        const dadosDaImagem = await respostaCloudinary.json();
        const linkImage = dadosDaImagem.secure_url;

        console.log(dados)
        const sendMemories = {
            aprovadaPorAdm: '',
            categoriaMemoria: '',
            contatoAutor: [dados.email, dados.contato],
            dataMemoria: dados.data,
            imagensURL: linkImage,
            nomeAutor: dados.nome,
            ponto_memoria: dados.local,
            postada: false,
            recusada: false,
            relatoMemoria: dados.texto,
            tags: dados.tags,
            titulo: dados.titulo,
            dataCriacao: new Date()
        }

        const docRef = await addDoc(collection(db, "memorias"), sendMemories);
        console.log("Salvo com sucesso! ID:", docRef.id);
        return { message: "Sucesso!", id: docRef.id };
    } catch (error) {
        console.error("Erro ao processar:", error);
        throw error;
    }

}

export async function GetMemories() {

    try {

        const colecao = collection(db, "memorias")
        const snapshot = await getDocs(colecao);

        const memorias = snapshot.docs.map(cada => {
            return {
                id: cada.id,
                ...cada.data()
            }
        });

        return memorias;
    }
    catch (error) {

        console.error("Erro ao buscar memórias: ", error);
        throw error;
    }
}

export async function GetMemoriesByID(id) {

    try {

        const especifico = doc(db, "memorias", id); // cria referência, procurando na coleção memórias,
        // do documento específico com ID (localização)
        const snapshot = await getDoc(especifico); // busca por esse documento (puxa as informações);

        if(!snapshot.exists()) {return null} // 

        return {
            id: snapshot.id,
            ...snapshot.data()
        };

    } catch (error) {

        console.error("Erro ao buscar memória: ", error);
        throw error;
    }
}

export async function GetPontos() {

    try {

        const colecao = collection(db, "ponto_turisticos");
        const snapshot = await getDocs(colecao);

        const pontos = snapshot.docs.map(ponto => {
            return {
                id: ponto.id,
                ...ponto.data()
            }
        });

        return pontos;

    } catch(error) {

        console.error("Erro ao buscar pontos turísticos: ", error);
        throw error;
    }
}

export async function GetPontosByID(id) {

    try {

        const referencia = doc(db, "ponto_turisticos", id);
        const snapshot = await getDoc(referencia);

        if(!snapshot.exists()) {return null}

        return {
            id: snapshot.id,
            ...snapshot.data()
        }
        
    } catch(error) {
        
        console.error("Erro: ", error);
        throw error;
    }
}