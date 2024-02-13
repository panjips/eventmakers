'use client';
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { InputContext } from '../providers';

export default function useCreateEvent() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const { event, setEvent } = useContext(InputContext);
    const [token, setToken] = useState('');

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
        setToken(Cookies.get('token'));
    }, []);

    async function handleChange(e) {
        const { name, value } = e.target;
        setEvent((event) => ({ ...event, [name]: value }));
    }

    async function handleCreateEvent(e) {
        e.preventDefault();

        if (
            event.date.length === 0 ||
            event.title.length === 0 ||
            event.description.length === 0 ||
            event.image.length === 0
        ) {
            return;
        }

        const req = await fetch('https://eventmakers-api.fly.dev/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: event.title,
                description: event.description,
                image: event.image,
                dateTime: event.date,
                author: user.id
            })
        });
        const res = await req.json();
        router.refresh();
        setEvent((event) => ({
            ...event,
            title: '',
            date: '',
            image: '',
            description: ''
        }));
        console.log(event);
        console.log(res);
    }

    return { handleCreateEvent, event, handleChange };
}
