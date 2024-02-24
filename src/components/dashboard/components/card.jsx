import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ id, image, title, date }) => {
    return (
        <Link href={`/${id}`}>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure>
                    <Image
                        src={image}
                        fill={true}
                        alt="event-img"
                        unoptimized={true}
                        className="object-fill rounded-2xl"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title overflow-hidden text-ellipsis line-clamp-1 ">
                        {title}
                    </h2>
                    <p>{date}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-xs btn-accent">
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
