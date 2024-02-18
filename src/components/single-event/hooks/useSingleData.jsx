import React from 'react';

export default function useSingleData() {
    async function handleSingleDataEvent(eventId) {
        const res = await fetch(
            `https://eventmakers-api.fly.dev/events/${eventId}`,
            {
                cache: 'no-cache'
            }
        );
        const { data } = await res.json();
        return data;
    }

    return { handleSingleDataEvent };
}
