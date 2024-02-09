'use client';
import React, { createContext, useState } from 'react';
import { Sidebar } from '@/components/dashboard/components/sidebar';
import { Header } from '@/components/dashboard/components/header';

export const SidebarContext = createContext();

export default function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            <section className="lg:flex min-h-full h-screen bg-slate-200">
                <Sidebar />
                <Header />
                <main>{children}</main>
            </section>
        </SidebarContext.Provider>
    );
}
