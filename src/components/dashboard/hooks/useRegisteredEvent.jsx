'use client';

import { useEffect, useState } from 'react';

export default function useRegisteredEvent() {
    const [dataEvent, setDataEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState('');
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
    }, []);

    async function handleDataEvents() {
        const res = await fetch('https://eventmakers-api.fly.dev/events/');
        const { data } = await res.json();

        function isJoin(participants) {
            return Array.from(participants).find((e) => e.email === user.email);
        }

        let userEvents = Array.from(data).filter((e) => {
            const participants = Array.from(e.participants);
            if (participants.length !== 0) {
                let testing = isJoin(participants);
                return testing !== undefined;
            }
            return;
        });

        return userEvents;
    }

    useEffect(() => {
        const handleDatas = async () => {
            const datas = await handleDataEvents();
            datas.length !== 0 ? setDataEvent(datas) : setDataEvent(null);
            setIsLoading(false);
        };

        handleDatas();
    }, [isLoading]);

    return { dataEvent, isLoading, user };
}
