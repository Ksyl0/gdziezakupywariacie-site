import type { PageLoad } from './$types';

export const csr = false;

export const load = (async () => {
    const [res1, res2] = await Promise.all([
        fetch('https://api.gdziezakupywariacie.pl/'),
        fetch('https://getfullyear.com/api/year/'),
      ]);
    
      const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
    
      return {
        apiData: data1,
        apiData1: data2,
      };
}) satisfies PageLoad;