import { ReactElement } from 'react';
import { Media } from 'components';
import { NasaResource } from 'interfaces/api';
import './Card.scss';

interface CardProps {
  resource: NasaResource;
  onClick(resource: NasaResource): void;
}

export const Card = ({ resource, onClick }: CardProps): ReactElement => {
  return (
    <div
      className="card"
      onClick={(): void => onClick(resource)}
      data-testid="card"
    >
      <Media
        title={resource.title}
        type={resource.media_type}
        url={resource.url}
      />
    </div>
  );
};
