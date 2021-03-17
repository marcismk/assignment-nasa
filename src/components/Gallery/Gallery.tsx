import { Button, ButtonTypes, Card, Resource, Modal } from 'components';
import { useResources } from 'hooks';
import { NasaResource } from 'interfaces/api';
import { ReactElement, useState } from 'react';
import './Gallery.scss';

export const Gallery = (): ReactElement => {
  const { resources, hasError, error, isLoading, getResource } = useResources();

  const [selected, setSelected] = useState<NasaResource>();

  return (
    <div className="gallery">
      <Button
        label="Next amazing image/video"
        onClick={getResource}
        type={ButtonTypes.PRIMARY}
        isLoading={isLoading}
      />

      {hasError && <p className="error">{error?.message}</p>}

      <div className="gallery-grid">
        {resources &&
          resources.map((res, index) => (
            <Card key={index} resource={res} onClick={setSelected} />
          ))}
      </div>

      {selected && (
        <Modal onClose={(): void => setSelected(undefined)}>
          <Resource resource={selected} />
        </Modal>
      )}
    </div>
  );
};
