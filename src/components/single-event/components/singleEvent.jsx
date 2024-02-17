import React from 'react';
import { Container } from '@/components/shared/container';
import { FaCalendarAlt } from 'react-icons/fa';

export const SingleEvent = () => {
    return (
        <Container>
            <div className="py-8">
                <img
                    src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707373151/eventsmaker/ybg4u9js4k1khr7t7j5b.png"
                    alt=""
                    className="w-full rounded-lg"
                />
                <div className="grid grid-cols-12 mt-4 gap-4">
                    <div className="grid grid-cols-1 gap-4 col-span-9">
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h1 className=" text-xl text-slate-600 font-semibold">
                                Kampanye Tandingan
                            </h1>
                        </div>
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-lg text-slate-600 mb-2">
                                Description
                            </h3>
                            <p className="text-sm text-slate-600">
                                KAMPANYE TANDINGAN, live political comedy show
                                yang berkolaborasi dengan Musuh Masyarakat (Coki
                                Pardede, Tretan Muslim, dan Adriano Qalbi) dan
                                menampilkan line-up keren lainnya!
                            </p>
                        </div>
                    </div>
                    <div className="p-4 col-span-3 w-full bg-slate-50 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg text-slate-600 mb-2">
                            Order Ticket
                        </h3>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <p className="text-xs text-slate-600">
                                10 May 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
