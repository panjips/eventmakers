import { Login } from '@/components/auth/components/login';

export const metadata = {
    title: 'Log In | DynaVent'
};

export default function LoginPage() {
    return (
        <section className="h-screen">
            <Login />
        </section>
    );
}
