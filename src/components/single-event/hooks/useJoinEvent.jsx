'use client';

import { useState, useEffect } from 'react';
import Toast from '@/components/shared/toast';
import Cookies from 'js-cookie';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function useJoinEvent() {
    const [user, setUser] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [token, setToken] = useState('');
    const { eventid } = useParams();
    const router = useRouter();
    const { toastInfo, toastWarning, toastSuccess } = Toast();

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
        setToken(Cookies.get('token'));
    }, []);

    function handleChange(e) {
        const { value } = e.target;
        setPhoneNumber(value);
    }

    async function handleJoinEvent(e) {
        e.preventDefault();

        if (!user || !token) {
            toastInfo('Silakan log in terlebih dahulu!');
            router.push('/login');
            return;
        } else if (!phoneNumber) {
            toastWarning('Field cannot empty!');
            return;
        }

        await fetch(`https://eventmakers-api.fly.dev/events/${eventid}/join`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                phoneNumber: phoneNumber
            })
        });

        toastSuccess('Berhasil bergabung ke event!');
        router.refresh();
        setPhoneNumber('');
    }

    function handleIsJoinEvent(participants) {
        if (!user) return true;
        return !Array.from(participants).find((e) => e.email === user.email);
    }

    return { handleChange, phoneNumber, handleJoinEvent, handleIsJoinEvent };
}
