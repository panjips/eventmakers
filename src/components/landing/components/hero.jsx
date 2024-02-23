import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="hero min-h-screen bg-neutral text-neutral-content">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        🎪 Unlock the Stage for Your Next Big Event!
                    </h1>
                    <p className="py-6">
                        Design your own unforgettable experience on our website
                        ticket platform. Your event dreams, our seamless
                        execution let`s turn your vision into a sold-out
                        reality.
                    </p>
                    <Link href={'/dashboard'}>
                        <button className="btn hover:btn-neutral mr-2">
                            Get Started
                        </button>
                    </Link>
                    <Link href={'/#events'}>
                        <button className="btn btn-accent">
                            Explore Events
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
