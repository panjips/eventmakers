'use client';

import React from 'react';
import Link from 'next/link';

export const Register = () => {
    return (
        <div className="w-full h-full max-w-xs md:max-w-xl lg:max-w-3xl m-auto flex flex-col justify-center items-center">
            <div className="flex flex-col items-center px-8 py-6 border rounded-lg bg-slate-100">
                <div className="mb-6">
                    <h1 className=" text-slate-700 text-3xl font-semibold">
                        Welcome to{' '}
                        <span className="text-indigo-500 font-bold">
                            Eventmakers
                        </span>
                    </h1>
                    <p className="text-slate-500 text-sm">
                        Register to share your own event.
                    </p>
                </div>
                <form onSubmit={''} className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                            className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none "
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none "
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="off"
                            className="border border-slate-300 text-sm bg-white rounded-md p-2 focus:outline-none "
                        />
                    </div>
                    <button className="bg-slate-800 hover:bg-slate-900 transition-all text-slate-100 py-2 px-5 rounded-md text-sm ">
                        Register
                    </button>
                </form>

                <p className="text-xs mt-4 text-slate-400">
                    Have any account ?{' '}
                    <Link
                        href="/login"
                        className="text-indigo-500 hover:text-indigo-700 hover:font-bold transition-all"
                    >
                        Sign in now
                    </Link>
                </p>
            </div>
        </div>
    );
};
