'use client';

import React, { useContext, useEffect } from 'react';
import { SidebarContext } from '@/app/dashboard/layout';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
    const pathname = usePathname();
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    useEffect(() => {
        const sidebar = document.getElementById('sidebar');

        document.addEventListener('mousedown', (event) => {
            if (
                !sidebar.contains(event.target) &&
                !sidebar.className.includes('hidden')
            ) {
                setIsOpen(!isOpen);
            }
        });
    }, [isOpen, setIsOpen]);

    return (
        <aside
            id="sidebar"
            className={`lg:block z-50 fixed ${
                !isOpen && 'hidden'
            } max-w-60 w-full min-h-full h-screen bg-slate-50 border-r border-slate-300 lg:sticky left-0 top-0 drop-shadow-xs shadow-slate-600`}
        >
            <div className="flex flex-col p-6 h-full">
                <h2 className="text-center text-xl font-bold tracking-wider overflow-hidden bg-gradient-to-r from-blue-900  to-indigo-500 inline-block text-transparent bg-clip-text">
                    EVENTMAKERS
                </h2>
                <div className="h-[1px] bg-slate-300 my-4"></div>

                <div className="flex flex-col gap-2">
                    <Link href="/dashboard">
                        <div
                            className={`flex items-center gap-3 px-3 py-2 rounded-md transition delay-100 ease-in ${
                                pathname === '/dashboard'
                                    ? 'bg-slate-700 text-slate-200'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                        >
                            <FaCalendarAlt />
                            <p className=" font-light text-sm">
                                Registered Event
                            </p>
                        </div>
                    </Link>
                    <Link href="/dashboard/manage">
                        <div
                            className={`flex items-center gap-3 px-3 py-2 rounded-md transition delay-100 ease-in ${
                                pathname === '/dashboard/manage'
                                    ? 'bg-slate-700 text-slate-200'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                        >
                            <FaListAlt />
                            <p className=" font-light text-sm">
                                Management Event
                            </p>
                        </div>
                    </Link>
                </div>
                <button className="btn btn-outline btn-error btn-sm mt-auto hover:text-slate-50">
                    Logout
                </button>
            </div>
        </aside>
    );
};
