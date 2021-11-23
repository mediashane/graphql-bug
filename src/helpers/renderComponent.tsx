import {
  CallToAction,
  EmailSubscribe,
  HeroCenterButton,
  HeroLeftJustified,
  ThreeFeatureCards,
  ThreeImageButtons,
} from 'components';

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
      case 'HeroCenterButton': {
        const { textOverline, textHeadline, buttonLabel, media, textColor, hoverTextColor } = componentData;
        const { mediaItemUrl } = media;
        return (
          <HeroCenterButton
            key={`${componentName}_${index}`}
            textOverline={textOverline}
            textHeadline={textHeadline}
            buttonLabel={buttonLabel}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            media={mediaItemUrl}
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
      case 'EmailSubscribe': {
        const { title, placeholder, buttonLabel, subtitle, textColor, backgroundImage, backgroundColor } =
          componentData;
        const { mediaItemUrl } = backgroundImage;
        return (
          <EmailSubscribe
            key={`${componentName}_${index}`}
            title={title}
            placeholder={placeholder}
            buttonLabel={buttonLabel}
            subtitle={subtitle}
            textColor={textColor}
            backgroundImage={mediaItemUrl}
            backgroundColor={backgroundColor}
          />
        );
      }
      case 'ThreeFeatureCards': {
        const {
          sectionLabel,
          iconLayout,
          textColor,
          labelTextColor,
          imageOne,
          labelOne,
          descriptionOne,
          imageTwo,
          labelTwo,
          descriptionTwo,
          imageThree,
          labelThree,
          descriptionThree,
        } = componentData;
        const { mediaItemUrl: cardImageOne } = imageOne;
        const { mediaItemUrl: cardImageTwo } = imageTwo;
        const { mediaItemUrl: cardImageThree } = imageThree;

        return (
          <ThreeFeatureCards
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            iconLayout={iconLayout}
            textColor={textColor}
            labelTextColor={labelTextColor}
            imageOne={cardImageOne}
            labelOne={labelOne}
            descriptionOne={descriptionOne}
            imageTwo={cardImageTwo}
            labelTwo={labelTwo}
            descriptionTwo={descriptionTwo}
            imageThree={cardImageThree}
            labelThree={labelThree}
            descriptionThree={descriptionThree}
          />
        );
      }
    }
  } else {
    return <p>Component &quot;{componentName}&quot; not found.</p>;
  }
}
