import React from 'react';
import { Container } from '@/components/shared/container';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { SyaratKetentuan } from './syaratKetentuan';
export const SingleEvent = () => {
    return (
        <Container>
            <div className="py-8">
                <img
                    src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707373151/eventsmaker/ybg4u9js4k1khr7t7j5b.png"
                    alt=""
                    className="w-full rounded-lg"
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-4 gap-4">
                    <div className="grid grid-cols-1 gap-4 lg:col-span-9">
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h1 className="border-l-4 border-indigo-300 pl-2  text-xl text-slate-600 font-semibold">
                                Kampanye Tandingan
                            </h1>
                        </div>
                        <div className="p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                            <h3 className="border-l-4 border-indigo-300 pl-2 font-semibold text-lg text-slate-600 mb-2">
                                Description
                            </h3>
                            <p className="text-sm text-slate-600 leading-5">
                                Dear Family Lover, Kalo kamu baca ini, artinya
                                kamu diundang ke IMOBY Indonesia Mom & Baby,
                                Kids Expo. Event Promo bermanfaat dan terlengkap
                                dengan discount fantastic di Bandung! Explore
                                250+ brands Mom, Baby, Kids dengan berbagai
                                diskon up to 90%, buy 1 get 1, free gift,
                                dapatkan promo gledek di morning attack pkl
                                10.00 pagi setiap harinya! Yuk datang lebih pagi
                                rasakan keseruannya. Ada juga Hiburan menarik
                                meet & greet bersama guest star mom artist dan
                                masih banyak lagi hiburan lainnya. Yang sama
                                pentingnya Moms and Dads dapat mengikuti
                                berbagai Talkshow edukatif dengan ahli
                                professional dibidangnya! Pssst bakal banyak
                                DOORPRIZE dengan hadiah utama Motor, emas, TV,
                                dan berbagai Giveaway! Yuk, beli ticketsnya
                                sekarang dan ajak semua bunda bunda bestie-mu
                                buat seru-seruan bareng di IMOBY Bandung. Lets
                                have the best shopping times with much benefits
                                on hands! Only at IMOBY Bandung Friday-Sunday, 1
                                - 3 Maret 2023 di Sudirman Grand Ballroom. See
                                you Familia! Informasi selengkapnya, Follow
                                Instagram : imoby.mye
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:col-span-3 w-full bg-slate-50 rounded-lg shadow-sm flex justify-between flex-col">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-lg text-slate-600 ">
                                Join Event
                            </h3>
                            <div className="flex gap-4 items-center lg:items-start lg:flex-col">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-indigo-600" />
                                    <p className="text-xs text-slate-600">
                                        10 May 2024
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-indigo-600" />
                                    <p className="text-xs text-slate-600">
                                        60 Participants
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-5 lg:mt-0 btn btn-primary bg-indigo-500 hover:bg-indigo-600 btn-sm text-slate-50">
                            Join Now
                        </button>
                    </div>
                    <div className="lg:col-span-9 p-4 w-full bg-slate-50 rounded-lg shadow-sm">
                        <SyaratKetentuan />
                    </div>
                </div>
            </div>
        </Container>
    );
};
