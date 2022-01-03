import Router from 'next/router';

const toggleDialog = (dialogName) => {
  if (Router.query.modal === dialogName) {
    delete Router.query.modal;
    Router.push(
      {
        pathname: Router.pathname,
        query: { ...Router.query },
      },
      undefined,
      { shallow: true },
    );
    return;
  }

  Router.push(
    {
      pathname: Router.pathname,
      query: { ...Router.query, modal: dialogName },
    },
    undefined,
    { shallow: true },
  );
};

export default toggleDialog;
