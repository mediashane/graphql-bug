import { client } from 'client';
import { selectFields } from 'gqty';

const RECURSIVE_DEEP = 2;
const getRugsCustomPosts = async () => {
  return await client.client.inlineResolved(() => {
    return selectFields(client.client.query.rugs({ where: {}, first: 1000 }).nodes, ['slug'], RECURSIVE_DEEP);
  });
};

export default getRugsCustomPosts;
