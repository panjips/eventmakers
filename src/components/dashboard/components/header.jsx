'use client';
import React, { useContext } from 'react';
import { SidebarContext } from '@/app/dashboard/layout';
import { FaBars } from 'react-icons/fa';

export const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <div className="lg:hidden w-full p-6">
            <div className="flex items-center gap-3">
                <button
                    className="p-2 border rounded-md border-slate-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars className="text-slate-600" size={20} />
                </button>
                <h2 className="text-2xl font-bold tracking-wider overflow-hidden bg-gradient-to-r from-blue-900  to-indigo-500 inline-block text-transparent bg-clip-text">
                    EVENTMAKERS
                </h2>
            </div>
        </div>
    );
};
