import * as ff from '@google-cloud/functions-framework';
import { Contractor } from './types/contractor';
import fetchContractors from './fetch-contractor';

ff.http('indexFunction', async (req: ff.Request, res: ff.Response) => {
    const result = await fetchContractors();
    const myContractor: Contractor = {
        name: 'Contractor',
        id: '1234'
    };

    res.send(`Hello ${myContractor.name}  - and async result is: ${result}`);
});