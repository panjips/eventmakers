import Image from 'next/image';
import Link from 'next/link';

export const CardEvent = ({ events }) => {
    return (
        <div className="card card-compact w-full bg-base-100 shadow-sm hover:shadow-md lg:hover:shadow-xl transition-all">
            <Link href={`/${events.id}`}>
                <figure>
                    <Image
                        src={events.image}
                        height={400}
                        width={400}
                        alt="event-img"
                        unoptimized={true}
                        className="object-cover rounded-t-2xl"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{events.title}</h2>
                    <p className="line-clamp-2 my-2">{events.description}</p>
                    <div className="card-actions flex items-center justify-between">
                        <div className="badge badge-outline">
                            Date: {events.dateTime}
                        </div>
                        <button className="btn btn-neutral btn-sm hover:border hover:text-neutral hover:bg-white">
                            Detail
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
