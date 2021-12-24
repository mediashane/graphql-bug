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
  // if no collection is detected, do not render empty carousel
  if (!router.query.collection) return null;

  const cards = [];

  rugCollectionDetails?.rug_collection?.rugs.forEach((item) => {
    const { images, textHeadline, showSticker, stickerText } = item?.$on?.Rug?.rug?.modules?.twoColumnGallery;
    const { uri, rug } = item?.$on?.Rug;

    cards.push({
      image: images?.[0]?.image,
      title: textHeadline,
      link: { url: uri, target: '_blank', __typename: rug.__typename },
      showSticker: showSticker,
      stickerText: stickerText,
    });
  });

  // console.log('RUG? ', rugCollectionDetails?.rug_collection?.rugs?.[0]?.$on.Rug.rug);
  console.log('RUG? ', rugCollectionDetails?.rug_collection?.rugs?.[0]?.$on.Rug.rug?.modules?.twoColumnGallery);
  return <CarouselCards {...props} sectionLabel={`${router.query.collection}`} cards={cards} />;
}

export default CardsCarousel;
