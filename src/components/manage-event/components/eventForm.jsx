'use client';
import React from 'react';
import useCreateEvent from '../hooks/useCreateEvent';

export const EventForm = () => {
    const { formData, handleCreateEvent } = useCreateEvent();
    return (
        <form onSubmit={handleCreateEvent} action="POST">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-2">
                <div className="form-control md:col-span-4">
                    <label className="label text-sm">Event name</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Input your event name..."
                        className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                    />
                </div>
                <div className="form-control md:col-span-4">
                    <label className="label text-sm">Event date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="input input-accent input-sm input-bordered"
                    />
                </div>
                <div className="form-control md:col-span-4">
                    <label className="label text-sm">Event image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Input your event image..."
                        className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                    />
                </div>
                <div className="form-control col-span-full">
                    <label className="label text-sm">Event description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="textarea textarea-sm textarea-bordered h-24 placeholder-slate-500/30"
                        placeholder="Input your description..."
                    ></textarea>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="btn btn-sm bg-slate-700 hover:bg-slate-800 text-slate-200 font-light mt-4"
                >
                    Add Event
                </button>
            </div>
        </form>
    );
};
