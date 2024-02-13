'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function useDeleteEvent() {
    const router = useRouter();
    const [idEvent, setIdEvent] = useState(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(Cookies.get('token'));
    }, []);

    async function handleDeleteEvent(e) {
        e.preventDefault();
        const req = await fetch(
            `https://eventmakers-api.fly.dev/events/${idEvent}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const res = await req.json();
        router.refresh();
        console.log(res);
    }

    return { handleDeleteEvent, setIdEvent };
}
