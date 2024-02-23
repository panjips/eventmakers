import { Navbar } from '@/components/shared/navbar';

export const metadata = {
    title: 'Home | DynaVent'
};

export default function HomeLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
