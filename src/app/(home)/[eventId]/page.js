import React from 'react';
import { SingleEvent } from '@/components/single-event/components/singleEvent';
import useSingleData from '@/components/single-event/hooks/useSingleData';

export default async function EventPage({ params }) {
    const { eventId } = params;
    const { handleSingleDataEvent } = useSingleData();
    const { events, participants } = await handleSingleDataEvent(eventId);
    return (
        <div>
            <SingleEvent events={events} participants={participants} />
        </div>
    );
}
