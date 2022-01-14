import { client, KoaThemeOptions } from 'client';
import { CenteredText, Footer, Header, ThreeFeatureCards } from 'components';
import AppointmentDialog from 'components/AppointmentDialog/AppointmentDialog';
import CenteredTextWithButton from 'components/CenteredTextWithButton/CenteredTextWithButton';
import FourButtonsGroup from 'components/FourButtonsGroup/FourButtonsGroup';
import HeaderSpacer from 'components/HeaderSpacer/HeaderSpacer';
import HeroCenter from 'components/HeroCenter/HeroCenter';
import LocationBanner from 'components/LocationBanner/LocationBanner';
import getKoaThemeOptions from 'helpers/ssr/getKoaThemeOptions';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

export interface PageProps {
  koaThemeOptions?: KoaThemeOptions;
}

export default function Page({ koaThemeOptions }: PageProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header />
      <HeaderSpacer />
      <Head>
        <title>{generalSettings.title}</title>
      </Head>
      <AppointmentDialog koaThemeOptions={koaThemeOptions} />
      <HeroCenter
        textOverlineTop="THE ANNUAL"
        textOverlineBottom="ELIZABETH EAKINS FALL SALE"
        textHeadline="Bring Joy In"
        textBodyline="SEPTEMBER 20TH - OCTOBER 15TH"
        textSublineTop="At the Elizabeth Eakins Studio"
        textSublineBottom="5 Taft Street, South Norwalk, CT 06854"
        textPostline="BY APPOINTMENT ONLY"
        media="images/annualSaleHero.jpg"
        textColor="#000000"
      />
      <FourButtonsGroup
        labelOne="Details"
        labelTwo="Hours and Directions"
        labelThree="Book an Appointment"
        labelFour="Email us at"
        email="sale@elizabetheakins.com"
        backgroundColor="#F7F7F7"
      />
      <CenteredText
        text="Shop one-of-a-kind rugs, fabrics, and pillows all up to 75% off!"
        fontFamily="FreightDispSemibold"
        backgroundColor="#F7F7F7"
        textSize="42"
        paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales."
        paragraphFontFamily="ProximaNovaRegular"
      />
      <ThreeFeatureCards
        iconLayout={false}
        textColor="#333333"
        backgroundColor="#F7F7F7"
        roundImages={true}
        imageOne="images/explore.png"
        labelOne="Rugs made ready to ship or customize"
        imageTwo="images/emailSubscribe.png"
        labelTwo="Mountains of pillows"
        imageThree="images/fabricBraids.jpg"
        labelThree="Find one of a kind fabric and have our team help trim it for you"
      />
      <LocationBanner
        title="Elizabeth Eakins Studio"
        addressOne="5 Taft Street"
        addressTwo="South Norwalk, CT 06854"
        locationButtonLabel="Google Directions"
        buttonLink="https://www.google.com/maps"
        image="images/locationMap.jpg"
        dates="September 20th - October 15th"
        days="Monday - Friday"
        hours="9:00 am - 3:00 pm"
      />
      <CenteredTextWithButton
        text="Viewing the sale will be by appointment, only assuring a safe experience for everyone. To book your one-hour appointment or if you have any questions, email us at sale@elizabetheakins.com, and our team will be happy to help."
        headerTextColor="#666666"
        backgroundColor="#F7F7F7"
        textSize="32"
        headerText="By Appointment Only"
        buttonEmail="sale@elizabetheakins.com"
      />
      <Footer
        title="Elizabeth Eakins Studio"
        description="The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from 9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by."
        address="5 Taft Street, South Norwalk, CT 06854"
        phoneNumber="203.831.9347"
        email="Ann.taylor@elizabetheakins.com"
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
  const koaThemeOptions = await getKoaThemeOptions();
  const serializedKoaThemeOptions = JSON.parse(JSON.stringify(koaThemeOptions));

  return getNextStaticProps(context, {
    Page,
    client,
    props: { koaThemeOptions: serializedKoaThemeOptions },
  });
}
