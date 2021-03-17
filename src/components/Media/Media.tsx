import { Spinner } from 'components/Spinner/Spinner';
import { ReactElement, useState } from 'react';
import './Media.scss';

enum MediaTypes {
  VIDEO = 'video',
  IMAGE = 'image',
}

interface MediaProps {
  type: string;
  url: string;
  title: string;
}

export const Media = ({ type, url, title }: MediaProps): ReactElement => {
  const [loaded, setLoaded] = useState(false);

  const renderVideo = (): ReactElement => (
    <iframe className="iframe" title={title} src={url} allowFullScreen />
  );

  const renderImage = (): ReactElement => {
    return (
      <div className="image-wrapper">
        {!loaded && <Spinner />}
        <img src={url} alt={title} onLoad={(): void => setLoaded(true)} />
      </div>
    );
  };

  return (
    <div className="media">
      {type === MediaTypes.VIDEO ? renderVideo() : renderImage()}
    </div>
  );
};
