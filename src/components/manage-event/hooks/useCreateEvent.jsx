'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function useCreateEvent() {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
        setToken(Cookies.get('token'));
    }, []);

    async function handleCreateEvent(e) {
        e.preventDefault();

        const title = e.target.title.value;
        const date = e.target.date.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const req = await fetch('https://eventmakers-api.fly.dev/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                description: description,
                image: image,
                dateTime: date,
                author: user.id
            })
        });
        const res = await req.json();
        console.log(res);
    }

    return { handleCreateEvent };
}
