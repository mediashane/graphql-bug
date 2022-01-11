import { client, PageIdType } from 'client';
import { selectFields } from 'gqty';

const RECURSIVE_DEEP = 10;
const getPageModules = async (pageUri) => {
  return await client.client.inlineResolved(async () => {
    if (pageUri.length > 1) {
      const pageData = await selectFields(
        client.client.query.page({ id: `/${pageUri[0]}/${pageUri[1]}`, idType: PageIdType.URI })?.rug?.modules,
        '*',
        RECURSIVE_DEEP,
      );
      // return Object.values(page?.rug?.modules);

      const serializedPageData = JSON.parse(JSON.stringify(pageData));
      const pageModules = [serializedPageData].map((page) => {
        return Object.values(page);
      });

      return pageModules[0]
        .filter((e) => typeof e !== 'string')
        .sort((a, b) => {
          // @ts-expect-error: TS can't detect 'order' on the rug type
          return a.order - b.order;
        });
    }

    const pageData = await selectFields(
      client.client.query.page({ id: `/${pageUri}`, idType: PageIdType.URI })?.pageBuilder?.modules,
      '*',
      RECURSIVE_DEEP,
    );

    const serializedPageData = JSON.parse(JSON.stringify(pageData));
    const pageModules = serializedPageData.map((page) => {
      return page.$on[page.__typename];
    });
    return pageModules;
  });
};

export default getPageModules;
