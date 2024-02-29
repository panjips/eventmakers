'use client';

import { useState, useEffect } from 'react';
import Toast from '@/components/shared/toast';
import { useParams } from 'next/navigation';

export default function useJoinEvent() {
    const [user, setUser] = useState('');
    const { eventid } = useParams();
    const { toastWarning, toastSuccess } = Toast();

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
    }, []);

    async function handleJoinEvent(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;

        if (!name || !email || !phoneNumber) {
            toastWarning('Field cannot empty!');
            return;
        }

        const res = await fetch(
            `https://eventmakers-api.fly.dev/events/${eventid}/join`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phoneNumber
                })
            }
        );

        const { message } = await res.json();
        toastSuccess(message);
        window.location.reload();
    }

    function handleIsJoinEvent(participants) {
        if (!user) return true;
        return !Array.from(participants).find((e) => e.email === user.email);
    }

    return {
        handleJoinEvent,
        handleIsJoinEvent
    };
}
