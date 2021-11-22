import { HeroLeftJustified } from 'components';

export default function netteamRenderComponent(componentName, componentData, index): JSX.Element {
  if (componentName) {
    console.log('[KOA]', 'Rendering', componentName, componentData);

    switch (componentName) {
      case 'HeroLeftJustified': {
        const { textOverline, textHeadline, textParagraph, mediaDesktop } = componentData;
        const { mediaItemUrl } = mediaDesktop;
        return (
          <HeroLeftJustified
            key={`${componentName}_${index}`}
            introTitle={textOverline}
            title={textHeadline}
            description={textParagraph}
            backgroundImage={mediaItemUrl}
          />
        );
      }
    }
  } else {
    return <p>Component &quot;{componentName}&quot; not found.</p>;
  }
}
