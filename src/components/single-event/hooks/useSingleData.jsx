export default function useSingleData() {
    async function handleSingleDataEvent(eventid) {
        const res = await fetch(
            `https://eventmakers-api.fly.dev/events/${eventid}`,
            {
                cache: 'no-cache'
            }
        );
        const { data } = await res.json();
        if (!!res.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    }

    return { handleSingleDataEvent };
}
