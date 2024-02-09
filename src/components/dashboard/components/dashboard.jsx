'use client';
import React, { useEffect } from 'react';
import { Card } from './card';
import useRegisteredEvent from '../hooks/useRegisteredEvent';

export const Dashboard = () => {
    const { handleDataEvents, dataEvent, setDataEvent } = useRegisteredEvent();


    return (
        <div className="px-6 py-3 lg:py-6">
            <h1 className="text-2xl lg:text-3xl text-slate-600 font-bold">
                Welcome back, Panji Pusaka
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
                <Card
                    image={
                        'https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png'
                    }
                />
            </div>
        </div>
    );
};
