'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Toast from '@/components/shared/toast';

export default function useLogin() {
    const router = useRouter();
    const { toastSuccess, toastError } = Toast();
    async function handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const res = await fetch('https://eventmakers.devscale.id/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const { payload, token, message } = await res.json();
        if (!payload) {
            toastError('Error credentials!');
            return;
        }
        localStorage.setItem('user', JSON.stringify(payload));
        Cookies.set('token', token);
        toastSuccess('Log in successfully');
        router.push('/dashboard');
        router.refresh();
    }

    return { handleLogin };
}
