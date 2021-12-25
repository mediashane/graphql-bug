import { client } from 'client';
import { selectFields } from 'gqty';

const RECURSIVE_DEEP = 10;
const getKoaThemeOptions = async () => {
  return await client.client.inlineResolved(() => {
    return selectFields(client.client.query.koaThemeOptions, '*', RECURSIVE_DEEP);
  });
};

export default getKoaThemeOptions;
