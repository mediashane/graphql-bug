import { client } from 'client';
import { CardsCarousel, CenteredText, Footer, Header, ThreeFeatureCards, TwoColumnGallery } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { colorBrandBrown, colorDarkGrey } from 'style';

import { getNextStaticProps } from '@faustjs/next';

const galleryListItems = [
  {
    textHeadline: 'Pricing & Samples',
    textParagraph: 'Pricing is determined by size and customization. We are happy to discuss the options.',
  },
  {
    textHeadline: 'Timing',
    textParagraph: 'Most fabric is stocked or immediate delivery. Contact us today to learn more.',
  },
];

const galleryImages = [
  {
    __typename: 'Type Name',
    fieldGroupName: 'TwoColumnGalleryImages',
    image: {
      mediaItemUrl: 'images/flatWeaveMossPlaid.png',
    },
  },
  {
    __typename: 'Type Name',
    fieldGroupName: 'TwoColumnGalleryImages',
    image: {
      mediaItemUrl: 'images/elizabethsCloth.png',
    },
  },
  {
    __typename: 'Type Name',
    fieldGroupName: 'TwoColumnGalleryImages',
    image: {
      mediaItemUrl: 'images/newArrivals.png',
    },
  },
  {
    __typename: 'Type Name',
    fieldGroupName: 'TwoColumnGalleryImages',
    image: {
      mediaItemUrl: 'images/rugsLink.png',
    },
  },
];

const cards = [
  {
    image: 'images/checkeredBoxInLoop.png',
    title: 'Checkered Box in Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: true,
    stickerText: 'New',
  },
  {
    image: 'images/vectorCrossLoop.png',
    title: 'Vector Cross Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: false,
    stickerText: 'New',
  },
  {
    image: 'images/zigZagInLoop.png',
    title: 'Zig Zag in Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: true,
    stickerText: 'New',
  },
  {
    image: 'images/latticeWithFlowers.png',
    title: 'Lattice with Flowers',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: false,
    stickerText: 'New',
  },
  {
    image: 'images/latticeLoop.png',
    title: 'Lattice Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: true,
    stickerText: 'New',
  },
  {
    image: 'images/checkeredBoxInLoop.png',
    title: 'Checkered Box in Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: false,
    stickerText: 'New',
  },
  {
    image: 'images/vectorCrossLoop.png',
    title: 'Vector Cross Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: false,
    stickerText: 'New',
  },
  {
    image: 'images/zigZagInLoop.png',
    title: 'Zig Zag in Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: true,
    stickerText: 'New',
  },
  {
    image: 'images/latticeWithFlowers.png',
    title: 'Lattice with Flowers',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: false,
    stickerText: 'New',
  },
  {
    image: 'images/latticeLoop.png',
    title: 'Lattice Loop',
    subtitle: '',
    link: {
      url: '/',
      target: '_blank',
      title: 'Rug Link',
      __typename: 'Type Name',
    },
    showSticker: true,
    stickerText: 'New',
  },
];

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header />

      <Head>
        <title>{generalSettings.title}</title>
      </Head>

      <TwoColumnGallery
        textHeadline="Flat Weave Ross Plaid"
        textParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales."
        paragraphFont="ProximaNovaRegular"
        backgroundColor="#F7F7F7"
        textColorPrimary={colorDarkGrey}
        textColorSecondary={colorBrandBrown}
        textAlign="left"
        withDivider={false}
        images={galleryImages}
        listItems={galleryListItems}
        listItemsLarge={true}
        withButton={true}
        buttonLabel="Book an Appointment"
        withIconButtons={true}
        iconButtonsHeadline="No question is too small. Contact us today."
        iconButtonOneImage="images/callUs.png"
        iconButtonOneLink="/"
        iconButtonOneLabel="Call us"
        iconButtonTwoImage="images/emailUs.png"
        iconButtonTwoLink="/"
        iconButtonTwoLabel="Email us"
        iconButtonThreeImage="images/visitUs.png"
        iconButtonThreeLink="/"
        iconButtonThreeLabel="Visit us"
      />

      <ThreeFeatureCards
        sectionLabel="Values"
        iconLayout={true}
        labelTextColor="#826C4F"
        textColor="#587DA9"
        imageOne="images/naturalFibersBlue.png"
        labelOne="100% Natural fibers"
        descriptionOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
        imageTwo="images/customizable.png"
        labelTwo="Customizable in Color, Shape and Size"
        descriptionTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
        imageThree="images/durable.png"
        labelThree="Durability"
        descriptionThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
      />

      <CenteredText
        text="Every rug is handmade and customized from color to size.  Also, don’t for get to explore our inventory, we have many options ready for delivery."
        backgroundColor="#F7F7F7"
        textSize="32px"
      />

      <ThreeFeatureCards
        iconLayout={false}
        textColor="#333333"
        imageOne="images/tour.png"
        labelOne="Tour our Facility"
        descriptionOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
        imageTwo="images/explore.png"
        labelTwo="Explore our Inventory"
        descriptionTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
        imageThree="images/expectations.png"
        labelThree="Lead Time Expectations"
        descriptionThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla."
      />

      <CardsCarousel
        cards={cards}
        labelColor="#826C4F"
        textColor="#333333"
        textLinkLabel="See all &gt;"
        textLinkUrl="/elizabeths-cloth"
        sectionLabel="More from Elizabeth’s Cloth"
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
