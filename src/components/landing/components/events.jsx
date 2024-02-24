'use client';

import { useState, useEffect } from 'react';
import { CardEvent } from './cardEvent';
import useDataLanding from '../hooks/useDataLanding';
import { Container } from '@/components/shared/container';

export const Events = () => {
    const [events, setEvents] = useState(null);
    const [input, setInput] = useState();

    const { handleDataEvents } = useDataLanding();

    useEffect(() => {
        const fetchDataEvents = async () => {
            const events = await handleDataEvents(input);
            setEvents(events);
        };

        fetchDataEvents();
    }, [input, setEvents]);

    function handleChangeInput(e) {
        setInput(e.target.value);
    }

    return (
        <Container>
            <div className="my-8">
                <h2
                    className="text-2xl lg:text-3xl font-semibold text-center lg:float-start"
                    id="events"
                >
                    All Events
                </h2>

                <div className="join flex justify-center lg:justify-end my-8">
                    <div>
                        <div>
                            <input
                                onChange={handleChangeInput}
                                className="input input-accent input-bordered"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-2 lg:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
                    {events &&
                        events.map(({ events }) => {
                            return (
                                <CardEvent key={events.id} events={events} />
                            );
                        })}
                </div>
            </div>
        </Container>
    );
};
