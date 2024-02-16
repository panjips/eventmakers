import React from 'react';
import { Navbar } from '@/components/shared/navbar';

export default function HomeLayout({ children }) {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    );
}
