import React from 'react';
import Link from 'next/link';

export const CardEvent = ({ data }) => {
    const { id, title, description, image, date: dateTime } = data;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
            <Link href={`/${id}`}>
                <figure className="h-28 lg:h-40 w-full ">
                    <img
                        src={image}
                        alt="Banner Image"
                        className="h-full w-full object-cover rounded-t-2xl"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="text-sm lg:text-lg card-title text-ellipsis line-clamp-1">
                        {title}
                    </h2>
                    <p className="text-xs lg:text-base text-ellipsis line-clamp-2 ">
                        If a dog chews shoes whose shoes does he choose?
                    </p>
                    <div className="card-actions justify-end">
                        <btn className="text-xs lg:text-sm btn btn-primary btn-sm bg-indigo-500 text-slate-50 hover:bg-indigo-600">
                            Detail
                        </btn>
                    </div>
                </div>
            </Link>
        </div>
    );
};
