import React from 'react';

import FourCards from './FourCards';

interface Props {
  textColor: string;
  imageOne: string;
  labelOne: string;
  linkOne: string;
  showStickerOne: boolean;
  stickerTextOne: string;
  imageTwo: string;
  labelTwo: string;
  linkTwo: string;
  showStickerTwo: boolean;
  stickerTextTwo: string;
  imageThree: string;
  labelThree: string;
  linkThree: string;
  showStickerThree: boolean;
  stickerTextThree: string;
  imageFour: string;
  labelFour: string;
  linkFour: string;
  showStickerFour: boolean;
  stickerTextFour: string;
}

function FourCardsRow({ ...props }: Props): JSX.Element {
  return <FourCards {...props} />;
}

export default FourCardsRow;
