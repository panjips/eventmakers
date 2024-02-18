import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { CardEvent } from './cardEvent';
import useDataLanding from '../hooks/useDataLanding';

export const Events = async () => {
    const { handleDataEvents } = useDataLanding();
    const datas = await handleDataEvents();
    return (
        <div>
            <h2 className="text-lg lg:text-2xl text-slate-900 font-semibold">
                All Events
            </h2>
            <div className="mt-2 lg:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
                {datas.map((e) => {
                    return <CardEvent key={e.events.id} data={e.events} />;
                })}
            </div>
        </div>
    );
};
