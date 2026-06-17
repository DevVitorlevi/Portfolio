import {
  ItemWrapper,
  PulseDot,
  Card,
  CompanyHeader,
  CompanyLogo,
  CompanyInfo,
  CompanyName,
  CompanyMeta,
  PeriodRow,
  CurrentBadge,
  RoleList,
  RoleItem,
  RoleHeader,
  RoleTitle,
  RolePeriod,
  BulletList,
  BulletItem,
  StackList,
  StackChip,
} from './TimelineItemStyle';

interface Role {
  title: string;
  period: string;
  description: string[];
  stack: string[];
}

interface TimelineItemProps {
  company: string;
  companyType: string;
  location: string;
  period: string;
  duration: string;
  current?: boolean;
  roles: Role[];
  delay: number;
  isLeft: boolean;
}

export default function TimelineItem({
  company,
  companyType,
  location,
  period,
  duration,
  current,
  roles,
  delay,
  isLeft,
}: TimelineItemProps) {
  const initials = company
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <ItemWrapper delay={delay} isLeft={isLeft}>
      {current && <PulseDot isLeft={isLeft} />}
      <Card>
        <CompanyHeader>
          <CompanyLogo>{initials}</CompanyLogo>
          <CompanyInfo>
            <CompanyName>{company}</CompanyName>
            <CompanyMeta>
              <span>{companyType}</span>
              <span>•</span>
              <span>{duration}</span>
            </CompanyMeta>
            <PeriodRow>
              <span>🗓️ {period}</span>
              {current && <CurrentBadge>Atual</CurrentBadge>}
            </PeriodRow>
            <CompanyMeta>📍 {location}</CompanyMeta>
          </CompanyInfo>
        </CompanyHeader>

        {roles.length > 1 ? (
          <RoleList>
            {roles.map((role, i) => (
              <RoleItem key={i}>
                <RoleHeader>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RolePeriod>{role.period}</RolePeriod>
                </RoleHeader>
                <BulletList>
                  {role.description.map((d, j) => (
                    <BulletItem key={j}>{d}</BulletItem>
                  ))}
                </BulletList>
                <StackList>
                  {role.stack.map((s, j) => (
                    <StackChip key={j}>{s}</StackChip>
                  ))}
                </StackList>
              </RoleItem>
            ))}
          </RoleList>
        ) : (
          <>
            <RoleHeader>
              <RoleTitle>{roles[0].title}</RoleTitle>
            </RoleHeader>
            <BulletList>
              {roles[0].description.map((d, j) => (
                <BulletItem key={j}>{d}</BulletItem>
              ))}
            </BulletList>
            <StackList>
              {roles[0].stack.map((s, j) => (
                <StackChip key={j}>{s}</StackChip>
              ))}
            </StackList>
          </>
        )}
      </Card>
    </ItemWrapper>
  );
}
