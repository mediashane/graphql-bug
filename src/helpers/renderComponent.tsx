import {
  CallToAction,
  CardList,
  CardsCarousel,
  CenteredText,
  EmailSubscribe,
  FourCardsRow,
  FourCardsWithPrompt,
  FourFeatureTags,
  HeroCenterButton,
  HeroCenterTop,
  HeroLeftJustified,
  HeroRightJustified,
  OneColumnContent,
  ThreeFeatureCards,
  ThreeImageButtons,
  TwoColumnContent,
  TwoColumnGallery,
} from 'components';

export default function acfRenderComponent(componentName, componentData, index): JSX.Element {
  if (componentName) {
    // console.log('[KOA]', 'Rendering', componentName, componentData);
    switch (componentName) {
      case 'CardsCarousel': {
        const { cards, labelColor, textColor, textLinkLabel, textLinkUrl, sectionLabel } = componentData;
        return (
          <CardsCarousel
            key={`${componentName}_${index}`}
            cards={cards}
            labelColor={labelColor}
            textColor={textColor}
            textLinkLabel={textLinkLabel}
            textLinkUrl={textLinkUrl?.url ?? '/'}
            sectionLabel={sectionLabel}
          />
        );
      }
      case 'FourCardsWithPrompt': {
        const {
          flexDirection,
          withButton,
          buttonLabel,
          promptOverline,
          promptTopline,
          promptParagraph,
          promptImage,
          textColor,
          imageOne,
          titleOne,
          subtitleOne,
          linkOne,
          showStickerOne,
          stickerTextOne,
          imageTwo,
          titleTwo,
          subtitleTwo,
          linkTwo,
          showStickerTwo,
          stickerTextTwo,
          imageThree,
          titleThree,
          subtitleThree,
          linkThree,
          showStickerThree,
          stickerTextThree,
          imageFour,
          titleFour,
          subtitleFour,
          linkFour,
          showStickerFour,
          stickerTextFour,
        } = componentData;

        return (
          <FourCardsWithPrompt
            key={`${componentName}_${index}`}
            flexDirection={flexDirection}
            withButton={withButton}
            buttonLabel={buttonLabel}
            promptOverline={promptOverline}
            promptTopline={promptTopline}
            promptParagraph={promptParagraph}
            promptImage={promptImage?.mediaItemUrl ?? ''}
            paragraphTextColor={textColor}
            imageOne={imageOne?.mediaItemUrl ?? ''}
            titleOne={titleOne}
            subtitleOne={subtitleOne}
            linkOne={linkOne?.url ?? '/'}
            showStickerOne={showStickerOne}
            stickerTextOne={stickerTextOne}
            imageTwo={imageTwo?.mediaItemUrl ?? ''}
            titleTwo={titleTwo}
            subtitleTwo={subtitleTwo}
            linkTwo={linkTwo?.url ?? '/'}
            showStickerTwo={showStickerTwo}
            stickerTextTwo={stickerTextTwo}
            imageThree={imageThree?.mediaItemUrl ?? ''}
            titleThree={titleThree}
            subtitleThree={subtitleThree}
            linkThree={linkThree?.url ?? '/'}
            showStickerThree={showStickerThree}
            stickerTextThree={stickerTextThree}
            imageFour={imageFour?.mediaItemUrl ?? ''}
            titleFour={titleFour}
            subtitleFour={subtitleFour}
            linkFour={linkFour?.url ?? '/'}
            showStickerFour={showStickerFour}
            stickerTextFour={stickerTextFour}
          />
        );
      }
      case 'FourCardsRow': {
        const {
          textColor,
          imageOne,
          titleOne,
          subtitleOne,
          linkOne,
          showStickerOne,
          stickerTextOne,
          imageTwo,
          titleTwo,
          subtitleTwo,
          linkTwo,
          showStickerTwo,
          stickerTextTwo,
          imageThree,
          titleThree,
          subtitleThree,
          linkThree,
          showStickerThree,
          stickerTextThree,
          imageFour,
          titleFour,
          subtitleFour,
          linkFour,
          showStickerFour,
          stickerTextFour,
        } = componentData;

        return (
          <FourCardsRow
            key={`${componentName}_${index}`}
            textColor={textColor}
            imageOne={imageOne?.mediaItemUrl ?? ''}
            titleOne={titleOne}
            subtitleOne={subtitleOne}
            linkOne={linkOne?.url ?? '/'}
            showStickerOne={showStickerOne}
            stickerTextOne={stickerTextOne}
            imageTwo={imageTwo?.mediaItemUrl ?? ''}
            titleTwo={titleTwo}
            subtitleTwo={subtitleTwo}
            linkTwo={linkTwo?.url ?? '/'}
            showStickerTwo={showStickerTwo}
            stickerTextTwo={stickerTextTwo}
            imageThree={imageThree?.mediaItemUrl ?? ''}
            titleThree={titleThree}
            subtitleThree={subtitleThree}
            linkThree={linkThree?.url ?? '/'}
            showStickerThree={showStickerThree}
            stickerTextThree={stickerTextThree}
            imageFour={imageFour?.mediaItemUrl ?? ''}
            titleFour={titleFour}
            subtitleFour={subtitleFour}
            linkFour={linkFour?.url ?? '/'}
            showStickerFour={showStickerFour}
            stickerTextFour={stickerTextFour}
          />
        );
      }
      case 'FourFeatureTags': {
        const { textColor, imageOne, labelOne, imageTwo, labelTwo, imageThree, labelThree, imageFour, labelFour } =
          componentData;

        return (
          <FourFeatureTags
            key={`${componentName}_${index}`}
            textColor={textColor}
            imageOne={imageOne?.mediaItemUrl ?? ''}
            labelOne={labelOne}
            imageTwo={imageTwo?.mediaItemUrl ?? ''}
            labelTwo={labelTwo}
            imageThree={imageThree?.mediaItemUrl ?? ''}
            labelThree={labelThree}
            imageFour={imageFour?.mediaItemUrl ?? ''}
            labelFour={labelFour}
          />
        );
      }
      case 'TwoColumnGallery': {
        const {
          textOverline,
          textHeadline,
          textParagraph,
          backgroundColor,
          textColorPrimary,
          textColorSecondary,
          textAlign,
          withDivider,
          images,
          listItems,
          listItemsLarge,
          withButton,
          buttonLabel,
          withIconButtons,
          iconButtonsHeadline,
          iconButtonOneImage,
          iconButtonOneLink,
          iconButtonOneLabel,
          iconButtonTwoImage,
          iconButtonTwoLink,
          iconButtonTwoLabel,
          iconButtonThreeImage,
          iconButtonThreeLink,
          iconButtonThreeLabel,
        } = componentData;

        return (
          <TwoColumnGallery
            key={`${componentName}_${index}`}
            textOverline={textOverline}
            textHeadline={textHeadline}
            textParagraph={textParagraph}
            backgroundColor={backgroundColor}
            textColorPrimary={textColorPrimary}
            textColorSecondary={textColorSecondary}
            textAlign={textAlign}
            withDivider={withDivider}
            images={images}
            listItems={listItems}
            listItemsLarge={listItemsLarge}
            withButton={withButton}
            buttonLabel={buttonLabel}
            withIconButtons={withIconButtons}
            iconButtonsHeadline={iconButtonsHeadline}
            iconButtonOneImage={iconButtonOneImage?.mediaItemUrl ?? ''}
            iconButtonOneLink={iconButtonOneLink?.url ?? '/'}
            iconButtonOneLabel={iconButtonOneLabel}
            iconButtonTwoImage={iconButtonTwoImage?.mediaItemUrl ?? ''}
            iconButtonTwoLink={iconButtonTwoLink?.url ?? '/'}
            iconButtonTwoLabel={iconButtonTwoLabel}
            iconButtonThreeImage={iconButtonThreeImage?.mediaItemUrl ?? ''}
            iconButtonThreeLink={iconButtonThreeLink?.url ?? '/'}
            iconButtonThreeLabel={iconButtonThreeLabel}
          />
        );
      }
      case 'CardList': {
        const { cards, mobileSizeWide } = componentData;
        return <CardList key={`${componentName}_${index}`} cards={cards} mobileSizeWide={mobileSizeWide} />;
      }
      case 'CenteredText': {
        const { cta, backgroundColor, textColor, textSize } = componentData;
        return (
          <CenteredText
            key={`${componentName}_${index}`}
            text={cta[0]?.$on?.Cta?.ctaText?.cta}
            backgroundColor={backgroundColor}
            textColor={textColor}
            textSize={textSize}
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
          linkOne,
          buttonImageTwo,
          labelTwo,
          linkTwo,
          buttonImageThree,
          labelThree,
          linkThree,
        } = componentData;

        return (
          <ThreeImageButtons
            key={`${componentName}_${index}`}
            sectionLabel={sectionLabel}
            labelTextColor={labelTextColor}
            textColor={textColor}
            buttonImageOne={buttonImageOne?.mediaItemUrl ?? ''}
            labelOne={labelOne}
            linkOne={linkOne?.url ?? '/'}
            buttonImageTwo={buttonImageTwo?.mediaItemUrl ?? ''}
            labelTwo={labelTwo}
            linkTwo={linkTwo?.url ?? '/'}
            buttonImageThree={buttonImageThree?.mediaItemUrl ?? ''}
            labelThree={labelThree}
            linkThree={linkThree?.url ?? '/'}
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

        console.log('FEATURE CARDS? ', featureCards[0]?.$on?.Feature?.features.label);

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
    }
  } else {
    return <p>Component &quot;{componentName}&quot; not found.</p>;
  }
}
