import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export const user = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (userFireBase) => {
            unsubscribe();
            resolve(userFireBase)
        }, reject)
    })
}