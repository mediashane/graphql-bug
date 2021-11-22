import React from 'react';
import { client, PageIdType } from 'client';
import { CallToAction, EmailSubscribe, Footer, Header, HeroLeftJustified, ThreeImageExplore } from 'components';
import ThreeFeatureCards from 'components/ThreeFeatureCards/ThreeFeatureCards';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  const { usePage } = client;
  const pageData = usePage({
    id: '/',
    idType: PageIdType.URI,
  });

  const { textOverline, textHeadline, textParagraph, media } =
    pageData.pageBuilder.modules[0].$on.Page_Pagebuilder_Modules_HeroLeftJustified;
  const { mediaItemUrl } = media;

  return (
    <>
      <Header title={generalSettings.title} />
      <Head>
        <title>Rugs - {generalSettings.title}</title>
      </Head>

      <HeroLeftJustified
        textOverline={textOverline}
        textHeadline={textHeadline}
        textParagraph={textParagraph}
        media={mediaItemUrl}
      />

      <CallToAction
        ctaTitle="May Sale 2021"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ctaButtonLabel="Shop now"
        backgroundImage="images/ctaSale.png"
      />

      <ThreeImageExplore
        sectionLabel="Explore"
        backgroundImageOne="images/rugsLink.png"
        labelOne="Rugs"
        linkOne="/rugs"
        backgroundImageTwo="images/fabricLink.png"
        labelTwo="Fabric"
        linkTwo="/fabric"
        backgroundImageThree="images/grassclothLink.png"
        labelThree="Grasscloth"
        linkThree="/grasscloth"
      />

      <EmailSubscribe
        title="Get new products and promotions in your inbox"
        placeholder="Your email"
        buttonLabel="Subscribe"
        subtitle="Keep up with what we’re up to. Unsubscribe at any time."
        backgroundImage="images/emailSubscribe.png"
      />

      <ThreeFeatureCards
        sectionLabel="Values"
        iconLayout={true}
        labelColor="#587DA9"
        textColor="#826C4F"
        imageOne="images/sustainability.png"
        labelOne="Sustainability"
        descriptionOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
        imageTwo="images/naturalFibersBrown.png"
        labelTwo="Natural Fibers"
        descriptionTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
        imageThree="images/handmade.png"
        labelThree="Handmade"
        descriptionThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
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
