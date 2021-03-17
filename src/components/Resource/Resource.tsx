import { ReactElement } from 'react';
import { Media, Explanation } from 'components';
import { formatDate } from 'utils/helpers';
import { NasaResource } from 'interfaces/api';
import { CalendarOutlined, CopyrightOutlined } from '@ant-design/icons';
import cn from 'classnames';
import './Resource.scss';

interface ResourceProps {
  resource: NasaResource;
  column?: boolean;
}

export const Resource = ({ resource, column }: ResourceProps): ReactElement => {
  return (
    <div className={cn('resource', { 'resource-column': column })}>
      {resource && (
        <Media
          url={resource.url}
          type={resource.media_type}
          title={resource.title}
        />
      )}
      <div className="resource-info">
        <div>
          <h1>{resource.title}</h1>
          <Explanation text={resource.explanation} />
        </div>
        <div className="resource-footnotes">
          <div>
            <CalendarOutlined /> {formatDate(resource.date)}
          </div>
          {resource.copyright && (
            <div>
              <CopyrightOutlined /> {resource.copyright}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
