import { client } from 'client';
import { Footer, Header, HeroRightJustified, OneColumnContent, TwoColumnContent } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>{generalSettings.title}</title>
      </Head>

      <HeroRightJustified
        textColor="#FFFFFF"
        textHeadline="It begins in 1978 with one woman who had a talent for textile design and believed in the discipline of doing things by hand."
        textMediaLabel="Watch Portraits in Creativity"
        textSubline="A special look into Elizabeth Eakins’ process, passion and work. Directed by Gael Towey with cinematography by Victoria Pearson."
        mediaDesktop="images/AnalogPortrait.png"
      />

      <TwoColumnContent
        textHeadline="Living with Elizabeth Eakins rugs is an intimate experience. "
        textParagraph="Handmade with an indelible care for natural fibers, each rug is an artifact with its own history, designed to endure."
        headlineColor="#826C4F"
        paragraphColor="#333333"
      />

      <OneColumnContent
        textHeadline="From the beginning, the handwoven rug has been the heart of Elizabeth Eakins. "
        textParagraph="Diversity of techniques and yarn systems, expert coloration, and attention to quality in production set the industry standard."
        media="images/weavingRepeated.png"
      />

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
