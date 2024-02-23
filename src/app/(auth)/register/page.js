import { Register } from '@/components/auth/components/register';

export const metadata = {
    title: 'Register | DynaVent'
};

export default function RegisterPage() {
    return (
        <section className="h-screen">
            <Register />
        </section>
    );
}
