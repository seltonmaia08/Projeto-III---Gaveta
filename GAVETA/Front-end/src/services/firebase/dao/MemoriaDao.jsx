import db from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const MemoriaDao = {

    async getAll() {
        const memoriaRef = collection(db, "memoria")
        const querySnapshot = await getDocs(memoriaRef)
        querySnapshot.forEach(
            memorias => {
                console.log(`ID: ${memorias.id} titulo: ${memorias.titulo}`)
            });
    }

}

export default MemoriaDao


