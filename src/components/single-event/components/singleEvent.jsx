'use client';

import { Container } from '@/components/shared/container';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { TermsConditions } from './termsConditions';
import Image from 'next/image';
import useJoinEvent from '../hooks/useJoinEvent';

export const SingleEvent = ({ events, participants }) => {
    const {
        handleChange,
        name,
        email,
        phoneNumber,
        handleJoinEvent,
        handleIsJoinEvent
    } = useJoinEvent();
    const isJoin = handleIsJoinEvent(participants);
    console.log(isJoin);
    return (
        <Container>
            <div className="py-8">
                <Image
                    src={events.image}
                    width={800}
                    height={800}
                    alt="event-img"
                    unoptimized={true}
                    className="w-full rounded-lg"
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-4 gap-4">
                    <div className="grid grid-cols-1 gap-4 lg:col-span-9">
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h1 className="border-l-4 border-neutral pl-2  text-xl text-slate-600 font-semibold">
                                {events.title}
                            </h1>
                        </div>
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h3 className="border-l-4 border-neutral pl-2 font-semibold text-lg text-slate-600 mb-2">
                                Description
                            </h3>
                            <p className="text-sm text-slate-600 leading-5">
                                {events.description}
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:col-span-3 w-full bg-slate-50 rounded-lg shadow-sm flex justify-between flex-col">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-lg  text-slate-600 ">
                                Join Event
                            </h3>
                            <div className="flex gap-4 items-center lg:items-start lg:flex-col">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-neutral" />
                                    <p className="text-xs text-slate-600">
                                        {events.dateTime}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-neutral" />
                                    <p className="text-xs text-slate-600">
                                        {participants.length} Participants
                                    </p>
                                </div>
                            </div>
                        </div>
                        {isJoin && (
                            <form
                                method="POST"
                                onSubmit={handleJoinEvent}
                                className="mt-4 flex flex-col gap-3 lg:gap-4"
                            >
                                <div className="form-control">
                                    <label className="text-sm">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                        placeholder="Input your name..."
                                        className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="text-sm">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        placeholder="Input your email..."
                                        className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="text-sm">
                                        Phone number
                                    </label>
                                    <input
                                        type="number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Input your phone number..."
                                        className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                                    />
                                </div>
                                <button className="mt-2 lg:mt-0 btn btn-neutral btn-sm text-slate-50">
                                    Join Now
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="lg:col-span-9 p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                        <TermsConditions />
                    </div>
                </div>
            </div>
        </Container>
    );
};
