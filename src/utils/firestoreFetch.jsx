import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (parseInt(idCategory)) {
        q = query(collection(db, "products"), where('idCategory', '==', Number(idCategory)));
    } else {
        q = query(collection(db, "products"), orderBy('brand'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      console.log("No se encuentra el producto!");
    }
}


