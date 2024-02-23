export default function useDataLanding() {
    async function handleDataEvents() {
        try {
            const res = await fetch('https://eventmakers-api.fly.dev/events/', {
                cache: 'no-cache'
            });
            const { data } = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching event list:', error);
        }
    }

    return { handleDataEvents };
}
