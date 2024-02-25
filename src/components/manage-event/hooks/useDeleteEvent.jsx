'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Toast from '@/components/shared/toast';

export default function useDeleteEvent() {
    const router = useRouter();
    const [idEvent, setIdEvent] = useState(null);
    const [token, setToken] = useState('');
    const { toastSuccess } = Toast();

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

        const { message } = await req.json();
        toastSuccess(message);
        router.refresh();
    }

    return { handleDeleteEvent, setIdEvent };
}
