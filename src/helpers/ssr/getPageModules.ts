import { client, PageIdType } from 'client';
import { selectFields } from 'gqty';

const RECURSIVE_DEEP = 10;
const getPageModules = async (pageUri) => {
  return await client.client.inlineResolved(() => {
    return selectFields(
      client.client.query.page({ id: `/${pageUri}`, idType: PageIdType.URI }).pageBuilder.modules,
      '*',
      RECURSIVE_DEEP,
    );
  });
};

export default getPageModules;
