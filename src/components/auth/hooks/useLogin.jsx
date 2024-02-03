'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
    const router = useRouter();

    async function handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const res = await fetch('https://eventmakers-api.fly.dev/auth/login', {
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
        console.log(message);
        localStorage.setItem('user', JSON.stringify(payload));
        Cookies.set('token', token);
        router.push('/dashboard');
    }

    return { handleLogin };
};
