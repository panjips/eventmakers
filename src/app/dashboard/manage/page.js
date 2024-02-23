import { ManageEvent } from '@/components/manage-event/components/manageEvent';
import Provider from '@/components/manage-event/providers';

export const metadata = {
    title: 'Management Event | DynaVent'
};

export default function ManagePage() {
    return (
        <>
            <Provider>
                <ManageEvent />
            </Provider>
        </>
    );
}
