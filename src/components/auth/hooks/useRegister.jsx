import React from 'react';

export default function useRegister() {
    async function handleRegister(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const res = await fetch(
            'https://eventmakers-api.fly.dev/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const data = await res.json();
    }

    return { handleRegister };
}
