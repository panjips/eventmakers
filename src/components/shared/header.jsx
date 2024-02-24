'use client';
import React, { useContext } from 'react';
import { SidebarContext } from '@/app/dashboard/layout';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <div className="lg:hidden w-full px-6 py-4 border-b bg-neutral border-slate-300">
            <div className="flex items-center gap-3">
                <button
                    className="p-2 border rounded-md border-slate-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars className="text-slate-100" size={16} />
                </button>
                <Link
                    href={'/'}
                    className="text-xl font-bold tracking-wider overflow-hidden text-white inline-block text-transparent bg-clip-text"
                >
                    🎪 DynaVent
                </Link>
            </div>
        </div>
    );
};
