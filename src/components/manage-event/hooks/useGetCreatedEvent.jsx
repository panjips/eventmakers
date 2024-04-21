'use client';

import { useEffect, useState } from 'react';

export default function useGetCreatedEvent() {
    const [dataEvent, setDataEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState('');

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
    }, []);

    async function getCreatedUserEvents() {
        const res = await fetch('https://eventmakers.devscale.id/events/', {
            cache: 'no-store'
        });
        const { data } = await res.json();

        let createdEvents = Array.from(data).filter((e) => {
            return e.events.author === user.id;
        });

        return createdEvents;
    }

    useEffect(() => {
        const handleDatas = async () => {
            const datas = await getCreatedUserEvents();
            datas.length !== 0 ? setDataEvent(datas) : setDataEvent(null);
            setIsLoading(false);
        };

        handleDatas();
    });

    return { dataEvent, isLoading };
}
