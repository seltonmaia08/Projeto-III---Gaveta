import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

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

