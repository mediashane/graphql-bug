import { client, PageIdType } from 'client';
import { CardList, Footer, Header, HeroCenterButton } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

const exampleCards = [
  {
    image: 'images/newArrivals.png',
    title: 'New  Arrivals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/masterSeriesClassic.png',
    title: 'Master Series Classic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/masterSeriesLinenWool.png',
    title: 'Master Series Linen Wool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/masterSeriesPrivateReserve.png',
    title: 'Master Series Private Reserve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/cotton.png',
    title: 'Cotton',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/teff.png',
    title: 'Teff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/wovenTextures.png',
    title: 'Woven Textures',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/elizabethsCloth.png',
    title: 'Elizabeth’s Cloth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: {
      url: '/elizabeths-cloth',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/hagga.png',
    title: 'Hagga',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/belden.png',
    title: 'Belden',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
  {
    image: 'images/handTufted.png',
    title: 'Hand Tuffed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
  },
];

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const { usePage } = client;
  const pageData = usePage({
    id: '/rugs',
    idType: PageIdType.URI,
  });

  console.log('ACF MODULE DATA ', pageData);

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>Rugs - {generalSettings.title}</title>
      </Head>

      <HeroCenterButton
        textOverline="Elizabeth Eakins"
        textHeadline="Rugs"
        buttonLabel="View the Newest Source Guide"
        media="images/rugsCollection.png"
        textColor="#ffffff"
        hoverTextColor="#587DA9"
      />

      {/* <CenteredText text={pageData.centeredText.paragraphText ?? ''} /> */}

      <CardList cards={exampleCards} />

      <Footer
        title="Elizabeth Eakins Studio"
        description="The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from 9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by."
        address="5 Taft Street, South Norwalk, CT 06854"
        phoneNumber="203.831.9347"
        email="Elizabeth.Eakins@elizabetheakins.com"
        hours="9:00am to 5:00pm M-F"
        locationTitle="Holland & Sherry"
        locationDescription="Elizabeth Eakins is part of Holland & Sherry and available for purchase across their showrooms. Click below to find a location near you."
        locationButtonLabel="Find a location near you"
        socialTitle="Follow Elizabeth Eakins on Instagram and join our mailing list"
        socialDescription="Many of our new products and offers we first share in email and instagram. Follow us today"
        emailPlaceholder="Enter your email"
        igCta="Follow us on Instagram"
        igLink="https://instagram.com/elizabetheakins/"
      />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
