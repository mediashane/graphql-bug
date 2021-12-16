import { client } from 'client';
import { Footer, FourCardsRow, FourCardsWithPrompt, FourFeatureTags, Header, TwoColumnGallery } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { colorBrandBrown, colorDarkGrey } from 'style';

import { getNextStaticProps } from '@faustjs/next';

const galleryListItems = [
  {
    textHeadline: 'QUALITIES',
    textParagraph:
      'Hand dyed handwoven warp variations in cotton or wool with wool weft. Most weave structures are reversible',
  },
  {
    textHeadline: 'MINIMUM',
    textParagraph: 'No minimum in width or length',
  },
  {
    textHeadline: 'MAXIMUM WEAVING',
    textParagraph: `Width 19' or 579 cm, Length 40' or 1219`,
  },
  {
    textHeadline: 'COLORS',
    textParagraph: 'Custom color available at no additional cost',
  },
  {
    textHeadline: 'FINISHING OPTIONS',
    textParagraph: 'Area rugs whip-stitched Installation rugs come prepped with latex edges',
  },
  {
    textHeadline: 'USES',
    textParagraph: 'Area rugs Stair runners & wall to wall — Latex backing would be applied prior to install',
  },
];

const galleryImages = [
  {
    __typename: 'Type Name',
    fieldGroupName: 'TwoColumnGalleryImages',
    image: {
      mediaItemUrl: 'images/elizabethsClothDetails.png',
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

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <Header title={generalSettings.title} />

      <Head>
        <title>{generalSettings.title}</title>
      </Head>

      <TwoColumnGallery
        textHeadline="Elizabeth's Cloth"
        textParagraph="Our new Elizabeth’s Cloth is handwoven in pure wool in many different types of weave structures. It is a versatile product line that requires no minimums and has the benefit of many loom systems so the designer is welcomed to cr eate new designs at any time. The weights range from extremely flat tight weaves to supple combinations of yarns, soft and durable. The products have excellent price points."
        paragraphFont="FreightBigProSemibold"
        textColorPrimary={colorDarkGrey}
        textColorSecondary={colorBrandBrown}
        textAlign="left"
        withDivider={true}
        images={galleryImages}
        listItems={galleryListItems}
        listItemsLarge={false}
        withIconButtons={false}
      />

      <FourFeatureTags
        textColor="#587DA9"
        imageOne="images/handmadeIcon.png"
        labelOne="Handmade"
        imageTwo="images/customizableIcon.png"
        labelTwo="Customizable"
        imageThree="images/naturalFibersIcon.png"
        labelThree="Natural Fibers"
        imageFour="images/durableIcon.png"
        labelFour="Durable"
      />

      <FourCardsRow
        textColor="#333333"
        imageOne="images/checkeredBoxInLoop.png"
        titleOne="Checkered Box in Loop"
        subtitleOne=""
        linkOne="/"
        showStickerOne={true}
        stickerTextOne="New"
        imageTwo="images/vectorCrossLoop.png"
        titleTwo="Vector Cross Loop"
        subtitleTwo=""
        linkTwo="/"
        showStickerTwo={false}
        stickerTextTwo="New"
        imageThree="images/zigZagInLoop.png"
        titleThree="Zig Zag in Loop"
        subtitleThree=""
        linkThree="/"
        showStickerThree={true}
        stickerTextThree="New"
        imageFour="images/latticeWithFlowers.png"
        titleFour="Lattice with Flowers"
        subtitleFour=""
        linkFour="/"
        showStickerFour={false}
        stickerTextFour="New"
      />

      <FourCardsWithPrompt
        flexDirection="row"
        withButton={true}
        buttonLabel="Book an appointment"
        promptOverline="Questions? want to know more?"
        promptTopline="Book a virtual or in person appointment."
        promptImage="images/bookVirtualAppointment.png"
        promptParagraph=""
        paragraphTextColor="#333333"
        imageOne="images/latticeLoop.png"
        titleOne="Lattice Loop"
        subtitleOne=""
        linkOne="/"
        showStickerOne={true}
        stickerTextOne="New"
        imageTwo="images/circlesConnectingInCutVelvet.png"
        titleTwo="Circles Connecting in Cut Velvet"
        subtitleTwo=""
        linkTwo="/"
        showStickerTwo={false}
        stickerTextTwo="New"
        imageThree="images/interlockingDiamondCross.png"
        titleThree="Interlocking Diamond Cross"
        subtitleThree=""
        linkThree="/"
        showStickerThree={true}
        stickerTextThree="New"
        imageFour="images/circlesConnectingInLoop.png"
        titleFour="Circles Connecting in Loop"
        subtitleFour=""
        linkFour="/"
        showStickerFour={false}
        stickerTextFour="New"
      />

      <FourCardsRow
        textColor="#333333"
        imageOne="images/shumak.png"
        titleOne="Shumak"
        subtitleOne=""
        linkOne="/"
        showStickerOne={true}
        stickerTextOne="New"
        imageTwo="images/diamondZigZagInLoop.png"
        titleTwo="Diamond Zig Zag in Loop"
        subtitleTwo=""
        linkTwo="/"
        showStickerTwo={false}
        stickerTextTwo="New"
        imageThree="images/interconnectedDiamond.png"
        titleThree="Interconnected Diamond"
        subtitleThree=""
        linkThree="/"
        showStickerThree={true}
        stickerTextThree="New"
        imageFour="images/largeDiamondInLoop.png"
        titleFour="Large Diamond in Loop"
        subtitleFour=""
        linkFour="/"
        showStickerFour={false}
        stickerTextFour="New"
      />

      <FourCardsWithPrompt
        flexDirection="row-reverse"
        withButton={false}
        buttonLabel="Book an appointment"
        buttonLabelColor="#826C4F"
        promptOverline="Designed with you in mind"
        overlineTextColor="#E56F4D"
        promptTopline="Every pattern is customizable in color, shape, and size"
        toplineTextColor="#90949F"
        promptParagraph="Our collections feature a broad range of patterns and styles that are fully customizable in color and pattern.
        You can create a truly unique piece by choosing color combinations that reflect your home’s personality. The
        possibilities are endless."
        paragraphTextColor="#333333"
        promptImage="images/bookVirtualAppointment.png"
        imageOne="images/sb154.png"
        titleOne="SB 154"
        subtitleOne=""
        linkOne="/"
        showStickerOne={true}
        stickerTextOne="New"
        imageTwo="images/diamondCutPile.png"
        titleTwo="Diamond Cut Pile"
        subtitleTwo=""
        linkTwo="/"
        showStickerTwo={false}
        stickerTextTwo="New"
        imageThree="images/diamondCutPileGreen.png"
        titleThree="Diamond Cut Pile"
        subtitleThree=""
        linkThree="/"
        showStickerThree={true}
        stickerTextThree="New"
        imageFour="images/frameWithRib.png"
        titleFour="Frame with Rib"
        subtitleFour=""
        linkFour="/"
        showStickerFour={false}
        stickerTextFour="New"
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
