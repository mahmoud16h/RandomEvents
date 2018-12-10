export const fetchData = async ()=> await fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/7/13`)
    .then(res => res.json())
    .then(json => ({data: json}))