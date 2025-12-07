import { ItemWrapper, Card, Period, JobTitle, Description, Badge } from './TimelineItemStyle';

interface TimelineItemProps {
  period: string;
  title: string;
  badge?: string;
  description: string;
  delay: number;
  isLeft: boolean;
}

export default function TimelineItem({ period, title, badge, description, delay, isLeft }: TimelineItemProps) {
  return (
    <ItemWrapper delay={delay} isLeft={isLeft}>
      <Card>
        <Period>{period}</Period>
        <JobTitle>
          {title} <br />
          {badge && <Badge>{badge}</Badge>}
        </JobTitle>
        <Description>{description}</Description>
      </Card>
    </ItemWrapper>
  );
}