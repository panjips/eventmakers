'use client';
import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { InputContext } from '../providers';

export default function useEditEvent() {
    const [token, setToken] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const router = useRouter();
    const { event, setEvent, isEdit, setIsEdit } = useContext(InputContext);
    useEffect(() => {
        setToken(Cookies.get('token'));
    }, []);

    function handleIsEdit(data) {
        setIsEdit(true);
        setEvent(() => ({
            ...event,
            title: data.title,
            date: data.dateTime,
            image: data.image,
            description: data.description,
            id: data.id
        }));
    }

    function handleCancelEdit() {
        setIsEdit(false);
        setEvent((event) => ({
            ...event,
            title: '',
            date: '',
            image: '',
            description: ''
        }));
    }

    async function handleEditEvent(e) {
        e.preventDefault();
        const req = await fetch(
            `https://eventmakers-api.fly.dev/events/${event.id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: event.title,
                    description: event.description,
                    image: event.image,
                    dateTime: event.date
                })
            }
        );

        const res = await req.json();
        handleCancelEdit();
        router.refresh();
        console.log(res);
    }

    return {
        handleEditEvent,
        handleCancelEdit,
        handleIsEdit,
        isEdit,
        setIsEdit
    };
}
