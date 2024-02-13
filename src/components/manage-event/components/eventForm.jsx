'use client';
import React from 'react';
import useCreateEvent from '../hooks/useCreateEvent';
import useEditEvent from '../hooks/useEditEvent';

export const EventForm = () => {
    const { event, handleCreateEvent, handleChange } = useCreateEvent();
    const { isEdit, handleCancelEdit, handleEditEvent } = useEditEvent();
    return (
        <form
            onSubmit={isEdit ? handleEditEvent : handleCreateEvent}
            method={isEdit ? 'PATCH' : 'POST'}
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-2">
                <div className="form-control md:col-span-4">
                    <label className="label text-sm">Event name</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
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
                        value={event.date}
                        onChange={handleChange}
                        className="input input-accent input-sm input-bordered"
                    />
                </div>
                <div className="form-control md:col-span-4">
                    <label className="label text-sm">Event image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={event.image}
                        onChange={handleChange}
                        placeholder="Input your event image..."
                        className="input input-accent input-sm input-bordered placeholder-slate-500/30"
                    />
                </div>
                <div className="form-control col-span-full">
                    <label className="label text-sm">Event description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
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
                    {isEdit ? 'Edit Event' : 'Add Event'}
                </button>
                {isEdit && (
                    <button
                        className="btn btn-sm bg-slate-700 hover:bg-slate-800 text-slate-200 font-light mt-4 ml-2"
                        onClick={handleCancelEdit}
                    >
                        Cancel Edit
                    </button>
                )}
            </div>
        </form>
    );
};
