import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const register = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Kullanıcı bilgilerini Firestore'a kaydet
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                email,
                createdAt: new Date().toISOString(),
            });

            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message
            };
        }
    };

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message
            };
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message
            };
        }
    };

    return {
        user,
        loading,
        register,
        login,
        logout
    };
} 