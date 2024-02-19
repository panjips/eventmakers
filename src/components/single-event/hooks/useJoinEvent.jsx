'use client';
import React, { useState, useEffect } from 'react';
import Toast from '@/components/shared/toast';
import Cookies from 'js-cookie';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function useJoinEvent() {
    const [user, setUser] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [token, setToken] = useState('');
    const { eventId } = useParams();
    const router = useRouter();
    const { toastInfo, toastWarning } = Toast();

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
            console.log(!user);
            toastInfo('Silahkan login terlebih dahulu!');
            router.push('/login');
            return;
        } else if (!phoneNumber) {
            toastWarning('Field cannot empty!');
            return;
        }

        const req = await fetch(
            `https://eventmakers-api.fly.dev/events/${eventId}/join`,
            {
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
            }
        );

        const { data, message } = await req.json();
        router.refresh();
        setPhoneNumber('');
    }

    function handleIsJoinEvent(participants) {
        console.log(user);
        if (!user) return true;
        return !Array.from(participants).find((e) => e.email === user.email);
    }

    return { handleChange, phoneNumber, handleJoinEvent, handleIsJoinEvent };
}
