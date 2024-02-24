'use client';

import { ItemTable } from '@/components/manage-event/atoms/itemTable';

export const EventTable = ({ data }) => {
    return (
        <div className="overflow-x-auto bg-slate-50 rounded-lg shadow-sm">
            {data != null ? (
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
                        {data != null &&
                            data.map((e) => {
                                return (
                                    <ItemTable
                                        key={e.events.id}
                                        data={e.events}
                                    />
                                );
                            })}
                    </tbody>
                </table>
            ) : (
                <p className="py-2 text-center font-medium text-xl">
                    Data belum ada.
                </p>
            )}
        </div>
    );
};
