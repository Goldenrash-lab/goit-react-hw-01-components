import {
  Section,
  Heading2,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

import { getRandomColor } from 'components/helpers/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Heading2>{title}</Heading2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} $color={getRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};
