import { Navbar } from '@/components/shared/navbar';

export const metadata = {
    title: 'Home | DynaVent',
    description: 'Simple Events Management Nextjs'
};

export default function HomeLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
