'use client';
import React, { useEffect, useState } from 'react';
import { Card } from './card';
import useRegisteredEvent from '../hooks/useRegisteredEvent';

export const Dashboard = () => {
    const { isLoading, dataEvent } = useRegisteredEvent();
    return (
        <div className="px-6 py-3 lg:py-6 w-full">
            <h1 className="text-2xl lg:text-3xl font-bold">
                Welcome back, Panji Pusaka
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4 w-full">
                {isLoading ? (
                    <>
                        <div className="skeleton w-96 h-48 bg-slate-100 opacity-35"></div>
                    </>
                ) : (
                    <>
                        {dataEvent.map((e) => {
                            return (
                                <Card
                                    key={e.events.id}
                                    image={e.events.image}
                                    title={e.events.title}
                                    date={e.events.dateTime}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};
