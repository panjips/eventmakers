import React from 'react';
import { ManageEvent } from '@/components/manage-event/components/manageEvent';
import Provider from '@/components/manage-event/providers';

export default function page() {
    return (
        <>
            <Provider>
                <ManageEvent />
            </Provider>
        </>
    );
}
