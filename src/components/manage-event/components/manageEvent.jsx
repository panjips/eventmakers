'use client';
import React from 'react';
import { EventTable } from '@/components/manage-event/components/eventTable';
import { EventForm } from '@/components/manage-event/components/eventForm';
import useGetCreatedEvent from '../hooks/useGetCreatedEvent';

export const ManageEvent = () => {
    const { dataEvent, isLoading } = useGetCreatedEvent();
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Event</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-4 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-700">
                    Add New Event
                </h3>
                <EventForm />
            </div>
            <EventTable data={dataEvent} />

        </div>
    );
};
