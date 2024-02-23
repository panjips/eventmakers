import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link href={'/'} className="link link-hover">
                    Home
                </Link>
                <Link href={'/#events'} className="link link-hover">
                    Events
                </Link>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by Dynacode</p>
            </aside>
        </footer>
    );
};
