import { Footer } from '@/components/shared/footer';
import { SingleEvent } from '@/components/single-event/components/singleEvent';
import useSingleData from '@/components/single-event/hooks/useSingleData';

export const metadata = {
    title: 'Detail Event | DynaVent'
};

export default async function EventPage({ params }) {
    const { eventid } = params;
    const { handleSingleDataEvent } = useSingleData();
    const { events, participants } = await handleSingleDataEvent(eventid);
    return (
        <>
            <SingleEvent events={events} participants={participants} />
            <Footer />
        </>
    );
}
