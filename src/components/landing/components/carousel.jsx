import React from 'react';

export const Carousel = () => {
    return (
        <div className="pt-8 mb-4">
            <div className="carousel w-full rounded-xl lg:max-h-96 shadow-lg">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707373151/eventsmaker/ybg4u9js4k1khr7t7j5b.png"
                        className="w-full object-cover"
                    />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707642692/eventsmaker/pfgdauggwi4ltzikaita.png"
                        className="w-full object-cover"
                    />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707643293/eventsmaker/g6ezb2dqriibqsjxvglb.png"
                        className="w-full object-cover"
                    />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://res.cloudinary.com/dgt0nrylf/image/upload/v1707418207/eventsmaker/z2yrk2vvuf60dijcccz3.png"
                        className="w-full object-cover"
                    />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a
                    href="#item1"
                    className="btn btn-xs border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-400 transition-all hover:drop-shadow-md hover:text-slate-50"
                >
                    1
                </a>
                <a
                    href="#item2"
                    className="btn btn-xs border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-400 transition-all hover:drop-shadow-md hover:text-slate-50"
                >
                    2
                </a>
                <a
                    href="#item3"
                    className="btn btn-xs border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-400 transition-all hover:drop-shadow-md hover:text-slate-50"
                >
                    3
                </a>
                <a
                    href="#item4"
                    className="btn btn-xs border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-400 transition-all hover:drop-shadow-md hover:text-slate-50"
                >
                    4
                </a>
            </div>
        </div>
    );
};
