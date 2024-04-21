import Toast from '@/components/shared/toast';
import { useRouter } from 'next/navigation';

export default function useRegister() {
    const { toastWarning, toastSuccess } = Toast();
    const router = useRouter();
    async function handleRegister(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!name || !email || !password) {
            toastWarning('Input field cannot empty!');
            return;
        }

        const res = await fetch(
            'https://eventmakers.devscale.id/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const { message } = await res.json();
        switch (res.status) {
            case 405:
                toastWarning(message);
                break;
            case 201:
                toastSuccess(message);
                router.push('/login');
                break;
            default:
                break;
        }
    }

    return { handleRegister };
}
