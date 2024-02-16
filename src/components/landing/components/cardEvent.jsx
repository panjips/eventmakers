import React from 'react';
import Link from 'next/link';

export const CardEvent = () => {
    return (
        <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
            <figure className="h-28 lg:h-40 w-full">
                <img
                    src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707373151/eventsmaker/ybg4u9js4k1khr7t7j5b.png"
                    alt="Shoes"
                    className="h-full w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-sm lg:text-lg card-title text-ellipsis line-clamp-2">
                    Indonesia Mom, Baby & Kids Expo (IMOBY) Bandung 2024
                </h2>
                <p className="text-xs lg:text-base text-ellipsis line-clamp-2 ">
                    If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-end">
                    <Link
                        href={'/eventid'}
                        className="text-xs lg:text-sm btn btn-primary btn-sm bg-indigo-500 text-slate-50 hover:bg-indigo-600"
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};
