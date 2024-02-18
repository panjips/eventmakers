'use client';
import React from 'react';
import { Container } from '@/components/shared/container';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { SyaratKetentuan } from './syaratKetentuan';

import useJoinEvent from '../hooks/useJoinEvent';

export const SingleEvent = ({ events, participants }) => {
    const { handleChange, phoneNumber, handleJoinEvent } = useJoinEvent();
    return (
        <Container>
            <div className="py-8">
                <img
                    src={events.image}
                    alt="Banner Event"
                    className="w-full rounded-lg"
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-4 gap-4">
                    <div className="grid grid-cols-1 gap-4 lg:col-span-9">
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h1 className="border-l-4 border-indigo-300 pl-2  text-xl text-slate-600 font-semibold">
                                {events.title}
                            </h1>
                        </div>
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h3 className="border-l-4 border-indigo-300 pl-2 font-semibold text-lg text-slate-600 mb-2">
                                Description
                            </h3>
                            <p className="text-sm text-slate-600 leading-5">
                                {events.description}
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:col-span-3 w-full bg-slate-50 rounded-lg shadow-sm flex justify-between flex-col">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-lg text-slate-600 ">
                                Join Event
                            </h3>
                            <div className="flex gap-4 items-center lg:items-start lg:flex-col">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-indigo-600" />
                                    <p className="text-xs text-slate-600">
                                        {events.dateTime}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-indigo-600" />
                                    <p className="text-xs text-slate-600">
                                        {participants.length} Participants
                                    </p>
                                </div>
                            </div>
                        </div>
                        <form
                            method="POST"
                            onSubmit={handleJoinEvent}
                            className="mt-4 flex flex-col lg:gap-4"
                        >
                            <div className="form-control">
                                <label className="text-sm py-1">
                                    Phone number
                                </label>
                                <input
                                    type="number"
                                    id="title"
                                    name="title"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Input your phone number..."
                                    className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                                />
                            </div>
                            <button className="mt-4 lg:mt-0 btn btn-primary bg-indigo-500 hover:bg-indigo-600 btn-sm text-slate-50">
                                Join Now
                            </button>
                        </form>
                    </div>
                    <div className="lg:col-span-9 p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                        <SyaratKetentuan />
                    </div>
                </div>
            </div>
        </Container>
    );
};
