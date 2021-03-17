import { render, screen } from '@testing-library/react';
import App from '../../modules/App';
import testData from '__tests__/test-data/nasaResources.json';
import { mocked } from 'ts-jest/utils';
import { useApod, useResources } from '../../hooks';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useApod');
jest.mock('../../hooks/useResources');

const mockedUseApod = mocked(useApod, true);
const mockedUseResources = mocked(useResources, true);

describe('App module unit tests', () => {
  const getResource = jest.fn();

  beforeEach(() => {
    mockedUseApod.mockReturnValue({
      resource: testData[0],
      error: undefined,
      hasError: false,
      isLoading: false,
    });

    mockedUseResources.mockReturnValue({
      resources: [testData[1]],
      error: undefined,
      getResource,
      hasError: false,
      isLoading: false,
    });
  });

  it('should render picture of the day', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Stonehenge: Ancient Monument to the Sun',
      })
    ).toBeInTheDocument();
  });

  it('should render additional picture in gallery after button click', () => {
    render(<App />);

    userEvent.click(
      screen.getByRole('button', { name: 'Next amazing image/video' })
    );

    expect(getResource).toBeCalled();

    expect(screen.getAllByTestId('card').length).toBe(1);
  });

  it('should render modal window in gallery image click', () => {
    render(<App />);

    userEvent.click(
      screen.getByRole('button', { name: 'Next amazing image/video' })
    );

    userEvent.click(screen.getByTestId('card'));

    expect(
      screen.getByRole('heading', { name: 'Clearing Skies' })
    ).toBeInTheDocument();
  });
});
