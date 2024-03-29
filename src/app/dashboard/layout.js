'use client';

import { createContext, useState } from 'react';
import { Sidebar } from '@/components/shared/sidebar';
import { Header } from '@/components/shared/header';

export const SidebarContext = createContext();

export default function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            <section className="lg:flex w-screen min-h-dvh">
                <Sidebar />
                <Header />
                <main className="w-full">{children}</main>
            </section>
        </SidebarContext.Provider>
    );
}
