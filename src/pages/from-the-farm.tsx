import { client } from 'client';
import { CardList, Footer, Header, HeroCenterTop } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

const exampleCards = [
  {
    image: 'images/SidePortraitsSheep.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/GoodBoy.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/SheepShearing.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/GoodBoyandSheep.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/Wool.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/ElizabethandDucks.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/ElizabethandMan.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/LandscapeSheep.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
    link: '/',
  },
  {
    image: 'images/CloseUpSheep.png',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
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
        <title>{generalSettings.title}</title>
      </Head>

      <HeroCenterTop
        textOverline="From the Farm"
        textHeadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales"
        textSubline="By Jerry Wigglesworth"
        mediaDesktop="images/fromTheFarmHero.png"
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
