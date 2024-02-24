'use client';

import { Card } from './card';
import useRegisteredEvent from '../hooks/useRegisteredEvent';

export const Dashboard = () => {
    const { isLoading, dataEvent, user } = useRegisteredEvent();
    return (
        <div className="px-6 py-3 lg:py-6 w-full">
            <h1 className="text-2xl lg:text-3xl font-bold">
                Welcome back, {user && user.name} 👋
            </h1>
            <h4 className="text-xl font-medium mt-[30px]">
                🎉 List Registered to Event
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4 w-full">
                {isLoading ? (
                    <>
                        <div className="skeleton w-96 h-48 bg-slate-100 opacity-35"></div>
                    </>
                ) : (
                    <>
                        {dataEvent !== null ? (
                            dataEvent.map((e) => {
                                return (
                                    <Card
                                        id={e.events.id}
                                        key={e.events.id}
                                        image={e.events.image}
                                        title={e.events.title}
                                        date={e.events.dateTime}
                                    />
                                );
                            })
                        ) : (
                            <p>Data belum ada.</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
