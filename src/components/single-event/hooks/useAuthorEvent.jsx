export default function useAuthorEvent() {
    async function getAuthor(authorid) {
        const req = await fetch(
            `https://eventmakers.devscale.id/users/${authorid}`,
            {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX0FUZkx0S1NSODBMSlJOSSIsIm5hbWUiOiJQYW5qaSBQdXNha2EiLCJlbWFpbCI6InBhbmppQGRldnNjYWxlLmlkIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MDg3OTExODQsImV4cCI6MTcxOTE1OTE4NH0.nKqVPrZU0DMQx6l8ikYKv4PdiKrT7uWewJbAks718cc'
                }
            }
        );

        const { data } = await req.json();
        return data;
    }
    return { getAuthor };
}
