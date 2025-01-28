import type { PageLoad } from './$types';

export const load = (async () => {
    // Fetch data from the API
    const response = await fetch('https://api.gdziezakupywariacie.pl');
    const data = await response.json();

    // Return the data so it can be used in the page
    return {
        apiData: data
    };
}) satisfies PageLoad;