'use client';
import React, { useState, useEffect } from 'react';
import { Container } from './container';
import Link from 'next/link';
import Avatar from 'boring-avatars';

export const Navbar = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
    }, []);

    return (
        <div className="py-3 bg-slate-50 drop-shadow-sm w-full">
            <Container>
                <div className="w-full flex justify-between items-center">
                    <Link
                        href={'/'}
                        className="text-center text-base lg:text-xl font-bold tracking-wider overflow-hidden bg-gradient-to-r from-blue-900  to-indigo-500 inline-block text-transparent bg-clip-text"
                    >
                        EVENTMAKERS
                    </Link>
                    <div className="flex items-center gap-1 lg:gap-4">
                        {user === null ? (
                            <>
                                <Link href={'/login'}>
                                    <button className="font-semibold rounded-xl px-5 py-2 bg-indigo-500  lg:text-sm text-xs text-slate-50 transition-all hover:bg-indigo-600 hover:shadow-sm">
                                        Login
                                    </button>
                                </Link>
                                <Link href={'/register'}>
                                    <button className="font-semibold border lg:text-sm text-xs border-slate-200  rounded-xl px-5 py-2 hover:shadow-sm transition-all">
                                        Register
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={'/dashboard'}
                                    className="flex items-center gap-2"
                                >
                                    <p className="font-light text-sm text-slate-600">
                                        {user?.name}
                                    </p>
                                    <Avatar
                                        size={30}
                                        variant="beam"
                                        square={true}
                                        colors={[
                                            '#AAFF00',
                                            '#FFAA00',
                                            '#FF00AA',
                                            '#AA00FF',
                                            '#00AAFF'
                                        ]}
                                    />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};
