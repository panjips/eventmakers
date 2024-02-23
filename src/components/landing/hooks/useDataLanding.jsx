export default function useDataLanding() {
    async function handleDataEvents(input = '') {
        try {
            const res = await fetch(
                `https://eventmakers-api.fly.dev/events/?search=${input}`,
                {
                    cache: 'no-cache'
                }
            );
            const { data } = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching event list:', error);
        }
    }

    return { handleDataEvents };
}
