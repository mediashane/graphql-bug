import React from 'react';
import { client } from 'client';
import Head from 'next/head';

import { Footer, Header, HeroLeftJustified } from '../components';

export default function Page(): JSX.Element {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  return (
    <>
      <main className="content content-page">
        <Header />
        <Head>
          <title>{generalSettings.title}</title>
        </Head>
        <HeroLeftJustified textHeadline={`Oops! That page can’t be found.`} />
        <div className="wrap">
          <div>
            <div>
              <p>The page you were looking for does not exist or is no longer available.</p>
            </div>
          </div>
        </div>
      </main>
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
