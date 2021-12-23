import React from 'react';
import { client, Rug_collectionIdType } from 'client';
import { useRouter } from 'next/router';

import CarouselCards from './CarouselCards';

interface Props {
  textColor: string;
  labelColor: string;
  sectionLabel: string;
  textLinkUrl?: string;
  textLinkLabel?: string;
  cards: {
    image: string;
    title: string;
    subtitle?: string;
    link?: {
      url?: string;
      target?: string;
      title?: string;
      __typename?: string;
    };
    showSticker: boolean;
    stickerText: string;
  }[];
}

function CardsCarousel({ ...props }: Props): JSX.Element {
  const router = useRouter();
  const { useQuery } = client;
  const rugCollectionDetails = useQuery({ suspense: false }).rugCollection({
    id: `${router.query.collection}` ?? '',
    idType: Rug_collectionIdType.URI,
  });

  // console.log('CAROUSEL? ', props);

  // if no collection is detected, do not render empty carousel
  if (!router.query.collection) return null;

  const cards = [];

  rugCollectionDetails?.rug_collection?.rugs.forEach((item) => {
    cards.push({
      image: item.$on.Rug.rug.modules.twoColumnGallery.images[0].image,
      title: item.$on.Rug.rug.modules.twoColumnGallery.textHeadline,
      link: { url: '/', target: '_blank', __typename: 'Rug' },
      showSticker: false,
      // stickerText: 'New',
    });
  });

  console.log(
    'RUG COLLECTION? ',
    // typeof rugCollectionDetails?.rug_collection?.rugs?.[0]?.$on.Rug.rug.modules.twoColumnGallery.images[0].image.srcSet(),
    rugCollectionDetails?.rug_collection?.rugs?.[0]?.$on.Rug.rug.modules.twoColumnGallery.images[0].image,
    // rugCollectionDetails?.rug_collection?.rugs,
  );
  return <CarouselCards {...props} sectionLabel={`${router.query.collection}`} cards={cards} />;
}

export default CardsCarousel;
