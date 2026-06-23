import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
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

export async function GetMemoriesPendentes() {

    try {

        const consulta = query(
            
            collection(db, "memorias"), //indico a coleção;
            where("postada", "==", false) //mas quero apenas as memórias com atributo "postada" false;
        )
            
        const snapshot = await getDocs(consulta);

        const memorias = snapshot.docs.map(cada => {
            return {
                id: cada.id,
                ...cada.data()
            }
        });

        return memorias;
    }
    catch (error) {

        console.error("Erro ao buscar memórias pendentes: ", error);
        throw error;
    }
}

export async function GetMemoriesPostadas() {

    try {

        const consulta = query(

            collection(db, "memorias"),
            where("postada", "==", true)
        )

        const snapshot = await getDocs(consulta);
        const memorias = snapshot.docs.map(cada => {
            return {
                id: cada.id,
                ...cada.data()
            }
        })

        return memorias;

    } catch(error) {

        console.error("Erro ao buscar memórias postadas: ", error);
        throw error;
    }
}

export async function GetMemoriasDenunciadas() {

    try {

        const colecao = collection(db, "denuncia");
        const snapshot = await getDocs(colecao);

        const denunciadas = snapshot.docs.map(cada => {
            return {
                id: cada.id,
                ...cada.data()
            }
        })

        return denunciadas;

    } catch(error) {

        console.log("Erro ao buscar memórias denunciadas: ", error);
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

export async function GetMemoriesByPontos(ponto) {

    try {

        const consulta = query(

            collection(db, "memorias"),
            where("ponto_memoria", "==", ponto),
            where("postada", "==", true)
        )

        const snapshot = await getDocs(consulta);
        const memorias = snapshot.docs.map(cada => {

            return {
                id: cada.id,
                ...cada.data()
            }
        });

        return memorias;

    } catch(error) {

        console.error("Erro ao buscar memorias do ponto: ", error);
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

export async function UpdateMemoria(id, dadosAtualizados){
    try {
        const ref = doc(db, 'memorias', id)
        await updateDoc(ref, dadosAtualizados)
        console.log("Dados atualizados com sucesso!")
        return true
    } catch (error) {
        console.log("Memórias não atualizadas: ", error)
        throw error
    }
}

export async function DeleteMemoria(id) {
    try {
        const ref = doc(db, 'memorias', id)
        await deleteDoc(ref)
        console.log("Dados deletados com sucesso!")
        return true;
    } catch (error) {
        console.log("Erro ao deletar os dados: ", error)
        throw error
    }
}

export async function DeleteDenuncia(id) {
    try {
        const ref = doc(db, 'denuncia', id)
        await deleteDoc(ref)
        console.log("Dados deletados com sucesso!")
        return true;
    } catch (error) {
        console.log("Erro ao deletar os dados: ", error)
        throw error
    }
}

export async function DenunciarMemorias(dados) {

    try {

        const denuncia = {
            idMemoria: dados.id_memoria,
            motivo: dados.motivo,
            data: new Date()
        }

        const docRef = await addDoc(collection(db, "denuncia"), denuncia);
        console.log("Salvo com sucesso! ID:", docRef.id);
        return { message: "Sucesso!", id: docRef.id };
    } catch (error) {
        console.error("Erro ao processar:", error);
        throw error;
    }

}