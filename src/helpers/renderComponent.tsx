import { HeroLeftJustified } from 'components';

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
    }
  } else {
    return <p>Component &quot;{componentName}&quot; not found.</p>;
  }
}
