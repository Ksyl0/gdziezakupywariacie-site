import type { PageServerLoad } from './$types';

export const load = (async () => {
    const res = await fetch('https://getfullyear.com/api/year/');
    const data = await res.json();
    
    return {
        apiData1: data,
    };
}) satisfies PageServerLoad;
