import { client } from 'client';
import { CenteredText, ContactBanner, ContactList, Header } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getNextStaticProps } from '@faustjs/next';

const exampleCards = [
  {
    location: 'New York',
    addressOne: '979 Third Avenue',
    addressTwo: 'Suite 1402',
    addressThree: 'New York, NY 10022',
    phoneNumber: '212 355 6241',
    email: 'lhill@hollandandsherry.com',
  },
  {
    location: 'Atlanta',
    addressOne: '351 Peachtree Hills Avenue',
    addressTwo: 'Suite 320',
    addressThree: 'Atlanta, Ga 30305',
    phoneNumber: '404 607 8877',
    email: 'ltilinski@hollandandsherry.com',
  },
  {
    location: 'Boston',
    addressOne: '1 Design Center Place',
    addressTwo: 'Suite 534',
    addressThree: 'Boston, MA 02210',
    phoneNumber: '617 345 9900',
    email: 'kcorcoran@hollandandsherry.com',
  },
  {
    location: 'Chicago',
    addressOne: '222 Merchandise Mart',
    addressTwo: 'Suite 6-118',
    addressThree: 'Chicago, IL 60654',
    phoneNumber: '312 755 1330',
    email: 'mjohnson@hollandandsherry.com',
  },
  {
    location: 'Los Angeles',
    addressOne: '8687 Melrose Avenue',
    addressTwo: 'Suite B-305',
    addressThree: 'West Hollywood, Ca 90069',
    phoneNumber: '323 802 0693',
    email: 'james.gelini@elizabetheakins.com',
  },
  {
    location: 'Dallas',
    addressOne: '1250 Slocum Street',
    addressTwo: 'Suite 736',
    addressThree: 'Dallas, TX 75207',
    phoneNumber: '469 249 6422',
    email: 'awatkins@hollandandsherry.com',
  },
  {
    location: 'San Francisco',
    addressOne: '111 Rhode Island Street',
    addressTwo: 'Suite B',
    addressThree: 'San Francisco, Ca 94103',
    phoneNumber: '415 552 2144',
    email: 'mspaniel@hollandandsherry.com',
  },
  {
    location: 'Houston',
    addressOne: '5120 Woodway Drive',
    addressTwo: 'Suite 120',
    addressThree: 'Houston, TX 77056',
    phoneNumber: '713 357 2542',
    email: 'arollo@hollandandsherry.com',
  },
];

const internationalExampleCards = [
  {
    location: 'Paris',
    addressOne: '17, Rue De L’echaude',
    addressTwo: '(A Cote De La Place De Furstenberg)',
    addressThree: '75006 Paris, France',
    phoneNumber: '+33 (1) 42 33 85 18',
    email: 'info.deco@hollandsherry.fr',
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
      <ContactBanner
        title="The Elizabeth Eakins Studio"
        description="The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from 9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by to learn more about us and how we can help."
        addressOne="Elizabeth Eakins Studio"
        addressTwo="5 Taft Street, South Norwalk, CT 06854"
        phoneNumber="203.831.9347"
        faxNumber="203.831.9136"
        email="Elizabeth.Eakins@elizabetheakins.com"
        locationButtonLabel="Book an Appointment"
        image="images/showroom.jpg"
      />

      <CenteredText
        text="Elizabeth Eakins is now part of Holland & Sherry and available at the following locations."
        backgroundColor="#ffffff"
        textSize="36"
        textColor="#587DA9"
        fontFamily="FreightBigProMediumItalic"
      />

      <ContactList sectionLabel="HOLLAND & SHERRY" cards={exampleCards} largeLabel={true} />

      <ContactList sectionLabel="International" cards={internationalExampleCards} largeLabel={false} />

      {/* <Footer
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
      /> */}
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
