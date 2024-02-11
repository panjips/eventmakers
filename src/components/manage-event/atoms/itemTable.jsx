import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

export const ItemTable = () => {
    return (
        <tr className="hover:bg-slate-100 transition delay-150 duration-300 ease-in-out">
            <td className="text-center w-1/2 lg:w-fit">
                <p className="font-bold overflow-hidden text-ellipsis line-clamp-2">
                    Dicoding Workshop 2024
                </p>
            </td>
            <td className="w-1/2 hidden lg:table-cell">
                <p className="overflow-hidden text-ellipsis line-clamp-2">
                    Dicoding Workshop 2023 is an innovative and immersive
                    learning experience designed to empower participants with
                    cutting-edge skills and knowledge in the ever-evolving
                    landscape of technology.
                </p>
            </td>
            <td className="text-center hidden lg:table-cell">
                <span className="badge badge-ghost badge-sm">2023-10-10</span>
            </td>
            <td className="text-center ">
                <button className="btn btn-ghost btn-sm group transition-all hover:shadow-sm">
                    <FaInfoCircle className="text-warning group-hover:text-white transition-all" />
                </button>
                <button className="btn btn-ghost btn-sm group transition-all hover:shadow-sm">
                    <FaEdit className="text-primary/50 group-hover:text-white transition-all" />
                </button>
                <button className="btn btn-ghost btn-sm group transition-all hover:shadow-sm">
                    <FaTrashAlt className="text-error/50 group-hover:text-white transition-all" />
                </button>
            </td>
        </tr>
    );
};
