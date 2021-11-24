import {
  CallToAction,
  CardList,
  CenteredText,
  EmailSubscribe,
  FourCardsRow,
  FourCardsWithPrompt,
  FourFeatureTags,
  HeroCenterButton,
  HeroLeftJustified,
  ThreeFeatureCards,
  ThreeImageButtons,
  TwoColumnGallery,
} from 'components';

export default function netteamRenderComponent(componentName, componentData, index): JSX.Element {
  if (componentName) {
    // console.log('[KOA]', 'Rendering', componentName, componentData);

    switch (componentName) {
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
        const { mediaItemUrl: image } = promptImage;
        const { mediaItemUrl: cardImageOne } = imageOne;
        const { mediaItemUrl: cardImageTwo } = imageTwo;
        const { mediaItemUrl: cardImageThree } = imageThree;
        const { mediaItemUrl: cardImageFour } = imageFour;
        const { url: urlOne = '/' } = linkOne;
        const { url: urlTwo = '/' } = linkTwo;
        const { url: urlThree = '/' } = linkThree;
        const { url: urlFour = '/' } = linkFour;

        return (
          <FourCardsWithPrompt
            key={`${componentName}_${index}`}
            flexDirection={flexDirection}
            withButton={withButton}
            buttonLabel={buttonLabel}
            promptOverline={promptOverline}
            promptTopline={promptTopline}
            promptParagraph={promptParagraph}
            promptImage={image}
            paragraphTextColor={textColor}
            imageOne={cardImageOne}
            titleOne={titleOne}
            subtitleOne={subtitleOne}
            linkOne={urlOne}
            showStickerOne={showStickerOne}
            stickerTextOne={stickerTextOne}
            imageTwo={cardImageTwo}
            titleTwo={titleTwo}
            subtitleTwo={subtitleTwo}
            linkTwo={urlTwo}
            showStickerTwo={showStickerTwo}
            stickerTextTwo={stickerTextTwo}
            imageThree={cardImageThree}
            titleThree={titleThree}
            subtitleThree={subtitleThree}
            linkThree={urlThree}
            showStickerThree={showStickerThree}
            stickerTextThree={stickerTextThree}
            imageFour={cardImageFour}
            titleFour={titleFour}
            subtitleFour={subtitleFour}
            linkFour={urlFour}
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
        const { mediaItemUrl: cardImageOne } = imageOne;
        const { mediaItemUrl: cardImageTwo } = imageTwo;
        const { mediaItemUrl: cardImageThree } = imageThree;
        const { mediaItemUrl: cardImageFour } = imageFour;
        const { url: urlOne = '/' } = linkOne;
        const { url: urlTwo = '/' } = linkTwo;
        const { url: urlThree = '/' } = linkThree;
        const { url: urlFour = '/' } = linkFour;

        return (
          <FourCardsRow
            key={`${componentName}_${index}`}
            textColor={textColor}
            imageOne={cardImageOne}
            titleOne={titleOne}
            subtitleOne={subtitleOne}
            linkOne={urlOne}
            showStickerOne={showStickerOne}
            stickerTextOne={stickerTextOne}
            imageTwo={cardImageTwo}
            titleTwo={titleTwo}
            subtitleTwo={subtitleTwo}
            linkTwo={urlTwo}
            showStickerTwo={showStickerTwo}
            stickerTextTwo={stickerTextTwo}
            imageThree={cardImageThree}
            titleThree={titleThree}
            subtitleThree={subtitleThree}
            linkThree={urlThree}
            showStickerThree={showStickerThree}
            stickerTextThree={stickerTextThree}
            imageFour={cardImageFour}
            titleFour={titleFour}
            subtitleFour={subtitleFour}
            linkFour={urlFour}
            showStickerFour={showStickerFour}
            stickerTextFour={stickerTextFour}
          />
        );
      }
      case 'FourFeatureTags': {
        const { textColor, imageOne, labelOne, imageTwo, labelTwo, imageThree, labelThree, imageFour, labelFour } =
          componentData;
        const { mediaItemUrl: tagImageOne } = imageOne;
        const { mediaItemUrl: tagImageTwo } = imageTwo;
        const { mediaItemUrl: tagImageThree } = imageThree;
        const { mediaItemUrl: tagImageFour } = imageFour;

        return (
          <FourFeatureTags
            key={`${componentName}_${index}`}
            textColor={textColor}
            imageOne={tagImageOne}
            labelOne={labelOne}
            imageTwo={tagImageTwo}
            labelTwo={labelTwo}
            imageThree={tagImageThree}
            labelThree={labelThree}
            imageFour={tagImageFour}
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
            iconButtonOneImage={iconButtonOneImage}
            iconButtonOneLink={iconButtonOneLink}
            iconButtonOneLabel={iconButtonOneLabel}
            iconButtonTwoImage={iconButtonTwoImage}
            iconButtonTwoLink={iconButtonTwoLink}
            iconButtonTwoLabel={iconButtonTwoLabel}
            iconButtonThreeImage={iconButtonThreeImage}
            iconButtonThreeLink={iconButtonThreeLink}
            iconButtonThreeLabel={iconButtonThreeLabel}
          />
        );
      }
      case 'RugCollections': {
        const { collections, mobileSizeWide } = componentData;
        return <CardList key={`${componentName}_${index}`} cards={collections} mobileSizeWide={mobileSizeWide} />;
      }
      case 'CenteredText': {
        const { text, backgroundColor, textColor, textSize } = componentData;
        return (
          <CenteredText
            key={`${componentName}_${index}`}
            text={text}
            backgroundColor={backgroundColor}
            textColor={textColor}
            textSize={textSize}
          />
        );
      }
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
