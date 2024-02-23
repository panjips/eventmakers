import { Dashboard } from '@/components/dashboard/components/dashboard';

export const metadata = {
    title: 'Dashboard | DynaVent'
};

export default async function DashboardPage() {
    return (
        <>
            <Dashboard />
        </>
    );
}
