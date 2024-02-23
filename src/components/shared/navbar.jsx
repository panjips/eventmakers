'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'));
        setUser(localUser);
    }, []);

    function logout() {
        localStorage.removeItem('user');
        Cookies.remove('token');
        router.push('/login');
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link
                                href="/"
                                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/#events`}
                                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                            >
                                Events
                            </Link>
                        </li>
                        {user === null ? (
                            <>
                                <li>
                                    <Link
                                        href={`/login`}
                                        className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                                    >
                                        Log In
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={`/register`}
                                        className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <details>
                                        <summary className="font-semibold text-[16px]">
                                            🎫 {user?.name}
                                        </summary>
                                        <ul className="p-2 bg-base-100 rounded-t-none">
                                            <li>
                                                <Link
                                                    href="/dashboard"
                                                    className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                                                >
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={logout}
                                                    className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                                                >
                                                    Log Out
                                                </button>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl font-bold">
                    🎪 DynaVent
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <Link
                            href="/"
                            className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/#events`}
                            className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                        >
                            Events
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {user === null ? (
                        <>
                            <li>
                                <Link
                                    href={`/login`}
                                    className="font-semibold text-neutral border hover:bg-neutral/30 hover:text-white text-[16px]"
                                >
                                    Log In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/register`}
                                    className="font-semibold border bg-neutral text-white hover:bg-neutral/30 hover:text-neutral text-[16px]"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <details>
                                    <summary className="font-semibold text-[16px]">
                                        🎫 {user?.name}
                                    </summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li>
                                            <Link
                                                href="/dashboard"
                                                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={logout}
                                                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
                                            >
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};
