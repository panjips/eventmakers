import React from 'react';
import { Sidebar } from '@/components/dashboard/components/sidebar';

export default function DashboardLayout({ children }) {
    return (
        <section className="flex bg-slate-200">
            <Sidebar />

            <main>{children}</main>
        </section>
    );
}
