import { CardEvent } from './cardEvent';
import useDataLanding from '../hooks/useDataLanding';
import { Container } from '@/components/shared/container';

export const Events = async () => {
    const { handleDataEvents } = useDataLanding();
    const events = await handleDataEvents();

    return (
        <Container>
            <div className="my-8">
                <h2
                    className="text-2xl lg:text-3xl font-semibold text-center lg:float-start"
                    id="events"
                >
                    All Events
                </h2>

                <div className="join flex justify-center lg:justify-end my-8">
                    <div>
                        <div>
                            <input
                                className="input input-bordered join-item"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn btn-neutral join-item">
                            Search
                        </button>
                    </div>
                </div>

                <div className="mt-2 lg:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
                    {events.map(({ events }) => {
                        return <CardEvent key={events.id} events={events} />;
                    })}
                </div>
            </div>
        </Container>
    );
};
