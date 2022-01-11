import { client, PageIdType } from 'client';
import { selectFields } from 'gqty';

const RECURSIVE_DEEP = 10;
const getPageData = async (pageUri) => {
  return await client.client.inlineResolved(() => {
    if (pageUri.length > 1) {
      const pageData = selectFields(
        client.client.query.page({ id: `/${pageUri[0]}/${pageUri[1]}`, idType: PageIdType.URI }),
        '*',
        RECURSIVE_DEEP,
      );
      return JSON.parse(JSON.stringify(pageData));
    }

    const pageData = selectFields(
      client.client.query.page({ id: `/${pageUri}`, idType: PageIdType.URI }),
      '*',
      RECURSIVE_DEEP,
    );
    return JSON.parse(JSON.stringify(pageData));
  });
};

export default getPageData;
