import React from 'react';
import { ItemTable } from '@/components/manage-event/atoms/itemTable';

export const EventTable = () => {
    return (
        <div className="overflow-x-auto bg-slate-50 rounded-lg shadow-sm">
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">Event</th>
                        <th className="text-center hidden lg:table-cell">
                            Description
                        </th>
                        <th className="text-center hidden lg:table-cell">
                            Date
                        </th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemTable />
                    <ItemTable />
                    <ItemTable />
                    <ItemTable />
                </tbody>
            </table>
        </div>
    );
};
