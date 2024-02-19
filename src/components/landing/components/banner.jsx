import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Banner = () => {
    return (
        <div className="mt-8 lg:mt-16 bg-gradient-to-br from-indigo-500 via-blue-700 to-indigo-800/75 h-64 w-full rounded-lg relative">
            <div className="">
                <Image
                    src="/wave1.svg"
                    alt="wave"
                    fill
                    className="absolute object-cover w-full h-full rounded-lg z-10"
                />
                <Image
                    src="/wave2.svg"
                    alt="wave"
                    fill
                    className="absolute object-cover w-full h-full rounded-lg z-10"
                />
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center absolute z-20 bg-white/10">
                <h3 className="text-lg text-center lg:text-2xl text-slate-200 font-bold w-3/4 lg:w-full">
                    Unlock the Stage for Your Next Big Event!
                </h3>
                <p className="line-clamp-3 lg:line-clamp-none text-slate-200/70 mt-2 font-light text-sm w-3/4 lg:w-1/2 text-center">
                    Design your own unforgettable experience on our website
                    ticket platform. Your event dreams, our seamless execution
                    lets turn your vision into a sold-out reality.
                </p>
                <Link
                    href={'/dashboard/manage'}
                    className="btn btn-success mt-3 btn-xs lg:btn-sm text-slate-100 bg-green-600/90 px-4"
                >
                    Create your event now!
                </Link>
            </div>
        </div>
    );
};
