'use client';
import React from 'react';
import Link from 'next/link';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
    const { handleLogin } = useLogin();
    return (
        <div className="w-full h-full max-w-xs md:max-w-xl lg:max-w-3xl m-auto flex flex-col justify-center items-center">
            <div className="flex flex-col items-center px-8 py-6 border rounded-lg bg-slate-100">
                <div className="mb-3 lg:mb-6">
                    <h1 className=" text-slate-700 text-3xl font-semibold">
                        Welcome to{' '}
                        <span className="text-indigo-500 font-bold">
                            Eventmakers
                        </span>
                    </h1>
                    <p className="text-slate-500 lg:text-sm text-xs">
                        Sign in to create your own event.
                    </p>
                </div>
                <form
                    onSubmit={handleLogin}
                    className="w-full flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border-2 border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-slate-400 "
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="border-2 border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-slate-400 "
                        />
                    </div>
                    <button className="bg-slate-700 hover:bg-slate-900 transition-all text-slate-100 py-2 px-5 rounded-md text-sm ">
                        Sign In
                    </button>
                </form>

                <p className="text-xs mt-4 text-slate-400">
                    Don't have account yet?{' '}
                    <Link
                        href="/register"
                        className="text-indigo-500 hover:text-indigo-700 hover:font-bold transition-all"
                    >
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    );
};
