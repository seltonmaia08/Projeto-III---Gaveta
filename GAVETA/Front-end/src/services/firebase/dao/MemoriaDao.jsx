import db from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

console.log('Primeiro console de execução...')
const MemoriaDao = {

    async getAll() {
        console.log('Segundo console de execução...')

        const memoriaRef = collection(db, "memorias")
        const querySnapshot = await getDocs(memoriaRef)
        querySnapshot.forEach(
            memorias => {
                console.log(`ID: ${memorias.id} titulo: ${memorias.data().titulo}`)
            });
    }

}

export default MemoriaDao


