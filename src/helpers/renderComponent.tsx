import { CallToAction, HeroLeftJustified, ThreeImageButtons } from 'components';

export default function netteamRenderComponent(componentName, componentData, index): JSX.Element {
  if (componentName) {
    console.log('[KOA]', 'Rendering', componentName, componentData);

    switch (componentName) {
      case 'HeroLeftJustified': {
        const { textOverline, textHeadline, textParagraph, media, textColor } = componentData;
        const { mediaItemUrl } = media;
        return (
          <HeroLeftJustified
            key={`${componentName}_${index}`}
            textOverline={textOverline}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            media={mediaItemUrl}
            textColor={textColor}
          />
        );
      }
      case 'CallToAction': {
        const {
          textHeadline,
          textParagraph,
          textColor,
          cardBackgroundColor,
          buttonLabel,
          media,
          buttonUrl,
          buttonTextColor,
          buttonBackgroundColor,
        } = componentData;
        const { mediaItemUrl } = media;
        return (
          <CallToAction
            key={`${componentName}_${index}`}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            media={mediaItemUrl}
            textColor={textColor}
            cardBackgroundColor={cardBackgroundColor}
            buttonLabel={buttonLabel}
            buttonUrl={buttonUrl}
            buttonTextColor={buttonTextColor}
            buttonBackgroundColor={buttonBackgroundColor}
          />
        );
      }
      case 'ThreeImageButtons': {
        const {
          sectionLabel,
          labelTextColor,
          textColor,
          buttonImageOne,
          labelOne,
          linkOne,
          buttonImageTwo,
          labelTwo,
          linkTwo,
          buttonImageThree,
          labelThree,
          linkThree,
        } = componentData;
        const { mediaItemUrl: imageOne } = buttonImageOne;
        const { mediaItemUrl: imageTwo } = buttonImageTwo;
        const { mediaItemUrl: imageThree } = buttonImageThree;
        const { url: buttonLinkOne } = linkOne;
        const { url: buttonLinkTwo } = linkTwo;
        const { url: buttonLinkThree } = linkThree;

        return (
          <ThreeImageButtons
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            labelTextColor={labelTextColor}
            textColor={textColor}
            buttonImageOne={imageOne}
            labelOne={labelOne}
            linkOne={buttonLinkOne}
            buttonImageTwo={imageTwo}
            labelTwo={labelTwo}
            linkTwo={buttonLinkTwo}
            buttonImageThree={imageThree}
            labelThree={labelThree}
            linkThree={buttonLinkThree}
          />
        );
      }
    }
  } else {
    return <p>Component &quot;{componentName}&quot; not found.</p>;
  }
}
