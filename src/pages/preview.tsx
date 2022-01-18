import { client } from 'client';

import { PageComponent } from './[...pageUri]';

export default function Preview() {
  const { usePreview } = client.auth;
  const result = usePreview();

  if (client.useIsLoading() || !result) {
    return <p>loading...</p>;
  }

  if (result.type === 'page') {
    if (!result.page) {
      return <>Not Found</>;
    }

    return <PageComponent page={result.page} />;
  }

  if (!result.post) {
    return <>Not Found</>;
  }
}
