import { ReactElement, useState } from 'react';
import { Button, ButtonTypes } from 'components/Button/Button';
import './Explanation.scss';

interface ExplanationProps {
  text: string;
}

export const Explanation = ({ text }: ExplanationProps): ReactElement => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="explanation">
      <p>{showAll ? text : `${text.substring(0, 100)}...`}</p>
      <Button
        label={showAll ? 'Show less' : 'Show more'}
        type={ButtonTypes.LINK}
        onClick={(): void => setShowAll(!showAll)}
      />
    </div>
  );
};
