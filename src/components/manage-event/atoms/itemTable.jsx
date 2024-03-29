'use client';

import { useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import useDeleteEvent from '../hooks/useDeleteEvent';
import useEditEvent from '../hooks/useEditEvent';
import { useRouter } from 'next/navigation';

export const ItemTable = ({ data }) => {
    const router = useRouter();
    const { handleDeleteEvent, setIdEvent } = useDeleteEvent();
    const { title, description, dateTime, id } = data;
    useEffect(() => {
        setIdEvent(id);
    }, []);
    const { handleIsEdit } = useEditEvent();

    function detailEvent() {
        router.push(`/${id}`);
    }

    return (
        <>
            <tr className="hover:bg-slate-100 transition delay-150 duration-300 ease-in-out">
                <td className="text-center w-1/2 lg:w-fit">
                    <p className="font-bold overflow-hidden text-ellipsis line-clamp-2">
                        {title}
                    </p>
                </td>
                <td className="text-center w-1/2 hidden lg:table-cell">
                    <p className="overflow-hidden text-ellipsis line-clamp-2">
                        {description}
                    </p>
                </td>
                <td className="text-center hidden lg:table-cell">
                    <span className="badge-md">{dateTime}</span>
                </td>
                <td className="text-center ">
                    <button
                        onClick={detailEvent}
                        className="btn btn-ghost btn-sm group hover:bg-neutral transition-all"
                    >
                        <FaInfoCircle className="text-neutral group-hover:text-white group-hover:bg-neutral transition-all" />
                    </button>
                    <button
                        onClick={() => handleIsEdit(data)}
                        className="btn btn-ghost btn-sm group hover:bg-neutral transition-all"
                    >
                        <FaEdit className="text-neutral group-hover:text-white group-hover:bg-neutral transition-all" />
                    </button>
                    <button
                        onClick={handleDeleteEvent}
                        className="btn btn-ghost btn-sm group hover:bg-neutral transition-all"
                    >
                        <FaTrashAlt className="text-neutral group-hover:text-white group-hover:bg-neutral transition-all" />
                    </button>
                </td>
            </tr>
        </>
    );
};
