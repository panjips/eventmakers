import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { CardEvent } from './cardEvent';

export const Events = () => {
    return (
        <div>
            <h2 className="text-lg lg:text-2xl text-slate-900 font-semibold">
                Current Events
            </h2>
            <div className="mt-2 lg:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
            </div>
        </div>
    );
};
