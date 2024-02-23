export default function useDataLanding() {
    async function handleDataEvents() {
        const res = await fetch('https://eventmakers-api.fly.dev/events/', {
            cache: 'no-cache'
        });
        const { data } = await res.json();
        if (!!res.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    }

    return { handleDataEvents };
}
