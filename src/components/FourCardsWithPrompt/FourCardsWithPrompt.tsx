import React from 'react';

import FourCardsWithPromptComponent from './FourCardsWithPromptComponent';

interface Props {
  textColor: string;
  imageOne: string;
  titleOne: string;
  subtitleOne?: string;
  linkOne: string;
  showStickerOne: boolean;
  stickerTextOne: string;
  imageTwo: string;
  titleTwo: string;
  subtitleTwo?: string;
  linkTwo: string;
  showStickerTwo: boolean;
  stickerTextTwo: string;
  imageThree: string;
  titleThree: string;
  subtitleThree?: string;
  linkThree: string;
  showStickerThree: boolean;
  stickerTextThree: string;
  imageFour: string;
  titleFour: string;
  subtitleFour?: string;
  linkFour: string;
  showStickerFour: boolean;
  stickerTextFour: string;
}

function FourCardsWithPrompt({ ...props }: Props): JSX.Element {
  return <FourCardsWithPromptComponent {...props} />;
}

export default FourCardsWithPrompt;
