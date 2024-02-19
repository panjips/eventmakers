'use client';
import React, { useState, useEffect } from 'react';
import { Slide, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function useJoinEvent() {
    const [user, setUser] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [token, setToken] = useState('');
    const { eventId } = useParams();
    const router = useRouter();

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

        if (!user || !token || !phoneNumber) {
            console.log(!user);
            toast.info('Silahkan login terlebih dahulu!', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Slide
            });
            router.push('/login');
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
