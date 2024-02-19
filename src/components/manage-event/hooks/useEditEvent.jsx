'use client';
import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { InputContext } from '../providers';
import Toast from '@/components/shared/toast';

export default function useEditEvent() {
    const [token, setToken] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const router = useRouter();
    const { event, setEvent, isEdit, setIsEdit } = useContext(InputContext);
    const { toastWarning, toastSuccess } = Toast();
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

        if (
            event.date.length === 0 ||
            event.title.length === 0 ||
            event.description.length === 0 ||
            event.image.length === 0
        ) {
            toastWarning('Input field cannot empty!');
            return;
        }

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

        const { message } = await req.json();
        toastSuccess(message);
        handleCancelEdit();
        router.refresh();
    }

    return {
        handleEditEvent,
        handleCancelEdit,
        handleIsEdit,
        isEdit,
        setIsEdit
    };
}
