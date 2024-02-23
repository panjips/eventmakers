export default function useDataLanding() {
    async function handleDataEvents(input = '') {
        const res = await fetch(
            `https://eventmakers-api.fly.dev/events/?search=${input}`,
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

    return { handleDataEvents };
}