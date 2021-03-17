import { ReactElement } from 'react';
import { Spinner, Gallery, Resource, Footer } from '../components';
import { useApod } from '../hooks';
import './App.scss';

const App = (): ReactElement => {
  const { resource, isLoading, hasError, error } = useApod();

  return (
    <div className="container">
      <div>
        <div className="resource-of-the-day">
          {isLoading && <Spinner />}

          {!isLoading && resource && (
            <>
              <h1>
                {resource.media_type === 'video' ? 'Video' : 'Picture'} of the
                day
              </h1>
              <Resource resource={resource} />
            </>
          )}

          {hasError && <p className="error">{error?.message}</p>}
        </div>

        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default App;
