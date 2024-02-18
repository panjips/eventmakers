import React from 'react';

export default function useDataLanding() {
    async function handleDataEvents() {
        const res = await fetch('https://eventmakers-api.fly.dev/events/', {
            cache: 'no-cache'
        });
        const { data } = await res.json();
        return data;
    }

    return { handleDataEvents };
}
