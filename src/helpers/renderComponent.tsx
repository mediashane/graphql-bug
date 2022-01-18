import {
  CallToAction,
  CardList,
  CenteredText,
  ContactBanner,
  EmailSubscribe,
  HeroCenterButton,
  HeroCenterTop,
  HeroLeftJustified,
  HeroRightJustified,
  OneColumnContent,
  ThreeFeatureCards,
  ThreeImageButtons,
  TwoColumnContent,
} from 'components';
import LocationBanner from 'components/LocationBanner/LocationBanner';

export default function acfRenderComponent(componentName, componentData, index): JSX.Element {
  if (componentName) {
    // console.log('[KOA]', 'Rendering', componentName, componentData);
    switch (componentName) {
      case 'CardList': {
        const { cards, mobileSizeWide } = componentData;
        return <CardList key={`${componentName}_${index}`} cards={cards} mobileSizeWide={mobileSizeWide} />;
      }
      case 'CenteredText': {
        const { cta, backgroundColor, textColor, textSize, fontFamily, paragraphText, paragraphFontFamily } =
          componentData;
        return (
          <CenteredText
            key={`${componentName}_${index}`}
            text={cta[0]?.$on?.Cta?.ctaText?.cta}
            backgroundColor={backgroundColor}
            textColor={textColor}
            textSize={textSize}
            fontFamily={fontFamily}
            paragraphText={paragraphText}
            paragraphFontFamily={paragraphFontFamily}
          />
        );
      }
      case 'LocationBanner': {
        const { title, location, locationButtonLabel, dates, days, hours } = componentData;

        return (
          <LocationBanner
            key={`${componentName}_${index}`}
            title={title}
            addressOne={location[0]?.$on?.Location?.locations?.addressOne}
            addressTwo={location[0]?.$on?.Location?.locations?.addressTwo}
            addressThree={location[0]?.$on?.Location?.locations?.addressThree}
            locationButtonLabel={locationButtonLabel}
            buttonLink={location[0]?.$on?.Location?.locations?.mapLink}
            image={location[0]?.$on?.Location?.locations?.mapImage?.mediaItemUrl}
            dates={dates}
            days={days}
            hours={hours}
          />
        );
      }
      case 'ContactBanner': {
        const {
          title,
          description,
          addressOne,
          addressTwo,
          phoneNumber,
          faxNumber,
          email,
          locationButtonLabel,
          image,
        } = componentData;
        return (
          <ContactBanner
            key={`${componentName}_${index}`}
            title={title}
            description={description}
            addressOne={addressOne}
            addressTwo={addressTwo}
            phoneNumber={phoneNumber}
            faxNumber={faxNumber}
            email={email}
            locationButtonLabel={locationButtonLabel}
            image={image?.mediaItemUrl}
          />
        );
      }
      case 'HeroLeftJustified': {
        const { textOverline, textHeadline, textParagraph, media, textColor } = componentData;

        return (
          <HeroLeftJustified
            key={`${componentName}_${index}`}
            textOverline={textOverline}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            media={media?.mediaItemUrl ?? ''}
            textColor={textColor}
          />
        );
      }
      case 'HeroRightJustified': {
        const { textSubline, textHeadline, textMediaLabel, mediaIcon, image, textColor } = componentData;

        return (
          <HeroRightJustified
            key={`${componentName}_${index}`}
            textSubline={textSubline}
            textHeadline={textHeadline}
            textMediaLabel={textMediaLabel}
            mediaIcon={mediaIcon?.mediaItemUrl ?? ''}
            image={image?.mediaItemUrl ?? ''}
            textColor={textColor}
          />
        );
      }
      case 'HeroCenterButton': {
        const { textOverline, textHeadline, buttonLabel, media, textColor, hoverTextColor } = componentData;

        return (
          <HeroCenterButton
            key={`${componentName}_${index}`}
            textOverline={textOverline}
            textHeadline={textHeadline}
            buttonLabel={buttonLabel}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            media={media?.mediaItemUrl ?? ''}
          />
        );
      }
      case 'HeroCenterTop': {
        const { textOverline, textHeadline, textSubline, media, textColor } = componentData;

        return (
          <HeroCenterTop
            key={`${componentName}_${index}`}
            textOverline={textOverline}
            textHeadline={textHeadline}
            textSubline={textSubline}
            media={media?.mediaItemUrl ?? ''}
            textColor={textColor}
          />
        );
      }
      case 'OneColumnContent': {
        const { includeParagraph, textHeadline, textParagraph, image, textColor } = componentData;

        return (
          <OneColumnContent
            key={`${componentName}_${index}`}
            includeParagraph={includeParagraph}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            image={image?.mediaItemUrl ?? ''}
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

        return (
          <CallToAction
            key={`${componentName}_${index}`}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            media={media?.mediaItemUrl ?? ''}
            textColor={textColor}
            cardBackgroundColor={cardBackgroundColor}
            buttonLabel={buttonLabel}
            buttonUrl={buttonUrl}
            buttonTextColor={buttonTextColor}
            buttonBackgroundColor={buttonBackgroundColor}
          />
        );
      }
      case 'TwoColumnContent': {
        const {
          flexDirection,
          includeParagraph,
          image,
          alt,
          textHeadline,
          textParagraph,
          backgroundColor,
          headlineColor,
          paragraphColor,
        } = componentData;

        return (
          <TwoColumnContent
            key={`${componentName}_${index}`}
            flexDirection={flexDirection}
            includeParagraph={includeParagraph}
            image={image?.mediaItemUrl ?? ''}
            alt={alt}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            backgroundColor={backgroundColor}
            headlineColor={headlineColor}
            paragraphColor={paragraphColor}
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
          buttonImageTwo,
          labelTwo,
          buttonImageThree,
          labelThree,
        } = componentData;

        return (
          <ThreeImageButtons
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            labelTextColor={labelTextColor}
            textColor={textColor}
            buttonImageOne={buttonImageOne?.mediaItemUrl ?? ''}
            labelOne={labelOne}
            buttonImageTwo={buttonImageTwo?.mediaItemUrl ?? ''}
            labelTwo={labelTwo}
            buttonImageThree={buttonImageThree?.mediaItemUrl ?? ''}
            labelThree={labelThree}
          />
        );
      }
      case 'EmailSubscribe': {
        const { title, placeholder, buttonLabel, subtitle, textColor, backgroundImage, backgroundColor } =
          componentData;

        return (
          <EmailSubscribe
            key={`${componentName}_${index}`}
            title={title}
            placeholder={placeholder}
            buttonLabel={buttonLabel}
            subtitle={subtitle}
            textColor={textColor}
            backgroundImage={backgroundImage?.mediaItemUrl ?? ''}
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

        return (
          <ThreeFeatureCards
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            iconLayout={iconLayout}
            textColor={textColor}
            labelTextColor={labelTextColor}
            imageOne={imageOne?.mediaItemUrl ?? ''}
            labelOne={labelOne}
            descriptionOne={descriptionOne}
            imageTwo={imageTwo?.mediaItemUrl ?? ''}
            labelTwo={labelTwo}
            descriptionTwo={descriptionTwo}
            imageThree={imageThree?.mediaItemUrl ?? ''}
            labelThree={labelThree}
            descriptionThree={descriptionThree}
          />
        );
      }
      case 'ThreeFeatureCardsFeatures': {
        const { sectionLabel, iconLayout, textColor, labelTextColor, featureCards } = componentData;

        return (
          <ThreeFeatureCards
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            iconLayout={iconLayout}
            textColor={textColor}
            labelTextColor={labelTextColor}
            imageOne={featureCards[0]?.$on?.Feature?.features?.image?.mediaItemUrl ?? ''}
            labelOne={featureCards[0]?.$on?.Feature?.features.label ?? ''}
            descriptionOne={featureCards[0]?.$on?.Feature?.features?.description ?? ''}
            imageTwo={featureCards[1]?.$on?.Feature?.features?.image?.mediaItemUrl ?? ''}
            labelTwo={featureCards[1]?.$on?.Feature?.features.label ?? ''}
            descriptionTwo={featureCards[1]?.$on?.Feature?.features?.description ?? ''}
            imageThree={featureCards[2]?.$on?.Feature?.features?.image?.mediaItemUrl ?? ''}
            labelThree={featureCards[2]?.$on?.Feature?.features.label ?? ''}
            descriptionThree={featureCards[2]?.$on?.Feature?.features?.description ?? ''}
          />
        );
      }
      case 'ThreeFeatureCardsValues': {
        const { sectionLabel, iconLayout, textColor, labelTextColor, valueCards } = componentData;

        return (
          <ThreeFeatureCards
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            iconLayout={iconLayout}
            textColor={textColor}
            labelTextColor={labelTextColor}
            imageOne={valueCards[0]?.$on?.Value?.values?.image?.mediaItemUrl ?? ''}
            labelOne={valueCards[0]?.$on?.Value?.values?.label ?? ''}
            descriptionOne={valueCards[0]?.$on?.Value?.values.description ?? ''}
            imageTwo={valueCards[1]?.$on?.Value?.values?.image?.mediaItemUrl ?? ''}
            labelTwo={valueCards[1]?.$on?.Value?.values?.label ?? ''}
            descriptionTwo={valueCards[1]?.$on?.Value?.values.description ?? ''}
            imageThree={valueCards[2]?.$on?.Value?.values?.image?.mediaItemUrl ?? ''}
            labelThree={valueCards[2]?.$on?.Value?.values?.label ?? ''}
            descriptionThree={valueCards[2]?.$on?.Value?.values?.description ?? ''}
          />
        );
      }
    }
  } else {
    return <p>Component &quot;{componentName}&quot; not found.</p>;
  }
}
