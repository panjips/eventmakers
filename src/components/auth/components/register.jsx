'use client';

import Link from 'next/link';
import useRegister from '../hooks/useRegister';

export const Register = () => {
    const { handleRegister } = useRegister();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    <div className="w-3/5 p-5">
                        <div className="text-center lg:text-left font-bold">
                            <Link href={'/'}>
                                <span className="text-orange-500">
                                    {' '}
                                    🎪 Dyna
                                </span>
                                Vent
                            </Link>
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-orange-500 mb-2">
                                Register to DynaVent
                            </h2>
                            <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>

                            <form
                                onSubmit={handleRegister}
                                className="w-full flex flex-col gap-6"
                            >
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
                                <button className="bg-orange-400 hover:bg-orange-700 transition-all text-slate-100 py-2 px-5 rounded-md text-sm ">
                                    Register
                                </button>
                            </form>

                            <p className="text-xs mt-4 text-slate-400">
                                Have any account?{' '}
                                <Link
                                    href="/login"
                                    className="text-indigo-500 hover:text-indigo-700 hover:font-bold transition-all"
                                >
                                    Log in now
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="w-2/5 bg-orange-400  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <Link href={'/'}>
                            <h1 className="text-3xl font-bold"> 🎪 </h1>
                        </Link>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">
                            Register to share & start explore event with us.
                        </p>
                        <p className="text-sm font-semibold">
                            Crafted with 🧡 by Dynacode
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};
