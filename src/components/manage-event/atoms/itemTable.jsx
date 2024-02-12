'use client';
import React, { useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import useDeleteEvent from '../hooks/useDeleteEvent';

export const ItemTable = ({ data }) => {
    const { handleDeleteEvent, setIdEvent } = useDeleteEvent();
    const { title, description, dateTime, id } = data;
    useEffect(() => {
        setIdEvent(id);
    }, []);

    return (
        <>
            <tr className="hover:bg-slate-100 transition delay-150 duration-300 ease-in-out">
                <td className="text-center w-1/2 lg:w-fit">
                    <p className="font-bold overflow-hidden text-ellipsis line-clamp-2">
                        {title}
                    </p>
                </td>
                <td className="w-1/2 hidden lg:table-cell">
                    <p className="overflow-hidden text-ellipsis line-clamp-2">
                        {description}
                    </p>
                </td>
                <td className="text-center hidden lg:table-cell">
                    <span className="badge badge-ghost badge-sm">
                        {dateTime}
                    </span>
                </td>
                <td className="text-center ">
                    <button className="btn btn-ghost btn-sm group transition-all hover:shadow-sm">
                        <FaInfoCircle className="text-slate-700 group-hover:text-white transition-all" />
                    </button>
                    <button className="btn btn-ghost btn-sm group transition-all hover:shadow-sm">
                        <FaEdit className="text-slate-700 group-hover:text-white transition-all" />
                    </button>
                    <button
                        onClick={handleDeleteEvent}
                        className="btn btn-ghost btn-sm group transition-all hover:shadow-sm"
                    >
                        <FaTrashAlt className="text-slate-700 group-hover:text-white transition-all" />
                    </button>
                </td>
            </tr>
        </>
    );
};
