import { client } from 'client';
import { CardList, CenteredText, Footer, Header, HeroCenterButton } from 'components';
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
    link: '/',
  },
  {
    image: 'images/masterSeriesClassic.png',
    title: 'Master Series Classic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
  {
    image: 'images/masterSeriesLinenWool.png',
    title: 'Master Series Linen Wool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: 'images/masterSeriesPrivateReserve.png',
    title: 'Master Series Private Reserve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
  {
    image: 'images/cotton.png',
    title: 'Cotton',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: 'images/teff.png',
    title: 'Teff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
  {
    image: 'images/wovenTextures.png',
    title: 'Woven Textures',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: 'images/elizabethsCloth.png',
    title: 'Elizabeth’s Cloth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/elizabeths-cloth',
  },
  {
    image: 'images/hagga.png',
    title: 'Hagga',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: 'images/belden.png',
    title: 'Belden',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: 'images/handTufted.png',
    title: 'Hand Tuffed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
];

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>Rugs - {generalSettings.title}</title>
      </Head>

      <HeroCenterButton
        introTitle="Elizabeth Eakins"
        title="Rugs"
        description="View the Newest Source Guide"
        backgroundImage="images/rugsCollection.png"
      />

      <CenteredText
        text="Beloved for their richness, simplicity, and ease of use, the sophisticated colors of Elizabeth Eakins rugs are
        meant to evoke the phenomenon of natural light grace annd organic form."
      />

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
